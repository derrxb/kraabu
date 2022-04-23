import axios from "axios";
import { nanoid } from "nanoid";
import Payment, { PaymentStatus } from "../entities/payment";
import { GiggedOrderHandshake, GiggedRoutes } from "../library/gigged-api";

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
  getInitialPayment(data: GiggedOrderHandshake) {
    return this.buildInitialEntity(data);
  }

  /**
   * This is used to find a payment's detail when the paymentKey is present
   * @param data
   * @returns The initial payment data send by arcadier
   */
  async findOrderWithPaymentKey(
    data: GiggedOrderHandshake & { paymentKey: string }
  ) {
    const response = await axios.get(
      `${GiggedRoutes.OrderStatus}?gateway=${data.gateway}&invoiceNo=${data.invoiceno}&paykey=${data.paymentKey}&hashkey=${data.hashkey}`
    );

    const order = response.data as OrderDetails;

    return this.buildEntity(order);
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
    const total = data.PayeeInfos.map((item) => item.Total).reduce(
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
