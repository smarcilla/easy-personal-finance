import { OriginType } from '../types/transactions.type';
import MemoryFinanceTransactionServiceBuilder from './MemoryFinanceTransactionServiceBuilder';

export default class FinanceTransactionServiceBuilder {
  withOrigin(origin: OriginType) {
    switch (origin) {
      case 'memory':
        return new MemoryFinanceTransactionServiceBuilder();
    }
  }
}
