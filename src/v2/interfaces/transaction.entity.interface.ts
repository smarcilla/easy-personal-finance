import { TransactionDraftEntity } from './transaction.draft.entity.interface';

export interface TransactionEntity extends TransactionDraftEntity {
  id: string;
}
