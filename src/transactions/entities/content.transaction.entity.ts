export type ContentTransactionType = 'application/json' | 'text/csv';

export interface ContentTransactionEntity {
  contentType: ContentTransactionType;
  contentData: Buffer;
}
