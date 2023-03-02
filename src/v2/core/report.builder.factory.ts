import { ReportBuilder } from '../interfaces/report.builder.interface';
import { EasyFinanceReportBuilder } from './report.builder';

export class ReportBuilderFactory {
  static create(): ReportBuilder {
    return new EasyFinanceReportBuilder();
  }
}
