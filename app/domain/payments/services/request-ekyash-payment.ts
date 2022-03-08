import { ekyash } from "~/config/index.server";
import Payment from "../entities/payment";
import { createNewInvoice, getAuthorization } from "../library/ekyash-api";
import PaymentRepository from "../repositories/payment-repository";

export default class RequestEkyashPayment {
  private payment: Payment;
  private user: { name: string; phoneNumber: string };

  constructor(payment: Payment, user: { name: string; phoneNumber: string }) {
    this.payment = payment;
    this.user = user;
  }

  async call() {
    const session = await getAuthorization({
      Sid: ekyash.credentials.SID,
      pinHash: ekyash.credentials["Pin Hash"],
      pushKey: "",
    });

    let paymentResponse = await createNewInvoice({
      amount: this.payment.currency.amount,
      description: this.payment.description,
      currency: "BZD",
      orderId: this.payment.invoice,
      session: session.Session,
    });

    this.payment = await PaymentRepository.setPaymentQrCodeUrl(
      this.payment,
      paymentResponse.qrUrl
    );
  }
}
