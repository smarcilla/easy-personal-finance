import { FinanceTransactionServiceBuilder } from '../../services';
import EasyFinance from '../index';

describe('index module', () => {
  let easyFinance: EasyFinance;
  beforeEach(() => {
    easyFinance = new EasyFinance();
  });

  test('should ', () => {
    expect(easyFinance).toBeInstanceOf(EasyFinance);
  });
  describe('services', () => {
    test('should ', () => {
      expect(easyFinance.transactions).toBeDefined();
    });

    test('should ', () => {
      expect(easyFinance.transactions).toBeInstanceOf(
        FinanceTransactionServiceBuilder
      );
    });
  });
});
