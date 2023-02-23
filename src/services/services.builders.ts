/* tslint:disable max-classes-per-file */
import { JsonFinanceData } from '../entities/JsonFinanceData';
import {
  FileFormatType,
  FormDataFormatDataType,
  TransactionData
} from '../types/transactions.type';
import { CsvFileTransactionService } from './CsvFileTransactionService';
import { FilesDataServiceTransactionBuilder } from './files.data.transaction.service.builder';
import { FinanceTransactionService } from './FinanceTransactionService';
import { FormDataTransactionService } from './FormDataTransactionService';
import { JsonFileTransactionService } from './JsonFileTransactionService';
import { MemoryTransactionService } from './MemoryTransactionService';

export interface TransactionServiceBuilder {
  withData(data: TransactionData): TransactionServiceBuilder;

  build(): FinanceTransactionService;
}
export class FileTransactionServiceBuilder {
  private type!: FileFormatType;
  private data!: Buffer;

  withType(type: FileFormatType) {
    this.type = type;
    return this;
  }

  withData(data: Buffer) {
    this.data = data;
    return this;
  }

  build(): CsvFileTransactionService | JsonFileTransactionService {
    switch (this.type) {
      case 'application/json':
        return new JsonFileTransactionService(this.data);

      case 'text/csv':
        return new CsvFileTransactionService(this.data);
    }
  }
}

export class FormDataFinanceTransactionServiceBuilder
  implements TransactionServiceBuilder
{
  private data!: FormDataFormatDataType;

  withData(data: FormDataFormatDataType) {
    this.data = data;

    return this;
  }

  build(): FinanceTransactionService {
    return new FormDataTransactionService(this.data);
  }
}

export class MemoryFinanceTransactionServiceBuilder
  implements TransactionServiceBuilder
{
  private data!: JsonFinanceData[];
  withData(data: JsonFinanceData[]) {
    this.data = data;

    return this;
  }
  build(): FinanceTransactionService {
    return new MemoryTransactionService({ data: this.data || [] });
  }
}

export class FinanceTransactionServiceBuilder {
  withType(
    type: 'json-data' | 'form-data' | 'files-data'
  ): TransactionServiceBuilder {
    switch (type) {
      case 'json-data':
        return new MemoryFinanceTransactionServiceBuilder();

      case 'form-data':
        return new FormDataFinanceTransactionServiceBuilder();

      case 'files-data':
        return new FilesDataServiceTransactionBuilder();
    }
  }
}
