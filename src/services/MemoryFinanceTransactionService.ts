import { FinanceTransactionEntity } from '../entities';
import { JsonFinanceData } from '../entities/JsonFinanceData';
import { FinanceTransactionService } from './FinanceTransactionService';

export class MemoryFinanceTransactionService implements FinanceTransactionService {
  constructor(private options: { data: JsonFinanceData[] }) {}
  find(): FinanceTransactionEntity[] {
    return [];
  }
}
