/* eslint-disable @typescript-eslint/no-non-null-assertion */
import crypto from 'crypto';
import { FinanceTransactionEntity } from './FinanceTransactionEntity';

export class FinanceTransactionEntityIdBuilder {
  private entityId!: string;

  withData(data: Partial<FinanceTransactionEntity>) {
    const id = crypto.createHash('sha256');

    id.update(data.date!.toDateString());
    id.update(data.concept!);
    id.update(data.movement!);
    id.update(data.amount!.toString());
    id.update(data.notes!);

    this.entityId = id.digest('base64');

    return this;
  }

  build(): string {
    return this.entityId;
  }
}
