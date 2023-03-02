import { CurrencyEnum } from '../types/currency.enum';

//https://docs.commercetools.com/api/types#typedmoney
export interface AmountEntity {
  centAmount: number;
  currencyCode: CurrencyEnum;
  fractionDigits: number;
}
