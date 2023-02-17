import { EasyFinance } from '..';
import {
  BalanceSheetService,
  ExpenseService,
  IncomeService
} from '../../reports';

describe('reports', () => {
  describe('balance report', () => {
    test('should return a balance service', () => {
      expect(
        new EasyFinance().reports.withType('balance').build()
      ).toBeInstanceOf(BalanceSheetService);
    });
  });

  describe('income report', () => {
    test('should return an income service', () => {
      expect(
        new EasyFinance().reports.withType('income').build()
      ).toBeInstanceOf(IncomeService);
    });
  });

  describe('expense report', () => {
    test('should return an expense service', () => {
      expect(
        new EasyFinance().reports.withType('expense').build()
      ).toBeInstanceOf(ExpenseService);
    });
  });
});
