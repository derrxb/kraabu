import { STATUS_CODE } from "~/representers/http-reponse-representer";

class Failure extends Error {
  status: STATUS_CODE;
  message: string;

  constructor(status: STATUS_CODE, message: string) {
    super(message);

    this.status = status;
    this.message = message;
  }
}

export default Failure;
