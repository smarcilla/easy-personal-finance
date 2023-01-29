import MemoryFinanceTransactionServiceBuilder from './MemoryFinanceTransactionServiceBuilder';

export default class FinanceTransactionServiceBuilder {
  withOrigin(origin: 'memory') {
    switch (origin) {
      case 'memory':
        return new MemoryFinanceTransactionServiceBuilder();
    }
  }
}
