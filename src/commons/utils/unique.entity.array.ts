import { Entity } from '..';

export class UniqueEntityArray<T extends Entity> {
  constructor(private readonly sourceArray: Array<T>) {}

  get items(): Array<T> {
    const items: T[] = [];

    for (const item of this.sourceArray) {
      const found = items.some(value => value.id === item.id);

      if (!found) {
        items.push(item);
      }
    }

    return items;
  }
}
