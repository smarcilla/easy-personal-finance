import { CategoryReportEntity } from '../interfaces/category.report.entity.interface';
import { ReportHelperService } from '../interfaces/report.helper.service.interface';

export class CategoryReportService
  implements ReportHelperService<CategoryReportEntity>
{
  getReport(): CategoryReportEntity {
    throw new Error('Method not implemented.');
  }
}
