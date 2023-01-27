import DefaultEasyFinance, { EasyFinance, EasyFinanceBuilder, FinanceServiceBuilder } from '../index';

describe('EasyFinance', () => {
  describe('default branch', () => {
    test('should ', () => {
      expect(DefaultEasyFinance).toBeDefined();
    });
  });
  describe('branch 1', () => {
    test('should', () => {
      expect(EasyFinance).toBeDefined();
    });
  });

  describe('branch 2', () => {
    test('should ', () => {
      expect(EasyFinanceBuilder).toBeDefined();
    });
  });

  describe('integration library - finance service builder', () => {
    test('should ', () => {
      const builder: FinanceServiceBuilder = new FinanceServiceBuilder();

      expect(builder).toBeDefined();
    });
  });
});
