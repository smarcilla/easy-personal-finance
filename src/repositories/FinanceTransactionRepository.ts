import FinanceTransactionEntity from '../entities';
import Repository from './Repository';

export default class FinanceTransactionRepository implements Repository<FinanceTransactionEntity> {
  constructor(readonly data: FinanceTransactionEntity[] = []) {}
  find(): FinanceTransactionEntity[] {
    return this.data;
  }
}
