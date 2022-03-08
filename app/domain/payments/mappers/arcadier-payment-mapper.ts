import axios from "axios";
import { nanoid } from "nanoid";
import { ekyash } from "~/config/index.server";
import Payment, { PaymentStatus } from "../entities/payment";
import { ArcadierPaymentRequest } from "../library/arcadier-api";

class ArcadierPaymentMapper {
  /**
   *
   * @param data
   * @returns The initial payment data send by arcadier
   */
  getPending(data: ArcadierPaymentRequest) {
    // don't find; just build the entity as we don't need to query arcadier for this.
    return this.buildEntity(data);
  }

  /**
   *
   * @param data
   * @returns Payment with the order details from arcadier
   */
  async find(
    data: Pick<ArcadierPaymentRequest, "gateway" | "hashkey" | "invoiceno"> & {
      paymentKey: string;
    }
  ) {
    const response = await axios.get(
      `${ekyash.routes.orderDetails}?gateway=${data.gateway}&invoiceNo=${data.invoiceno}&paykey=${data.paymentKey}&hashkey=${data.hashkey}`
    );

    return null;
  }

  private buildEntity(data: ArcadierPaymentRequest): Payment {
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
}

export default ArcadierPaymentMapper;
