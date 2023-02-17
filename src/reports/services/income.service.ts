/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { FinanceTransactionEntity } from '../../entities';

export class IncomeService {
  constructor(protected readonly financeEntities: FinanceTransactionEntity[]) {}

  protected filterIncomes() {
    return this.financeEntities.filter(entity => entity.type === 'income');
  }

  protected calculateByConcept() {
    return this.filterIncomes().reduce((incomesAccumulator, currentEntity) => {
      const concept = currentEntity.concept!;
      const currentIncome = incomesAccumulator.get(concept);
      const currentAmount = currentEntity.amount!;

      if (currentIncome) {
        incomesAccumulator.set(concept, currentIncome + currentAmount);
      } else {
        incomesAccumulator.set(concept, currentAmount);
      }

      return incomesAccumulator;
    }, new Map<string, number>());
  }

  protected calculateByMovement() {
    return this.filterIncomes().reduce((incomesAccumulator, currentEntity) => {
      const movement = currentEntity.movement!;
      const currentIncome = incomesAccumulator.get(movement);
      const currentAmount = currentEntity.amount!;

      if (currentIncome) {
        incomesAccumulator.set(movement, currentIncome + currentAmount);
      } else {
        incomesAccumulator.set(movement, currentAmount);
      }

      return incomesAccumulator;
    }, new Map<string, number>());
  }

  protected calculateByNotes() {
    return this.filterIncomes().reduce((incomesAccumulator, currentEntity) => {
      const notes = currentEntity.notes!;
      const currentIncome = incomesAccumulator.get(notes);
      const currentAmount = currentEntity.amount!;

      if (currentIncome) {
        incomesAccumulator.set(notes, currentIncome + currentAmount);
      } else {
        incomesAccumulator.set(notes, currentAmount);
      }

      return incomesAccumulator;
    }, new Map<string, number>());
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
