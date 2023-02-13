import { FinanceTransactionEntity } from '../../entities';

export class BaseReportServiceBuilder {
  protected financeEntities!: FinanceTransactionEntity[];

  withData(financeEntities: FinanceTransactionEntity[]) {
    this.financeEntities = financeEntities;

    return this;
  }
}
