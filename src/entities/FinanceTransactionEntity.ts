import Entity from './Entity';

export interface FinanceTransactionEntity extends Entity {
  type?: 'income' | 'expense';
  date?: Date;
  concept?: string;
  movement?: string;
  amount?: number;
  notes?: string;
  id: string;
}
