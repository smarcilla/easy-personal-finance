import { FinanceTransactionEntity } from '../entities';
import { Service } from './Service';

export default class FinanceService implements Service<FinanceTransactionEntity> {
  find(): FinanceTransactionEntity[] {
    return [];
  }
}
