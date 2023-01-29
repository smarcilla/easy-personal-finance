import { JsonFinanceData } from '../entities/JsonFinanceData';
import { MemoryFinanceTransactionService } from './MemoryFinanceTransactionService';

export default class MemoryFinanceTransactionServiceBuilder {
  private data!: JsonFinanceData[];
  withData(data: JsonFinanceData[]) {
    this.data = data;

    return this;
  }
  build(): MemoryFinanceTransactionService {
    return new MemoryFinanceTransactionService({ data: this.data || [] });
  }
}
