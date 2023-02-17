import { BalanceSheetService } from '../services';
import { BaseReportServiceBuilder } from './base.service.builder';

export class BalanceServiceBuilder extends BaseReportServiceBuilder {
  build(): BalanceSheetService {
    return new BalanceSheetService(this.financeEntities);
  }
}
