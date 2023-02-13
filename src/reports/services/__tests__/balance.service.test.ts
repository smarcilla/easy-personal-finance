import { BalanceSheetService } from '../../index';
import { MemoryFinanceTransactionServiceBuilder } from '../../../services';

import financeData from '../../../data/jsonFinanceData.mock.json';
import { FinanceTransactionEntity } from '../../../entities';

describe('BalanceSheetService', () => {
  let financeEntities: FinanceTransactionEntity[];
  let balanceSheetService: BalanceSheetService;

  beforeEach(() => {
    financeEntities = new MemoryFinanceTransactionServiceBuilder().withData(financeData).build().find();
    balanceSheetService = new BalanceSheetService(financeEntities);
  });
  describe('calculate report', () => {
    test('should return total incomes', () => {
      expect(balanceSheetService.calculateReport().totalIncomes).toEqual(3000);
    });

    test('should return total expenses', () => {
      expect(balanceSheetService.calculateReport().totalExpenses).toEqual(-1600);
    });

    test('should return total balance', () => {
      expect(balanceSheetService.calculateReport().totalBalance).toEqual(1400);
    });
  });
});
