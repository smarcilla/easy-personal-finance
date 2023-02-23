import { JsonFinanceData } from '../entities/JsonFinanceData';

export type OriginType = 'memory';

export type OriginFormatType = 'form-data';

export type FormDataFormatDataType = {
  body: string;
  contentTypeHeader: string;
};

export type CsvFinanceData = {
  Fecha: string;
  'F.Valor': string;
  Concepto: string;
  Movimiento: string;
  Importe: string;
  Divisa: string;
  Disponible: string;
  Observaciones: string;
  Totalingresos: string;
  TotalGastos: string;
  Resultado: string;
};

export type FileFormatType = 'application/json' | 'text/csv';

export interface FileData {
  name: string;
  content: Buffer;
  mimeType: FileFormatType;
}

export type TransactionData =
  | FormDataFormatDataType
  | JsonFinanceData[]
  | Array<FileData>;
