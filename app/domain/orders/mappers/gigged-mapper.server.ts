import { Currency, OrderStatus } from '@prisma/client';
import { nanoid } from 'nanoid';
import superagent from 'superagent';
import Failure from '~/lib/failure';
import type { EKyashEntity } from '../entities/ekyash';
import { OrderEntity } from '../entities/order';
import type { SupplierEntity } from '../entities/supplier';
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

  getPaymentFromHandshake(data: GiggedOrderHandshake, supplier: SupplierEntity): OrderEntity {
    const order = new OrderEntity({
      supplier: supplier,
      supplierId: supplier.id,
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
   * Load a payment's order details from GiggedBZ's website.
   * @returns The initial payment data send by arcadier
   */
  async getPaymentOrderDetails(options: { invoiceNo: string; paykey: string }) {
    try {
      const url = new URL(GiggedRoutes.OrderDetails);
      const query = new URLSearchParams({ ...options, gateway: this.gateway, hashkey: this.hashkey });
      const response = await superagent.get(`${url.toString()}?${query.toString()}`);
      const order = JSON.parse(response.text) as OrderDetails;

      console.log('GIGGED ORDER => ', order);

      // Get all the totals from PayeesInfo and adds them up.
      const payees = order?.PayeeInfos?.[0];
      const total = order?.PayeeInfos?.map((item) => item.Total).reduce((prev, curr) => {
        return Number(prev) + Number(curr);
      }, 0);

      // NOTE: This might change so we need to update this to
      // get the only item with a valid `Sku` value.
      const purchasedItem = order.PayeeInfos[0].Items[0];

      return {
        amount: parseInt((Number(total) * 100).toString(), 10),
        currency: Currency[payees.Currency as Currency],
        payer: {
          name: order.PayeeInfos[0].Name,
          email: order.PayeeInfos[0].Email,
        },
        orderItems: [
          {
            name: purchasedItem.Name,
            description: purchasedItem.Description,
            price: parseInt((purchasedItem.Price * 100).toString(), 10),
            quantity: purchasedItem.Quantity,
            currency: Currency.BZD,
          },
        ],
      };
    } catch (e) {
      throw e;
    }
  }

  async updateOrderStatus(data: OrderEntity) {
    console.log('ORDER TO UPDATE => ', data);
    console.log('UPDATE TO: ', {
      invoiceNo: data.invoice,
      hashkey: data.additionalData.hashkey,
      gateway: data.additionalData.gateway,
      paykey: data.additionalData.paymentKey,
      status: data.status === OrderStatus.Completed ? 'success' : data.status === OrderStatus.Failed ? 'failed' : '',
    });

    try {
      const response = await superagent.post(`${GiggedRoutes.TransactionStatus}`).send({
        invoiceNo: data.invoice,
        hashkey: data.additionalData.hashkey,
        gateway: data.additionalData.gateway,
        paykey: data.additionalData.paymentKey,
        status: data.status === OrderStatus.Completed ? 'success' : data.status === OrderStatus.Failed ? 'failed' : '',
      });

      console.log(response.text);

      try {
        console.log('RESPONSE: ', JSON.parse(response.text));
      } catch (e) {}
    } catch (e) {
      throw new Failure('bad_request', "Could not update GiggedBz's order status.");
    }
  }

  async validatePaymentCallback(data: CompletedPaymentCallbackData, eKyash: EKyashEntity) {
    return isCallbackRequestValid(data, eKyash.apiKey);
  }
}

export default GiggedMapper;
