import { CategoryReportEntity } from './category.report.entity.interface';
import { ConceptReportEntity } from './concept.report.entity.interface';
import { MortgageReportEntity } from './mortgage.report.entity.interface';
import { MovementReportEntity } from './movement.report.entity.interface';
import { NoteReportEntity } from './note.report.entity.interface';
import { TotalReportEntity } from './total.report.entity.interface';

export interface ReportService {
  getReportByConcept(): ConceptReportEntity;
  getReportByMovement(): MovementReportEntity;
  getReportByNote(): NoteReportEntity;
  getReport(): TotalReportEntity;
  /**
   * report related with 'hipoteca'
   */
  getReportByMortgage(): MortgageReportEntity;

  getReportByCategory(): CategoryReportEntity;
}
