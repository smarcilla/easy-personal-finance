import { ConceptReportEntity } from '../interfaces';
import { ReportHelperService } from '../interfaces/report.helper.service.interface';

export class ConceptReportService
  implements ReportHelperService<ConceptReportEntity>
{
  getReport(): ConceptReportEntity {
    throw new Error('Method not implemented.');
  }
}
