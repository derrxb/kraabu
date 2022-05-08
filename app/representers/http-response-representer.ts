export type SUCCESS_STATUS_CODE = 'ok' | 'created' | 'processing' | 'no_content';

export type FAILURE_STATUS_CODE =
  | 'forbidden'
  | 'not_found'
  | 'bad_request'
  | 'conflict'
  | 'cannot_process'
  | 'internal_error';
export type STATUS_CODE = SUCCESS_STATUS_CODE | FAILURE_STATUS_CODE;

export const HTTP_CODE = {
  ok: 200,
  created: 201,
  processing: 202,
  no_content: 204,
  forbidden: 403,
  not_found: 404,
  bad_request: 400,
  conflict: 409,
  cannot_process: 422,
  internal_error: 500,
};

class HttpResponse {
  status: string;
  message: string;

  HTTP_CODE: { [key: string]: number } = HTTP_CODE;

  constructor(status: STATUS_CODE, message: string) {
    this.status = status;
    this.message = message;
  }

  http_status_code() {
    return this.HTTP_CODE[this.status];
  }
}

export default HttpResponse;
