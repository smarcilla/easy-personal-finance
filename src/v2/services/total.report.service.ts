import { ReportHelperService } from '../interfaces/report.helper.service.interface';
import { TotalReportEntity } from '../interfaces/total.report.entity.interface';

export class TotalReportService
  implements ReportHelperService<TotalReportEntity>
{
  getReport(): TotalReportEntity {
    throw new Error('Method not implemented.');
  }
}
