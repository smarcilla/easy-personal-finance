import { JsonFinanceData } from '../entities/JsonFinanceData';
import { MemoryTransactionService } from './MemoryTransactionService';

export default class MemoryFinanceTransactionServiceBuilder {
  private data!: JsonFinanceData[];
  withData(data: JsonFinanceData[]) {
    this.data = data;

    return this;
  }
  build(): MemoryTransactionService {
    return new MemoryTransactionService({ data: this.data || [] });
  }
}
