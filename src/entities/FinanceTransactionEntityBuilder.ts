import { DateHelper } from '../helpers';
import { FinanceTransactionEntity } from './FinanceTransactionEntity';
import { FinanceTransactionEntityIdBuilder } from './FinanceTransactionEntityIdBuilder';

export class FinanceTransactionEntityBuilder {
  private data: Partial<FinanceTransactionEntity> = {};

  withAmount(amount: string) {
    this.data.amount = parseFloat(amount);
    this.data.type = this.data.amount > 0 ? 'income' : 'expense';

    return this;
  }

  withDate(date: string) {
    this.data.date = new DateHelper(date).parseDate();

    return this;
  }

  withConcept(concept: string) {
    this.data.concept = concept;

    return this;
  }

  withMovement(movement: string) {
    this.data.movement = movement;

    return this;
  }

  withNotes(notes: string) {
    this.data.notes = notes;

    return this;
  }

  build(): FinanceTransactionEntity {
    return {
      type: this.data.type,
      date: this.data.date,
      concept: this.data.concept,
      movement: this.data.movement,
      amount: this.data.amount,
      notes: this.data.notes,
      id: new FinanceTransactionEntityIdBuilder().withData(this.data).build()
    };
  }
}
