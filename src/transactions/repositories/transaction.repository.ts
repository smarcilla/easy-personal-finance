import { TransactionEntity } from '..';
import { JsonTransactionData } from '..';

export interface TransactionRepository {
  transform(data: JsonTransactionData[]): TransactionEntity[];
}
