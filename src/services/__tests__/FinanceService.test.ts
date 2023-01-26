import { FinanceTransactionEntity } from '../../entities';
import FinanceService from '../FinanceService';

describe('FinanceService', () => {
  let financeService: FinanceService;

  beforeEach(() => {
    financeService = new FinanceService();
  });

  test('', () => {
    expect(financeService).toBeDefined();
  });

  test('should ', () => {
    expect(financeService.find).toBeDefined();
  });

  describe('find', () => {
    let result: FinanceTransactionEntity[];

    beforeEach(() => {
      result = financeService.find();
    });
    test('', () => {
      expect(result).toEqual([]);
    });
  });
});
