import Crypto from 'crypto';

import { TransactionDraftEntity } from '../interfaces/transaction.draft.entity.interface';
import { TransactionEntity } from '../interfaces/transaction.entity.interface';

export class TransactionEntityBuilder {
  constructor(private readonly draft: TransactionDraftEntity) {}

  build(): TransactionEntity {
    const id = Crypto.createHash('sha256');

    this.draft.date && id.update(this.draft.date.toDateString());
    this.draft.concept && id.update(this.draft.concept);
    this.draft.movement && id.update(this.draft.movement);
    this.draft.amount && id.update(this.draft.amount.toString());
    this.draft.notes && id.update(this.draft.notes);

    return { ...this.draft, id: id.digest('base64') };
  }
}
