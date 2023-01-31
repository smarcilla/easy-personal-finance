export default class DateHelper {
  constructor(readonly targetDate: string) {}

  parseDate(): Date {
    return new Date(this.targetDate);
  }
}
