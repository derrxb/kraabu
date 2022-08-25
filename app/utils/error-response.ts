import { json } from '@remix-run/node';
import { ValidationError } from 'joi';
import { getErrorMessage } from '~/lib/error-messages';
import Failure from '~/lib/failure';

export class ErrorResponse {
  private error: unknown;

  constructor(error: unknown) {
    this.error = error;
  }

  async call(formData?: FormData) {
    // Note: Remix throws responses. We catch them here and re-throw them.
    if (this.error instanceof Response) {
      throw this.error;
    }

    if (!formData) {
      throw new Failure('internal_error', 'This is a forms only route');
    }

    // Note: This is JOI validation errors.
    if (this.error instanceof ValidationError) {
      return json({
        values: Object.fromEntries(formData) as { [key: string]: string },
        errors: this.error.details.reduce((acc, curr) => {
          return {
            ...acc,
            [curr.context?.label! || curr.context?.key!]: curr.message,
          };
        }, {}) as { [key: string]: string },
      });
    }

    return json({
      values: Object.fromEntries(formData) as { [key: string]: string },
      errors: {
        general: getErrorMessage(this.error),
      } as { [key: string]: string },
    });
  }
}