import moment from 'moment';

export class DateTransactionRepository {
  transform(data: string): Date {
    return moment.utc(data, 'DD/MM/YYYY').local().toDate();
  }
}
