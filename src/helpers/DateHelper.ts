export default class DateHelper {
  constructor(private readonly dateString: string) {}

  parseDate(): Date {
    return new Date(this.dateString);
  }
}
