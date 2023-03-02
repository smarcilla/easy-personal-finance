import { ReportService } from './report.service.interface';

export interface ReportBuilder {
  build(): ReportService;
}
