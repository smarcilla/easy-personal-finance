// eslint-disable-next-line @typescript-eslint/no-var-requires
const Multipart = require('parse-multipart-data');

import {
  ContentTransactionEntity,
  ContentTransactionType,
  FormTransactionData
} from '..';

export class FormDataTransactionRepository {
  transform(data: FormTransactionData): ContentTransactionEntity[] {
    const boundary = Multipart.getBoundary(data.contentTypeHeader);

    const parts: {
      ilename?: string;
      name?: string;
      type: ContentTransactionType;
      data: Buffer;
    }[] = Multipart.parse(Buffer.from(data.body), boundary);

    return parts.map(part => ({
      contentType: part.type,
      contentData: part.data
    }));
  }
}
