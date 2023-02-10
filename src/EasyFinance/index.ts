import { FinanceTransactionServiceBuilder } from '../services';

export class EasyFinance {
  get transactions(): FinanceTransactionServiceBuilder {
    return new FinanceTransactionServiceBuilder();
  }
}

export default EasyFinance;
