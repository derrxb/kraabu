import { json } from 'remix';
import { getErrorMessage } from '~/lib/error-messages';
import Failure from '~/lib/failure';
import { HTTP_CODE } from './http-response-representer';

export const getFormattedFailureResponse = (e: unknown) => {
  if (e instanceof Failure) {
    return json({ message: e.message }, HTTP_CODE[e.status]);
  } else {
    return json({ message: `There was an unexpected error: ${getErrorMessage(e)}` }, HTTP_CODE.internal_error);
  }
};
