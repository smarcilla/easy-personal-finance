// eslint-disable-next-line @typescript-eslint/no-var-requires
const CsvToJson = require('convert-csv-to-json');

import {
  ContentTransactionEntity,
  CsvFileTransactionData,
  JsonTransactionData
} from '..';

export class CsvFileTransactionRepository {
  transform(data: ContentTransactionEntity): JsonTransactionData[] {
    return CsvToJson.fieldDelimiter(';')
      .csvStringToJson(data.contentData.toString())
      .map((data: CsvFileTransactionData) => ({
        date: data.Fecha,
        concept: data.Concepto,
        movement: data.Movimiento,
        amount: data.Importe,
        notes: data.Observaciones
      }));
  }
}
