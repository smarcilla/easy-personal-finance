import {
  FilterTransactionService,
  FormDataTransactionService,
  RepositoryBuilder,
  TransactionService
} from '..';

export class FormDataTransactionServiceBuilder {
  build(): TransactionService {
    const {
      jsonDataRepository,
      formDataRepository,
      jsonFileRepository,
      csvFileRepository
    } = new RepositoryBuilder().build();

    return new FormDataTransactionService(
      jsonDataRepository,
      formDataRepository,
      jsonFileRepository,
      csvFileRepository,
      new FilterTransactionService()
    );
  }
}
