import { JsonFinanceDataAdapter, TransactionEntityFilter } from '../commons';
import { FinanceTransactionEntity } from '../entities';
import { FileData } from '../types/transactions.type';
import { FinanceTransactionService } from './FinanceTransactionService';
import { FileTransactionServiceBuilder } from './services.builders';

export class FilesDataTransactionService implements FinanceTransactionService {
  constructor(private data: Array<FileData>) {}
  find(
    filter?: Partial<{ text: string }> | undefined
  ): FinanceTransactionEntity[] {
    return this.data
      .map(file =>
        new FileTransactionServiceBuilder()
          .withType(file.mimeType)
          .withData(file.content)
          .build()
          .format()
      )
      .flat()
      .map(data =>
        new JsonFinanceDataAdapter().convertToTransactionEntity(data)
      )
      .filter(data => new TransactionEntityFilter().filter(data, filter?.text));
  }
}
