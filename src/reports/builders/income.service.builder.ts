import { IncomeService } from '../services';
import { BaseReportServiceBuilder } from './base.service.builder';

export class IncomeServiceBuilder extends BaseReportServiceBuilder {
  build(): IncomeService {
    return new IncomeService(this.financeEntities);
  }
}
