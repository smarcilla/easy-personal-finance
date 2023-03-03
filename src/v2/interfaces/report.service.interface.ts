import { CategoryReportEntity } from './category.report.entity.interface';
import { ConceptReportEntity } from './concept.report.entity.interface';
import { MortgageReportEntity } from './mortgage.report.entity.interface';
import { MovementReportEntity } from './movement.report.entity.interface';
import { NoteReportEntity } from './note.report.entity.interface';
import { TotalReportEntity } from './total.report.entity.interface';

export interface ReportService {
  getReportByConcept(): Promise<ConceptReportEntity>;
  getReportByMovement(): Promise<MovementReportEntity>;
  getReportByNote(): Promise<NoteReportEntity>;
  getReport(): Promise<TotalReportEntity>;
  /**
   * report related with 'hipoteca'
   */
  getReportByMortgage(): Promise<MortgageReportEntity>;

  getReportByCategory(): Promise<CategoryReportEntity>;
}
