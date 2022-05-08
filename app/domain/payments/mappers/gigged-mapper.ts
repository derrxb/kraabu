import { nanoid } from "nanoid";
import superagent from "superagent";
import Failure from "~/lib/failure";
import { OrderItemEntity } from "../entities/order-item";
import PaymentEntity, { Currency, PaymentStatus } from "../entities/payment";
import type { SupplierEntity } from "../entities/supplier";
import type { GiggedOrderHandshake } from "../library/gigged-api";
import { GiggedRoutes } from "../library/gigged-api";

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

  getInitialPayment(data: GiggedOrderHandshake, supplier: SupplierEntity) {
    return this.buildInitialEntity(data, supplier);
  }

  /**
   * This is used to find a payment's detail when the paymentKey is present
   * @param data
   * @returns The initial payment data send by arcadier
   */
  async findOrderWithOrderDetails(payment: PaymentEntity) {
    try {
      const response = await superagent.get(
        `${GiggedRoutes.OrderDetails}?gateway=${this.gateway}&invoiceNo=${payment.invoice}&paykey=${payment.additionalData.paymentKey}&hashkey=${this.hashkey}`
      );

      const order = JSON.parse(response.text) as OrderDetails;

      return this.buildEntity(payment, order);
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
          data.status === PaymentStatus.Completed
            ? "success"
            : data.status === PaymentStatus.Failed
            ? "error"
            : "",
      });
    } catch (e) {
      throw new Failure(
        "bad_request",
        "Could not update GiggedBz's order status."
      );
    }
  }

  private buildInitialEntity(
    data: GiggedOrderHandshake,
    supplier: SupplierEntity
  ): PaymentEntity {
    return new PaymentEntity({
      supplier: supplier,
      supplierId: supplier.id,
      status: PaymentStatus.Pending,
      amount: Number(data.total),
      currency: data.currency === "BZD" ? Currency.BZD : Currency.USD,
      description: data.invoiceno,
      invoice: data.invoiceno,
      additionalData: {
        gateway: data.gateway,
        hashkey: data.hashkey,
        paymentKey: nanoid(),
      },
    });
  }

  private buildEntity(payment: PaymentEntity, data: OrderDetails) {
    // Get all the totals from PayeesInfo and adds them up.
    const payees = data?.PayeeInfos?.[0];
    const total = data?.PayeeInfos?.map((item) => item.Total).reduce(
      (prev, curr) => prev + curr,
      0
    );

    // NOTE: This might change so we need to update this to
    // get the only item with a valid `Sku` value.
    const purchasedItem = data.PayeeInfos[0].Items[0];

    return new PaymentEntity({
      ...payment,
      amount: Number(total),
      currency: Currency[payees.Currency as Currency],
      additionalData: {
        ...payment.additionalData,
        payer: {
          name: data.PayeeInfos[0].Name,
          email: data.PayeeInfos[0].Email,
        },
      },
      orders: [
        new OrderItemEntity({
          name: purchasedItem.Name,
          description: purchasedItem.Description,
          // @TODO: Improve this to do the conversion for us.
          price: parseInt((purchasedItem.Price * 100).toString(), 10),
          quantity: purchasedItem.Quantity,
          currency: Currency.BZD,
          paymentId: payment.id as number,
        }),
      ],
    });
  }
}

export default GiggedMapper;
