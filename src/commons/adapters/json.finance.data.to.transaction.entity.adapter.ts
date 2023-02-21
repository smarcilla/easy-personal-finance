import { IdentifierEntityHelper } from '..';
import { JsonFinanceData } from '../../entities/JsonFinanceData';
import { DateHelper } from '../../helpers';
import { TransactionEntity } from '../../transactions';

export class JsonFinanceDataAdapter {
  convertToTransactionEntity(data: JsonFinanceData): TransactionEntity {
    const amount: number = parseFloat(data.amount);
    const type = amount > 0 ? 'income' : 'expense';
    const date = new DateHelper(data.date).parseDate();
    const concept = data.concept;
    const movement = data.movement;
    const notes = data.notes;

    const id = new IdentifierEntityHelper().generate({
      amount,
      type,
      date,
      concept,
      movement,
      notes
    });

    return {
      amount,
      type,
      date,
      concept,
      movement,
      notes,
      id
    };
  }
}
