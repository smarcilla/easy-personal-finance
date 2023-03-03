import { ConceptReportEntity } from '../interfaces';
import { ReportHelperService } from '../interfaces/report.helper.service.interface';

export class ConceptReportService
  implements ReportHelperService<ConceptReportEntity>
{
  getReport(): Promise<ConceptReportEntity> {
    throw new Error('Method not implemented.');
  }
}
