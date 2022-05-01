import axios from "axios";
import { nanoid } from "nanoid";
import Failure from "~/lib/failure";
import PaymentEntity, { Currency, PaymentStatus } from "../entities/payment";
import { SupplierEntity } from "../entities/supplier";
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
  async findOrderWithPaymentKey(
    data: Pick<GiggedOrderHandshake, "invoiceno"> & {
      paymentKey: string;
    },
    supplier: SupplierEntity
  ) {
    try {
      const response = await axios.get(
        `${GiggedRoutes.OrderDetails}?gateway=${this.gateway}&invoiceNo=${data.invoiceno}&paykey=${data.paymentKey}&hashkey=${this.hashkey}`
      );

      const order = response.data as OrderDetails;

      return this.buildEntity(order, supplier);
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  async updateOrderStatus(data: PaymentEntity) {
    try {
      await axios.post(`${GiggedRoutes.TransactionStatus}`, {
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

  private buildEntity(
    data: OrderDetails,
    supplier: SupplierEntity
  ): PaymentEntity {
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
      supplier: supplier,
      supplierId: supplier.id,
      status: PaymentStatus.Pending,
      amount: Number(total),
      currency: payees.Currency === "BZD" ? Currency.BZD : Currency.USD,
      description: "A GiggedBz order using EKyash.",
      invoice: data.InvoiceNo,
      additionalData: {
        payer: {
          name: data.PayeeInfos[0].Name,
          email: data.PayeeInfos[0].Email,
        },
        order: {
          id: purchasedItem.Id,
          name: purchasedItem.Name,
          description: purchasedItem.Description,
          price: purchasedItem.Price,
          quantity: purchasedItem.Quantity,
        },
      },
    });
  }
}

export default GiggedMapper;
