import { FinanceTransactionEntity } from '../../../entities';
import { MemoryFinanceTransactionServiceBuilder } from '../../../services';
import { ExpenseService } from '../../index';

import financeData from '../../../data/jsonFinanceData.mock.json';

describe('Expense service', () => {
  let financeEntities: FinanceTransactionEntity[];
  let expenseService: ExpenseService;

  beforeEach(() => {
    financeEntities = new MemoryFinanceTransactionServiceBuilder()
      .withData(financeData)
      .build()
      .find();
    expenseService = new ExpenseService(financeEntities);
  });

  describe('when concept is set', () => {
    test('should return total incomes grouped by concept type', () => {
      const expectedResult = new Map<string, number>([
        ['Pago con tarjeta', -100],
        ['Transferencia bancaria', -1500]
      ]);
      expect(expenseService.calculate('concept')).toEqual(expectedResult);
    });
  });

  describe('when movement is set', () => {
    test('should return total incomes grouped by movement type', () => {
      const expectedResult = new Map<string, number>([
        ['Alquiler', -1500],
        ['Supermercado', -100]
      ]);
      expect(expenseService.calculate('movement')).toEqual(expectedResult);
    });
  });

  describe('when notes is set', () => {
    test('should return total incomes grouped by notes type', () => {
      const expectedResult = new Map<string, number>([
        ['ALQUILER ENERO', -1500],
        ['COMPRAS SEMANALES', -100]
      ]);
      expect(expenseService.calculate('notes')).toEqual(expectedResult);
    });
  });
});
