/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { FinanceTransactionEntity } from '../entities';
import { JsonFinanceData } from '../entities/JsonFinanceData';
import { FinanceTransactionService } from './FinanceTransactionService';
import { FinanceTransactionEntityBuilder } from '../entities/FinanceTransactionEntityBuilder';

export class MemoryTransactionService implements FinanceTransactionService {
  constructor(private options: { data: JsonFinanceData[] }) {}

  private filter(filter: Partial<{ text: string }>): JsonFinanceData[] {
    return filter?.text
      ? this.options.data.filter(data => {
          return (
            data.amount.includes(filter.text!) ||
            data.concept.includes(filter.text!) ||
            data.date.includes(filter.text!) ||
            data.movement.includes(filter.text!) ||
            data.notes.includes(filter.text!)
          );
        })
      : this.options.data;
  }

  find(filter: Partial<{ text: string }> = {}): FinanceTransactionEntity[] {
    return this.filter(filter).map(data => {
      return new FinanceTransactionEntityBuilder()
        .withAmount(data.amount)
        .withConcept(data.concept)
        .withDate(data.date)
        .withMovement(data.movement)
        .withNotes(data.notes)
        .build();
    });
  }
}
