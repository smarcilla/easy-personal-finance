import { TransactionEntity } from '../../transactions';
import { AmountFilter } from './amount.filter';
import { DateFilter } from './date.filter';
import { TextFilter } from './text.filter';

export class TransactionEntityFilter {
  private readonly textFilter: TextFilter;
  private readonly amountFilter: AmountFilter;
  private readonly dateFilter: DateFilter;

  constructor() {
    this.textFilter = new TextFilter();
    this.amountFilter = new AmountFilter();
    this.dateFilter = new DateFilter();
  }

  filter(data?: TransactionEntity, searchText?: string): boolean {
    if (!data) {
      return true;
    }

    return (
      this.amountFilter.filter(data.amount, searchText) ||
      this.textFilter.filter(data.concept, searchText) ||
      this.textFilter.filter(data.movement, searchText) ||
      this.textFilter.filter(data.notes, searchText) ||
      this.dateFilter.filter(data.date, searchText)
    );
  }
}
