import { json } from 'remix';
import { logError } from '~/infrastructure/logging/index.server';
import { getErrorMessage } from '~/lib/error-messages';
import Failure from '~/lib/failure';
import { HTTP_CODE } from './http-response-representer';

export const getFormattedFailureResponse = (e: unknown, request?: Request) => {
  if (e instanceof Failure) {
    logError(e.message, request);
    return json({ message: e.message }, HTTP_CODE[e.status]);
  } else {
    logError(getErrorMessage(e), request);
    return json({ message: `There was an unexpected error: ${getErrorMessage(e)}` }, HTTP_CODE.internal_error);
  }
};
