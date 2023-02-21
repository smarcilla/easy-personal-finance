import Crypto from 'crypto';

import { TransactionEntity } from '../../transactions';

export class IdentifierEntityHelper {
  generate(data: Partial<TransactionEntity>): string {
    const id = Crypto.createHash('sha256');

    data.date && id.update(data.date.toDateString());
    data.concept && id.update(data.concept);
    data.movement && id.update(data.movement);
    data.amount && id.update(data.amount.toString());
    data.notes && id.update(data.notes);

    return id.digest('base64');
  }
}
