import { TransactionServiceType } from '..';
import {
  FormDataFinanceTransactionServiceBuilder,
  MemoryFinanceTransactionServiceBuilder
} from '../../services';

export class TransactionServiceBuilder {
  withType(type: TransactionServiceType) {
    switch (type) {
      case 'json-data':
        return new MemoryFinanceTransactionServiceBuilder();

      case 'form-data':
        return new FormDataFinanceTransactionServiceBuilder();
    }
  }
}
