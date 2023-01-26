import EasyFinanceBuilder from '../EasyFinanceBuilder';
import EasyFinance from '..';
import FinanceService from '../../services/FinanceService';

describe('EasyFinance - services', () => {
  describe('getFinanceService', () => {
    let easyFinance: EasyFinance;

    beforeEach(() => {
      easyFinance = new EasyFinanceBuilder().build();
    });

    test('should ', () => {
      expect(easyFinance.getFinanceService).toBeDefined();
    });

    test('should ', () => {
      expect(easyFinance.getFinanceService()).toBeInstanceOf(FinanceService);
    });
  });
});
