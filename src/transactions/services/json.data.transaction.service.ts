import {
  JsonTransactionData,
  JsonDataTransactionRepository,
  TransactionEntity,
  TransactionService,
  UniqueEntityArray,
  TransactionEntityFilter
} from '..';

export class JsonDataTransactionService implements TransactionService {
  constructor(
    private readonly jsonDataTransactionRepository: JsonDataTransactionRepository,
    private readonly transanctionEntityFilter: TransactionEntityFilter
  ) {}

  find(
    data: JsonTransactionData[],
    filter?: Partial<{ text: string }>
  ): TransactionEntity[] {
    const transactions = this.jsonDataTransactionRepository.transform(data);

    if (filter && filter.text) {
      return transactions.filter(data =>
        this.transanctionEntityFilter.filter(data, filter.text)
      );
    }

    return new UniqueEntityArray(transactions).items;
  }
}
