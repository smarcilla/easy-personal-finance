import {
  DateTransactionRepository,
  EntityTransactionRepository,
  JsonTransactionData,
  TransactionEntity
} from '..';

export class JsonDataTransactionRepository {
  constructor(
    private readonly dateTransactionRepository: DateTransactionRepository,
    private readonly entityTransactionRepository: EntityTransactionRepository
  ) {}
  private map(data: JsonTransactionData): TransactionEntity {
    const amount = parseFloat(data.amount);
    return this.entityTransactionRepository.transform({
      amount,
      type: amount > 0 ? 'income' : 'expense',
      date: this.dateTransactionRepository.transform(data.date),
      concept: data.concept,
      movement: data.movement,
      notes: data.notes
    });
  }
  transform(data: JsonTransactionData[]): TransactionEntity[] {
    return data.map(transaction => this.map(transaction));
  }
}
