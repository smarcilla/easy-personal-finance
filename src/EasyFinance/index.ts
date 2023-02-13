import { ReportServiceBuilder } from '../reports/builders';
import { FinanceTransactionServiceBuilder } from '../services';

export class EasyFinance {
  get transactions(): FinanceTransactionServiceBuilder {
    return new FinanceTransactionServiceBuilder();
  }

  get reports(): ReportServiceBuilder {
    return new ReportServiceBuilder();
  }
}

export default EasyFinance;
