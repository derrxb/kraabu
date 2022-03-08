import { ekyash } from "~/config/index.server";
import { createNewInvoice, getAuthorization } from "../library/ekyash-api";
import PaymentRepository from "../repositories/payment-repository";

export default class RequestEkyashPaymentQrCode {
  private invoiceNo: string;
  private paymentKey: string;

  constructor(invoiceNo: string, paymentKey: string) {
    this.invoiceNo = invoiceNo;
    this.paymentKey = paymentKey;
  }

  async call() {
    const pendingPayment = await PaymentRepository.getPaymentByInvoice(
      this.invoiceNo
    );

    if (!pendingPayment) {
      throw new Error("Payment with the given invoice does not exist.");
    }

    const session = await getAuthorization({
      sid: ekyash.credentials.SID,
      pinHash: ekyash.credentials["Pin Hash"],
      pushKey: "",
    });

    console.log(session);

    const paymentResponse = await createNewInvoice({
      amount: pendingPayment.currency.amount,
      description: pendingPayment.description,
      currency: "BZD",
      orderId: pendingPayment.invoice,
      session: session.Session,
    });

    console.log(paymentResponse);

    const inProgressPayment = await PaymentRepository.setPaymentQrCodeUrl(
      pendingPayment,
      paymentResponse.qrUrl
    );

    if (!inProgressPayment) {
      throw new Error("Something unexpected happened with this payment.");
    }

    return inProgressPayment;
  }
}
