import { MovementReportEntity } from '../interfaces/movement.report.entity.interface';
import { ReportHelperService } from '../interfaces/report.helper.service.interface';

export class MovementReportService
  implements ReportHelperService<MovementReportEntity>
{
  getReport(): MovementReportEntity {
    throw new Error('Method not implemented.');
  }
}
