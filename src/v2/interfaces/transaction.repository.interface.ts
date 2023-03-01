import { TransactionEntity } from './transaction.entity.interface';

export interface TransactionRepository {
  find(): Promise<TransactionEntity[]>;
}
