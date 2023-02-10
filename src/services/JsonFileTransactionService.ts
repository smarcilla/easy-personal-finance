import Ajv, { JSONSchemaType, ValidateFunction } from 'ajv';
import { JsonFinanceData } from '../entities/JsonFinanceData';

export class JsonFileTransactionService {
  private static schema: JSONSchemaType<JsonFinanceData[]> = {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        date: { type: 'string' },
        concept: { type: 'string' },
        movement: { type: 'string' },
        notes: { type: 'string' },
        amount: { type: 'string' },
      },
      required: ['date', 'concept', 'movement', 'amount'],
      additionalProperties: false,
    },
  };

  private validator: ValidateFunction<JsonFinanceData[]>;

  constructor(private readonly data: Buffer) {
    const ajv = new Ajv();
    this.validator = ajv.compile(JsonFileTransactionService.schema);
  }

  format(): JsonFinanceData[] {
    const financeData = JSON.parse(this.data.toString());
    this.validator(financeData);
    return financeData;
  }
}
