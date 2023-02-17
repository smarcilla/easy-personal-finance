import { FinanceTransactionEntity } from '../../../entities';
import { MemoryFinanceTransactionServiceBuilder } from '../../../services';
import { IncomeService } from '../../index';

import financeData from '../../../data/jsonFinanceData.mock.json';

describe('Income service', () => {
  let financeEntities: FinanceTransactionEntity[];
  let incomeService: IncomeService;

  beforeEach(() => {
    financeEntities = new MemoryFinanceTransactionServiceBuilder()
      .withData(financeData)
      .build()
      .find();
    incomeService = new IncomeService(financeEntities);
  });

  describe('when concept is set', () => {
    test('should return total incomes grouped by concept type', () => {
      const expectedResult = new Map<string, number>([['Ingreso', 3000]]);
      expect(incomeService.calculate('concept')).toEqual(expectedResult);
    });
  });

  describe('when movement is set', () => {
    test('should return total incomes grouped by movement type', () => {
      const expectedResult = new Map<string, number>([['Nómina', 3000]]);
      expect(incomeService.calculate('movement')).toEqual(expectedResult);
    });
  });

  describe('when notes is set', () => {
    test('should return total incomes grouped by notes type', () => {
      const expectedResult = new Map<string, number>([['SALARIO ENERO', 3000]]);
      expect(incomeService.calculate('notes')).toEqual(expectedResult);
    });
  });
});
