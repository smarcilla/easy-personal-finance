import { TransactionEntity } from '../entities';

export class FilterTransactionService {
  private filterAmount(amount?: number, searchText?: string) {
    if (!amount) {
      return true;
    }
    return this.filterText(amount.toString(), searchText);
  }

  private filterDate(date?: Date, searchText?: string) {
    if (!date) {
      return true;
    }

    return this.filterText(date.toDateString(), searchText);
  }

  private filterText(text?: string, searchText?: string) {
    return text && searchText ? text.includes(searchText) : true;
  }

  filter(
    data: TransactionEntity[],
    filter: Partial<{ text: string }>
  ): TransactionEntity[] {
    return data.filter(transaction => {
      return (
        this.filterAmount(transaction.amount, filter.text) ||
        this.filterText(transaction.concept) ||
        this.filterText(transaction.movement) ||
        this.filterText(transaction.notes) ||
        this.filterDate(transaction.date)
      );
    });
  }
}
