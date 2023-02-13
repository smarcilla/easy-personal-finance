import { FinanceTransactionEntity } from '../../entities';
import { BalanceReportEntity } from '../index';

export class BalanceSheetService {
  constructor(private readonly financeEntities: FinanceTransactionEntity[]) {}

  private calculateTotal(type: 'income' | 'expense'): number {
    return this.financeEntities.reduce((previousTotal: number, currentEntity) => {
      if (currentEntity.type === type) {
        return previousTotal + currentEntity.amount!;
      }

      return previousTotal;
    }, 0);
  }

  private calculateBalance(incomes: number, expenses: number): number {
    return incomes + expenses;
  }

  calculateReport(): BalanceReportEntity {
    const totalIncomes = this.calculateTotal('income');
    const totalExpenses = this.calculateTotal('expense');

    return {
      totalIncomes,
      totalExpenses,
      totalBalance: this.calculateBalance(totalIncomes, totalExpenses),
    };
  }
}
