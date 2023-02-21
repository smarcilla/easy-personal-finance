import { TextFilter } from '.';

export class DateFilter {
  private readonly textFilter: TextFilter;

  constructor() {
    this.textFilter = new TextFilter();
  }

  filter(date?: Date, searchText?: string): boolean {
    if (!date) {
      return true;
    }

    return this.textFilter.filter(date.toDateString(), searchText);
  }
}
