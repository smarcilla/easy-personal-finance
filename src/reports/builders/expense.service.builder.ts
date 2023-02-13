import { ExpenseService } from '../services';
import { BaseReportServiceBuilder } from './base.service.builder';

export class ExpenseServiceBuilder extends BaseReportServiceBuilder {
  build(): ExpenseService {
    return new ExpenseService(this.financeEntities);
  }
}
