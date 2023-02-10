import moment from 'moment';

export default class DateHelper {
  constructor(private readonly dateDraft: string) {}

  parseDate(): Date {
    return moment.utc(this.dateDraft, 'DD/MM/YYYY').local().toDate();
  }
}
