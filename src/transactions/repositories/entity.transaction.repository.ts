import crypto from 'crypto';
import { TransactionEntity } from '..';

export class EntityTransactionRepository {
  transform(data: Partial<TransactionEntity>): TransactionEntity {
    const id = crypto.createHash('sha256');

    data.date && id.update(data.date.toDateString());
    data.concept && id.update(data.concept);
    data.movement && id.update(data.movement);
    data.amount && id.update(data.amount.toString());
    data.notes && id.update(data.notes);

    return {
      ...data,
      id: id.digest('base64')
    };
  }
}
