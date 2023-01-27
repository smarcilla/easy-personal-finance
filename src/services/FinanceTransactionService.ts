import { FinanceTransactionEntity } from '../entities';

export interface FinanceTransactionService {
  find(): FinanceTransactionEntity[];
}
