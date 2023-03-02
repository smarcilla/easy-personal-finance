import { PercentageEntity } from './percentage.entity.interface';
import { TotalReportEntity } from './total.report.entity.interface';

export interface MortgageReportEntity extends TotalReportEntity {
  percentageRespectIncomes: PercentageEntity;
  percentageRespectExpenses: PercentageEntity;
}
