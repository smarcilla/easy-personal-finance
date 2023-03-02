import { CategoryEntity } from './category.entity.interface';
import { CategoryItemReportEntity } from './category.item.report.entity.interface';
import { TotalReportEntity } from './total.report.entity.interface';

export interface CategoryReportEntity extends TotalReportEntity {
  category: CategoryEntity;
  items: Array<CategoryItemReportEntity>;
}
