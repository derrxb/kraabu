import { Currency } from '~/entities/order';
import Failure from '~/lib/failure';

export class OneLinkAmountValue {
  private amount: number;
  private currency: string;

  constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = currency;
  }

  private getCurrency() {
    switch (this.currency) {
      case Currency.BZD:
        return Currency.BZD;
      case Currency.USD:
        return Currency.USD;
      default:
        throw new Failure('internal_error', 'Currency not supported');
    }
  }

  private toDollarValue() {
    const currency = this.getCurrency();
    if (currency === Currency.USD) {
      // convert usd to bzd
      return (this.amount * 2) / 100;
    }

    if (currency === Currency.BZD) {
      return this.amount / 100;
    }

    throw new Error('Invalid amount');
  }

  toJSON() {
    return this.toDollarValue();
  }
}
