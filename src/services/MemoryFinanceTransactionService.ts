import { FinanceTransactionEntity } from '../entities';
import { FinanceTransactionService } from './FinanceTransactionService';

export class MemoryFinanceTransactionService implements FinanceTransactionService {
  find(): FinanceTransactionEntity[] {
    return [];
  }
}
