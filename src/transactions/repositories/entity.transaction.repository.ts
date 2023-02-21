import { TransactionEntity, IdentifierEntityHelper } from '..';

export class EntityTransactionRepository {
  transform(data: Partial<TransactionEntity>): TransactionEntity {
    const id = new IdentifierEntityHelper().generate(data);

    return {
      ...data,
      id
    };
  }
}
