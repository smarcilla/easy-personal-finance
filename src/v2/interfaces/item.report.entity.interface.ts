import { AmountEntity } from './amount.entity.interface';
import { PercentageEntity } from './percentage.entity.interface';

export interface ItemReportEntity {
  name: string;
  description: string;
  total: AmountEntity;
  percentage: PercentageEntity;
}
