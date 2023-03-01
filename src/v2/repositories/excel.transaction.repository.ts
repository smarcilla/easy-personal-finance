import { Schema } from 'read-excel-file';
import readXlsxFile from 'read-excel-file/node';
import { TransactionEntityBuilder } from '../core/transaction.entity.builder';
import { RowData } from '../interfaces/row.data.interface';
import { TransactionDraftEntity } from '../interfaces/transaction.draft.entity.interface';
import { BbvaExcelSchema } from '../schemas';

import { TransactionEntity } from '../interfaces/transaction.entity.interface';
import { TransactionRepository } from '../interfaces/transaction.repository.interface';

export interface ExcelTransactionRepositoryOptions {
  files: Buffer[];
  schema?: object;
}

export class ExcelTransactionRepository implements TransactionRepository {
  constructor(private options: ExcelTransactionRepositoryOptions) {
    if (!this.options.schema) {
      this.options.schema = BbvaExcelSchema.schema;
    }
  }

  private async parseFiles() {
    console.log(this.options);
    return Promise.all(
      this.options.files.map(file =>
        readXlsxFile(file, {
          schema: this.options.schema as Schema,
          transformData(rows) {
            return rows.filter((_, index) => index >= 4);
          }
        })
      )
    );
  }

  private convertTo(transactionsRow: RowData<TransactionDraftEntity>[]) {
    return transactionsRow
      .map(data => data.rows)
      .flat()
      .map(draft => new TransactionEntityBuilder(draft).build());
  }

  async find(): Promise<TransactionEntity[]> {
    const transactionsRow = await this.parseFiles();
    return this.convertTo(transactionsRow);
  }
}
