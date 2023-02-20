import { Entity } from '..';

export interface TransactionEntity extends Entity {
  type?: 'income' | 'expense';
  date?: Date;
  concept?: string;
  movement?: string;
  amount?: number;
  notes?: string;
}
