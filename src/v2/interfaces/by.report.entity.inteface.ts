import { AmountEntity } from './amount.entity.interface';
import { ReportEntity } from './report.entity.interface';

export interface ByReportEntity<T> extends ReportEntity {
  items: Array<T>;
  total: AmountEntity;
}
