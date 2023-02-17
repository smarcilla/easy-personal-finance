import {
  FormTransactionData,
  JsonTransactionData,
  TransactionEntity
} from '..';

export interface TransactionService {
  find(
    data: JsonTransactionData[] | FormTransactionData,
    filter?: Partial<{ text: string }>
  ): TransactionEntity[];
}
