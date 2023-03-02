import { AmountEntity } from './amount.entity.interface';
import { ReportEntity } from './report.entity.interface';

export interface TotalReportEntity extends ReportEntity {
  incomes: AmountEntity;
  expenses: AmountEntity;
  result: AmountEntity;
}
