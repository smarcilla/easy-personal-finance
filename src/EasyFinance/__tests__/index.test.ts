import { FormatOptions, OriginOptions } from '../EasyFinanceOptions';
import EasyFinance, { defaultEasyFinanceOptions } from '../index';

describe('index module', () => {
  let easyFinance: EasyFinance;
  describe('defaul branch', () => {
    beforeEach(() => {
      easyFinance = new EasyFinance();
    });
    test('should ', () => {
      expect(easyFinance).toBeInstanceOf(EasyFinance);
    });

    test('should ', () => {
      expect(easyFinance.options).toBeDefined();
    });

    test('should ', () => {
      expect(easyFinance.options).toBe(defaultEasyFinanceOptions);
    });
  });

  describe('branch 1', () => {
    beforeEach(() => {
      easyFinance = new EasyFinance({ origin: OriginOptions.file, format: FormatOptions.csv });
    });
    test('should ', () => {
      expect(easyFinance).toBeInstanceOf(EasyFinance);
    });

    test('should ', () => {
      expect(easyFinance.options).toBeDefined();
    });

    test('should ', () => {
      expect(easyFinance.options).not.toBe({ origin: OriginOptions.file, format: FormatOptions.csv });
    });
  });
});
