// eslint-disable-next-line @typescript-eslint/no-var-requires
const Multipart = require('parse-multipart-data');
import { FinanceTransactionEntity } from '../entities';
import { JsonFinanceData } from '../entities/JsonFinanceData';
import {
  FileFormatType,
  FormDataFormatDataType
} from '../types/transactions.type';
import { FinanceTransactionService } from './FinanceTransactionService';
import {
  FileTransactionServiceBuilder,
  MemoryFinanceTransactionServiceBuilder
} from './services.builders';
import { UniqueEntityArray } from '..';

export class FormDataTransactionService implements FinanceTransactionService {
  constructor(private readonly data: FormDataFormatDataType) {}

  find(filter: Partial<{ text: string }>): FinanceTransactionEntity[] {
    const boundary = Multipart.getBoundary(this.data.contentTypeHeader);

    const parts: {
      ilename?: string;
      name?: string;
      type: FileFormatType;
      data: Buffer;
    }[] = Multipart.parse(Buffer.from(this.data.body), boundary);

    const financeData: JsonFinanceData[] = parts.reduce(
      (financeDataAcc, part) => {
        const financeDataDraft = new FileTransactionServiceBuilder()
          .withType(part.type)
          .withData(part.data)
          .build()
          .format();
        return [...financeDataAcc, ...financeDataDraft];
      },
      [] as JsonFinanceData[]
    );

    const financeEntityData = new MemoryFinanceTransactionServiceBuilder()
      .withData(financeData)
      .build()
      .find(filter);

    return new UniqueEntityArray(financeEntityData).items;
  }
}
