import { FinanceTransactionEntity } from '../entities';

export interface FinanceTransactionService {
  find(filter?: Partial<{ text: string }>): FinanceTransactionEntity[];
}
