import Ajv, { JSONSchemaType } from 'ajv';
import { ContentTransactionEntity, JsonTransactionData } from '..';

export class JsonFileTransactionRepository {
  private static schema: JSONSchemaType<JsonTransactionData[]> = {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        date: { type: 'string' },
        concept: { type: 'string' },
        movement: { type: 'string' },
        notes: { type: 'string' },
        amount: { type: 'string' }
      },
      required: ['date', 'concept', 'movement', 'amount'],
      additionalProperties: false
    }
  };

  transform(data: ContentTransactionEntity): JsonTransactionData[] {
    const ajv = new Ajv();
    const validator = ajv.compile(JsonFileTransactionRepository.schema);
    const transactionsData = JSON.parse(data.contentData.toString());

    validator(transactionsData);

    return transactionsData;
  }
}
