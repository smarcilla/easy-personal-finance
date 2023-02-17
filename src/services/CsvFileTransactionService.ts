// eslint-disable-next-line @typescript-eslint/no-var-requires
const CsvToJson = require('convert-csv-to-json');
import { JsonFinanceData } from '../entities/JsonFinanceData';
import { CsvFinanceData } from '../types/transactions.type';

export class CsvFileTransactionService {
  constructor(private readonly data: Buffer) {}

  private map(data: CsvFinanceData): JsonFinanceData {
    return {
      date: data.Fecha,
      concept: data.Concepto,
      movement: data.Movimiento,
      amount: data.Importe,
      notes: data.Observaciones
    };
  }

  format(): JsonFinanceData[] {
    return CsvToJson.fieldDelimiter(';')
      .csvStringToJson(this.data.toString())
      .map(this.map);
  }
}
