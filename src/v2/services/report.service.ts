import { ConceptReportEntity, ReportService } from '../interfaces';
import { CategoryReportEntity } from '../interfaces/category.report.entity.interface';
import { MortgageReportEntity } from '../interfaces/mortgage.report.entity.interface';
import { MovementReportEntity } from '../interfaces/movement.report.entity.interface';
import { NoteReportEntity } from '../interfaces/note.report.entity.interface';
import { TotalReportEntity } from '../interfaces/total.report.entity.interface';
import { CategoryReportService } from './category.report.service';
import { ConceptReportService } from './concept.report.service';
import { MortgageReportService } from './mortgage.report.service';
import { MovementReportService } from './movement.report.service';
import { NoteReportService } from './note.report.service';
import { TotalReportService } from './total.report.service';

export class EasyFinanceReportService implements ReportService {
  constructor(
    private categoryReportService: CategoryReportService,
    private totalReportService: TotalReportService,
    private conceptReportService: ConceptReportService,
    private movementReportService: MovementReportService,
    private noteReportService: NoteReportService,
    private mortgageReportService: MortgageReportService
  ) {}

  getReportByCategory(): CategoryReportEntity {
    return this.categoryReportService.getReport();
  }
  getReport(): TotalReportEntity {
    return this.totalReportService.getReport();
  }
  getReportByConcept(): ConceptReportEntity {
    return this.conceptReportService.getReport();
  }
  getReportByMovement(): MovementReportEntity {
    return this.movementReportService.getReport();
  }
  getReportByNote(): NoteReportEntity {
    return this.noteReportService.getReport();
  }

  getReportByMortgage(): MortgageReportEntity {
    return this.mortgageReportService.getReport();
  }
}
