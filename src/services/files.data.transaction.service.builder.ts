import { FileData, TransactionData } from '../types/transactions.type';
import { FilesDataTransactionService } from './files.data.transaction.service';
import { FinanceTransactionService } from './FinanceTransactionService';
import { TransactionServiceBuilder } from './services.builders';

export class FilesDataServiceTransactionBuilder
  implements TransactionServiceBuilder
{
  private data!: FileData[];

  withData(data: TransactionData): TransactionServiceBuilder {
    this.data = data as FileData[];

    return this;
  }
  build(): FinanceTransactionService {
    return new FilesDataTransactionService(this.data);
  }
}
