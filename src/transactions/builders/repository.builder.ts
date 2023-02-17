import {
  CsvFileTransactionRepository,
  DateTransactionRepository,
  EntityTransactionRepository,
  FormDataTransactionRepository,
  JsonDataTransactionRepository,
  JsonFileTransactionRepository
} from '..';

export class RepositoryBuilder {
  build() {
    const dateRepository = new DateTransactionRepository();
    const entityRepository = new EntityTransactionRepository();
    return {
      csvFileRepository: new CsvFileTransactionRepository(),
      jsonFileRepository: new JsonFileTransactionRepository(),
      jsonDataRepository: new JsonDataTransactionRepository(
        dateRepository,
        entityRepository
      ),
      formDataRepository: new FormDataTransactionRepository()
    };
  }
}
