import { BalanceServiceBuilder } from './balance.service.builder';
import { IncomeServiceBuilder } from './income.service.builder';
import { ExpenseServiceBuilder } from './expense.service.builder';

export class ReportServiceBuilder {
  withType(type: 'balance' | 'income' | 'expense') {
    switch (type) {
      case 'balance':
        return new BalanceServiceBuilder();

      case 'income':
        return new IncomeServiceBuilder();

      case 'expense':
        return new ExpenseServiceBuilder();
    }
  }
}
