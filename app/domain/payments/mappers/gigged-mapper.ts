import { nanoid } from 'nanoid';
import superagent from 'superagent';
import Failure from '~/lib/failure';
import { Currency, PaymentEntity, PaymentStatus } from '../entities/payment';
import type { SupplierEntity } from '../entities/supplier';
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

  getPaymentFromHandshake(data: GiggedOrderHandshake, supplier: SupplierEntity): PaymentEntity {
    return new PaymentEntity({
      supplier: supplier,
      supplierId: supplier.id,
      status: PaymentStatus.Pending,
      amount: Number(data.total),
      currency: data.currency === 'BZD' ? Currency.BZD : Currency.USD,
      description: 'A GiggedBZ Order via EKyash',
      invoice: data.invoiceno,
      additionalData: {
        gateway: data.gateway,
        hashkey: data.hashkey,
        paymentKey: nanoid(),
      },
    });
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

  async updateOrderStatus(data: PaymentEntity) {
    try {
      await superagent.post(`${GiggedRoutes.TransactionStatus}`).send({
        invoiceno: data.invoice,
        hashkey: data.additionalData.hashkey,
        gateway: data.additionalData.hashkey,
        paykey: data.additionalData.paymentKey,
        status:
          data.status === PaymentStatus.Completed ? 'success' : data.status === PaymentStatus.Failed ? 'error' : '',
      });
    } catch (e) {
      throw new Failure('bad_request', "Could not update GiggedBz's order status.");
    }
  }
}

export default GiggedMapper;
