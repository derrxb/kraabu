import axios from "axios";
import { nanoid } from "nanoid";
import Failure from "~/lib/failure";
import Payment, {
  GiggedOrderDetails,
  PaymentStatus,
} from "../entities/payment";
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

  getInitialPayment(data: GiggedOrderHandshake) {
    return this.buildInitialEntity(data);
  }

  /**
   * This is used to find a payment's detail when the paymentKey is present
   * @param data
   * @returns The initial payment data send by arcadier
   */
  async findOrderWithPaymentKey(
    data: Pick<GiggedOrderHandshake, "invoiceno"> & {
      paymentKey: string;
    }
  ) {
    try {
      const response = await axios.get(
        `${GiggedRoutes.OrderDetails}?gateway=${this.gateway}&invoiceNo=${data.invoiceno}&paykey=${data.paymentKey}&hashkey=${this.hashkey}`
      );

      const order = response.data as OrderDetails;

      return this.buildEntity(order);
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  async updateOrderStatus(
    data: Pick<Payment, "invoice" | "status"> &
      Pick<GiggedOrderDetails, "gateway" | "hashkey" | "paymentKey">
  ) {
    try {
      await axios.post(`${GiggedRoutes.TransactionStatus}`, {
        invoiceno: data.invoice,
        hashkey: data.hashkey,
        gateway: data.gateway,
        paykey: data.paymentKey,
        status:
          data.status === PaymentStatus.Completed
            ? "success"
            : data.status === PaymentStatus.Failure
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

  private buildInitialEntity(data: GiggedOrderHandshake): Payment {
    return new Payment({
      user: "giggedBz",
      status: PaymentStatus.Pending,
      currency: {
        amount: Number(data.total),
        type: data.currency,
      },
      description: data.invoiceno,
      invoice: data.invoiceno,
      additionalData: {
        gateway: data.gateway,
        hashkey: data.hashkey,
        paymentKey: nanoid(),
      },
    });
  }

  private buildEntity(data: OrderDetails): Payment {
    // Get all the totals from PayeesInfo and adds them up.
    const total = data?.PayeeInfos?.map((item) => item.Total).reduce(
      (prev, curr) => prev + curr,
      0
    );

    // NOTE: This might change so we need to update this to
    // get the only item with a valid `Sku` value.
    const purchasedItem = data.PayeeInfos[0].Items[0];

    return new Payment({
      user: "giggedBz",
      status: PaymentStatus.Pending,
      currency: {
        amount: Number(total),
        type: "BZD",
      },
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
