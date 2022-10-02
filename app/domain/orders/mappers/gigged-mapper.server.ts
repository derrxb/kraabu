import { nanoid } from 'nanoid';
import superagent from 'superagent';
import { Currency, OrderStatus } from '~/domain/orders/entities/order';
import { getErrorMessage } from '~/lib/error-messages';
import Failure from '~/lib/failure';
import type { EKyashEntity } from '../entities/ekyash';
import { OrderEntity } from '../entities/order';
import type { UserEntity } from '../entities/user';
import type { CompletedPaymentCallbackData } from '../library/ekyash-api';
import { isCallbackRequestValid } from '../library/ekyash-api';
import type { GiggedOrderHandshake } from '../library/gigged-api';
import { GiggedRoutes } from '../library/gigged-api';

type OrderItem = {
  Id: string;
  ItemId: string;
  Sku: string;
  Name: string;
  Description: string;
  Currency: string;
  Price: number;
  Quantity: number;
};

type Payer = {
  Id: string;
  Name: string;
  Email: string;
};

type OrderDetails = {
  PayeeInfos: {
    Id: string;
    Name: string;
    Email: string;
    Total: number;
    Currency: string;
    OrderId: number;
    Items: OrderItem[];
  }[];
  InvoiceNo: string;
  Payer: Payer;
};

class GiggedMapper {
  private gateway: string;
  private hashkey: string;

  constructor(gateway: string, hashkey: string) {
    this.gateway = gateway;
    this.hashkey = hashkey;
  }

  getOrderFromHandshake(data: GiggedOrderHandshake, user: UserEntity): OrderEntity {
    const order = new OrderEntity({
      productId: null,
      userId: null,
      status: OrderStatus?.Pending,
      amount: Number(data.total) * 100,
      currency: data.currency === 'BZD' ? Currency.BZD : Currency.USD,
      description: 'A GiggedBZ Order via EKyash',
      invoice: data.invoiceno,
      additionalData: {
        gateway: data.gateway,
        hashkey: data.hashkey,
        paymentKey: nanoid(),
      },
    });

    return order;
  }

  /**
   * Load an order's payment details from GiggedBZ's website.
   * @returns The initial payment data send by arcadier
   */
  async getOrderPaymentDetails(options: { invoiceNo: string; paykey: string }) {
    const url = new URL(GiggedRoutes.OrderDetails);
    const query = new URLSearchParams({ ...options, gateway: this.gateway, hashkey: this.hashkey });
    const response = await superagent.get(`${url.toString()}?${query.toString()}`);
    const order = JSON.parse(response.text) as OrderDetails;

    // Get all the totals from PayeesInfo and adds them up.
    const payees = order?.PayeeInfos?.[0];
    const total = order?.PayeeInfos?.map((item) => item.Total).reduce((prev, curr) => {
      return Number(prev) + Number(curr);
    }, 0);

    const currency: keyof typeof Currency = payees.Currency as keyof typeof Currency;

    return {
      amount: parseInt((Number(total) * 100).toString(), 10),
      currency: Currency[currency],
      payer: {
        name: order.PayeeInfos[0].Name,
        email: order.PayeeInfos[0].Email,
      },
      // Note: Admin Fee is used to omit the admin fee from the items.
      orderItems: order.PayeeInfos[0].Items.filter((item) => !item.Id.includes('Admin Fee')).map((item) => ({
        name: item.Name,
        description: item.Description,
        price: parseInt((item.Price * 100).toString(), 10) * item.Quantity,
        quantity: item.Quantity,
        currency: Currency.BZD,
      })),
    };
  }

  async updateOrderStatus(data: OrderEntity) {
    try {
      await superagent.post(`${GiggedRoutes.TransactionStatus}`).send({
        invoiceNo: data.invoice,
        hashkey: data.additionalData.hashkey,
        gateway: data.additionalData.gateway,
        paykey: data.additionalData.paymentKey,
        status: data.status === OrderStatus.Completed ? 'success' : data.status === OrderStatus.Failed ? 'failed' : '',
      });
    } catch (e) {
      console.log('ERROR UPDATING GIGGEDBZ: ', e, getErrorMessage(e));
      throw new Failure('bad_request', getErrorMessage(e));
    }
  }

  async validatePaymentCallback(data: CompletedPaymentCallbackData, eKyash: EKyashEntity) {
    return isCallbackRequestValid(data, eKyash.apiKey);
  }
}

export default GiggedMapper;
