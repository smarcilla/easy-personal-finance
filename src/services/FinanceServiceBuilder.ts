import { FinanceTransactionService } from './FinanceTransactionService';
import { MemoryFinanceTransactionService } from './MemoryFinanceTransactionService';

export class FinanceServiceBuilder {
  private entity: 'transaction' | 'report' = 'transaction';
  withEntity(entity: 'transaction' | 'report') {
    this.entity = entity;

    return this;
  }
  build(): FinanceTransactionService {
    if (this.entity === 'transaction') {
      return new MemoryFinanceTransactionService();
    }

    throw new Error(`Not build defined for ${this.entity} entity`);
  }
}
