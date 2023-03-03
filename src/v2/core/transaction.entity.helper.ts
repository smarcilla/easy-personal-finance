import { TransactionEntity } from '../interfaces';

export class TransactionEntityHelper {
  removeDuplicates(sourceArray: Array<TransactionEntity>) {
    const items: Array<TransactionEntity> = [];

    for (const item of sourceArray) {
      const found = items.some(value => value.id === item.id);

      if (!found) {
        items.push(item);
      }
    }

    return items;
  }
}
