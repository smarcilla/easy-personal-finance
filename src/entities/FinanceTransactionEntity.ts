import { Entity } from '..';

export interface FinanceTransactionEntity extends Entity {
  type?: 'income' | 'expense';
  date?: Date;
  concept?: string;
  movement?: string;
  amount?: number;
  notes?: string;
}
