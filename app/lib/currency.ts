import { Currency } from '@prisma/client';

const getCurrencyType = (currency: Currency) => {
  switch (currency) {
    case Currency.BZD:
      return 'BZ$';
    case Currency.USD:
      return 'US$';
    default:
      throw Error('Unknown currency type: ', currency);
  }
};

export function getPrettyCurrency(amount: number, currency: Currency): string {
  return `${getCurrencyType(currency)} ${amount.toFixed(2)}`;
}
