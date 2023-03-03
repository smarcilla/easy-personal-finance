import { MortgageReportEntity } from '../interfaces/mortgage.report.entity.interface';
import { ReportHelperService } from '../interfaces/report.helper.service.interface';

export class MortgageReportService
  implements ReportHelperService<MortgageReportEntity>
{
  getReport(): Promise<MortgageReportEntity> {
    throw new Error('Method not implemented.');
  }
}
