export interface TransactionDraftEntity {
  type?: 'income' | 'expense';
  date?: Date;
  concept?: string;
  movement?: string;
  amount?: number;
  notes?: string;
}
