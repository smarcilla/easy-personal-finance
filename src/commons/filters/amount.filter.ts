import { TextFilter } from '.';

export class AmountFilter {
  private readonly textFilter: TextFilter;
  constructor() {
    this.textFilter = new TextFilter();
  }

  filter(amount?: number | string, searchText?: string): boolean {
    if (!amount) {
      return true;
    }

    return this.textFilter.filter(amount.toString(), searchText);
  }
}
