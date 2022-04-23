import { ActionFunction, json } from "remix";

export const action: ActionFunction = async ({ params }) => {
  try {
    // const payment = await new CompletePendingEkyashPayment(params).call();
    // return redirect(
    //   `https://giggedbz.arcadier.io/user/checkout/current-status?invoiceNo=${payment?.invoice}`
    // );
  } catch (e) {
    return json(
      {
        message: "There was an error with completing your payment.",
      },
      404
    );
  }
};
