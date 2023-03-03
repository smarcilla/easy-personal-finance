import { NoteReportEntity } from '../interfaces/note.report.entity.interface';
import { ReportHelperService } from '../interfaces/report.helper.service.interface';

export class NoteReportService
  implements ReportHelperService<NoteReportEntity>
{
  getReport(): Promise<NoteReportEntity> {
    throw new Error('Method not implemented.');
  }
}
