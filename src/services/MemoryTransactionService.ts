/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { JsonFinanceDataAdapter, TransactionEntityFilter } from '..';
import { FinanceTransactionEntity } from '../entities';
import { JsonFinanceData } from '../entities/JsonFinanceData';
import { FinanceTransactionService } from './FinanceTransactionService';
import { FinanceTransactionEntityBuilder } from '../entities/FinanceTransactionEntityBuilder';

export class MemoryTransactionService implements FinanceTransactionService {
  constructor(private options: { data: JsonFinanceData[] }) {}

  private filter(filter: Partial<{ text: string }>): JsonFinanceData[] {
    const transactionEntityFilter = new TransactionEntityFilter();
    const adapter = new JsonFinanceDataAdapter();

    return filter?.text
      ? this.options.data.filter(data =>
          transactionEntityFilter.filter(
            adapter.convertToTransactionEntity(data),
            filter.text
          )
        )
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
