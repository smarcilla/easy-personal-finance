/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { FinanceTransactionEntity } from '../../entities';

export class ExpenseService {
  constructor(protected readonly financeEntities: FinanceTransactionEntity[]) {}

  protected filterExpenses() {
    return this.financeEntities.filter(entity => entity.type === 'expense');
  }

  protected calculateByConcept() {
    return this.filterExpenses().reduce(
      (expensesAccumulator, currentEntity) => {
        const concept = currentEntity.concept!;
        const currentExpense = expensesAccumulator.get(concept);
        const currentAmount = currentEntity.amount!;

        if (currentExpense) {
          expensesAccumulator.set(concept, currentExpense + currentAmount);
        } else {
          expensesAccumulator.set(concept, currentAmount);
        }

        return expensesAccumulator;
      },
      new Map<string, number>()
    );
  }

  protected calculateByMovement() {
    return this.filterExpenses().reduce(
      (expensesAccumulator, currentEntity) => {
        const movement = currentEntity.movement!;
        const currentExpense = expensesAccumulator.get(movement);
        const currentAmount = currentEntity.amount!;

        if (currentExpense) {
          expensesAccumulator.set(movement, currentExpense + currentAmount);
        } else {
          expensesAccumulator.set(movement, currentAmount);
        }

        return expensesAccumulator;
      },
      new Map<string, number>()
    );
  }

  protected calculateByNotes() {
    return this.filterExpenses().reduce(
      (expensesAccumulator, currentEntity) => {
        const notes = currentEntity.notes!;
        const currentExpense = expensesAccumulator.get(notes);
        const currentAmount = currentEntity.amount!;

        if (currentExpense) {
          expensesAccumulator.set(notes, currentExpense + currentAmount);
        } else {
          expensesAccumulator.set(notes, currentAmount);
        }

        return expensesAccumulator;
      },
      new Map<string, number>()
    );
  }

  calculate(by: 'concept' | 'movement' | 'notes'): Map<string, number> {
    let totalsBy = new Map<string, number>();

    switch (by) {
      case 'concept':
        totalsBy = this.calculateByConcept();
        break;

      case 'movement':
        totalsBy = this.calculateByMovement();
        break;

      case 'notes':
        totalsBy = this.calculateByNotes();
        break;
    }

    return totalsBy;
  }
}
