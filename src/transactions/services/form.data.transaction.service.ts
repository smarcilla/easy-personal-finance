import {
  ContentTransactionEntity,
  CsvFileTransactionRepository,
  FilterTransactionService,
  FormDataTransactionRepository,
  FormTransactionData,
  JsonFileTransactionRepository,
  JsonTransactionData,
  JsonDataTransactionRepository,
  TransactionEntity,
  TransactionService
} from '..';

export class FormDataTransactionService implements TransactionService {
  constructor(
    private readonly jsonDataTransactionRepository: JsonDataTransactionRepository,
    private readonly formDataTransactionRepository: FormDataTransactionRepository,
    private readonly jsonFileTransactionRepository: JsonFileTransactionRepository,
    private readonly csvFileTransactionRepository: CsvFileTransactionRepository,
    private readonly filterTransactionService: FilterTransactionService
  ) {}

  private transform(content: ContentTransactionEntity): JsonTransactionData[] {
    if (content.contentType === 'application/json') {
      return this.jsonFileTransactionRepository.transform(content);
    }

    if (content.contentType === 'text/csv') {
      return this.csvFileTransactionRepository.transform(content);
    }

    return [];
  }

  find(
    data: FormTransactionData,
    filter?: Partial<{ text: string }>
  ): TransactionEntity[] {
    const contents = this.formDataTransactionRepository.transform(data);

    return contents.reduce((transactions, currentContent) => {
      const jsonTransactionData = this.transform(currentContent);

      let newTransactions =
        this.jsonDataTransactionRepository.transform(jsonTransactionData);

      if (filter && filter.text) {
        newTransactions = this.filterTransactionService.filter(
          transactions,
          filter
        );
      }

      return [...transactions, ...newTransactions];
    }, [] as TransactionEntity[]);
  }
}
