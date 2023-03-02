import { ReportBuilder } from '../interfaces/report.builder.interface';
import { ReportService } from '../interfaces/report.service.interface';
import { EasyFinanceReportService } from '../services';
import { CategoryReportService } from '../services/category.report.service';
import { ConceptReportService } from '../services/concept.report.service';
import { MortgageReportService } from '../services/mortgage.report.service';
import { MovementReportService } from '../services/movement.report.service';
import { NoteReportService } from '../services/note.report.service';
import { TotalReportService } from '../services/total.report.service';

export class EasyFinanceReportBuilder implements ReportBuilder {
  build(): ReportService {
    const categoryReportService = new CategoryReportService();
    const totalReportService = new TotalReportService();
    const conceptReportService = new ConceptReportService();
    const movementReportService = new MovementReportService();
    const noteReportService = new NoteReportService();
    const mortgageReportService = new MortgageReportService();

    return new EasyFinanceReportService(
      categoryReportService,
      totalReportService,
      conceptReportService,
      movementReportService,
      noteReportService,
      mortgageReportService
    );
  }
}
