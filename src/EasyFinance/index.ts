import { FinanceTransactionServiceBuilder } from '../services';

export default class EasyFinance {
  get transactions(): FinanceTransactionServiceBuilder {
    return new FinanceTransactionServiceBuilder();
  }
}
