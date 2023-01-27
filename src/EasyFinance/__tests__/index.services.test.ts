import EasyFinanceBuilder from '../EasyFinanceBuilder';
import EasyFinance from '..';

describe('EasyFinance - services', () => {
  describe('getFinanceService', () => {
    let easyFinance: EasyFinance;

    beforeEach(() => {
      easyFinance = new EasyFinanceBuilder().build();
    });

    test('should ', () => {
      expect(easyFinance.getFinanceService).toBeDefined();
    });
  });
});
