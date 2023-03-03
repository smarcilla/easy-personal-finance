import { TransactionEntityHelper } from '../core/transaction.entity.helper';
import {
  AmountEntity,
  TransactionEntity,
  TransactionRepository
} from '../interfaces';
import { ReportHelperService } from '../interfaces/report.helper.service.interface';
import { TotalReportEntity } from '../interfaces/total.report.entity.interface';
import { CurrencyEnum } from '../types/currency.enum';
import { TOTAL_REPORT_TITLE } from '../types/report.title.constants';

export class TotalReportService
  implements ReportHelperService<TotalReportEntity>
{
  constructor(
    private readonly repositories: Array<TransactionRepository>,
    private readonly transactionEntityHelper: TransactionEntityHelper
  ) {}

  private buildAmount(amount: number): AmountEntity {
    return {
      centAmount: amount * 100,
      currencyCode: CurrencyEnum.EUR,
      fractionDigits: 2
    };
  }

  private calculateIncomes(
    transactions: Array<TransactionEntity>
  ): AmountEntity {
    const amount = transactions
      .filter(t => t.amount && t.amount > 0)
      .reduce((acc, t) => (t.amount ? acc + t.amount : acc), 0);

    return this.buildAmount(amount);
  }

  private calculateExpenses(
    transactions: Array<TransactionEntity>
  ): AmountEntity {
    const amount = transactions
      .filter(t => t.amount && t.amount < 0)
      .reduce((acc, t) => (t.amount ? acc + t.amount : acc), 0);

    return this.buildAmount(amount);
  }

  private calculateTotalReportEntity(
    transactions: Array<TransactionEntity>
  ): TotalReportEntity {
    const incomes = this.calculateIncomes(transactions);
    const expenses = this.calculateExpenses(transactions);
    const result = this.buildAmount(incomes.centAmount - expenses.centAmount);
    return {
      title: TOTAL_REPORT_TITLE,
      incomes,
      expenses,
      result
    };
  }

  async getReport(): Promise<TotalReportEntity> {
    const transactions = (
      await Promise.all(this.repositories.map(repository => repository.find()))
    ).flat();

    const transactionsWithoutDuplicates =
      this.transactionEntityHelper.removeDuplicates(transactions);

    return this.calculateTotalReportEntity(transactionsWithoutDuplicates);
  }
}
