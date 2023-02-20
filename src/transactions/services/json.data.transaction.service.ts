import {
  FilterTransactionService,
  JsonTransactionData,
  JsonDataTransactionRepository,
  TransactionEntity,
  TransactionService,
  UniqueEntityArray
} from '..';

export class JsonDataTransactionService implements TransactionService {
  constructor(
    private readonly jsonDataTransactionRepository: JsonDataTransactionRepository,
    private readonly filterTransactionService: FilterTransactionService
  ) {}

  find(
    data: JsonTransactionData[],
    filter?: Partial<{ text: string }>
  ): TransactionEntity[] {
    const transactions = this.jsonDataTransactionRepository.transform(data);

    if (filter && filter.text) {
      return this.filterTransactionService.filter(transactions, filter);
    }

    return new UniqueEntityArray(transactions).items;
  }
}
