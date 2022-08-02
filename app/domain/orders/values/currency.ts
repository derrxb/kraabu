import { Currency } from '~/entities/order';
import Failure from '~/lib/failure';

export class CurrencyValue {
  private currency: string;

  constructor(currency: string) {
    this.currency = currency;
  }

  call() {
    switch (this.currency) {
      case Currency.BZD:
        return Currency.BZD;
      case Currency.USD:
        return Currency.USD;
      default:
        throw new Failure('internal_error', 'Currency not supported');
    }
  }

  toJSON() {
    return this.currency;
  }
}
