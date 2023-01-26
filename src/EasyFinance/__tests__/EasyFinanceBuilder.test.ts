import EasyFinance from '..';
import EasyFinanceBuilder from '../EasyFinanceBuilder';

describe('EasyFinanceBuilder', () => {
  let builder: EasyFinanceBuilder;

  beforeEach(() => {
    builder = new EasyFinanceBuilder();
  });

  describe('default branch', () => {
    test('should ', () => {
      expect(builder.build).toBeDefined();
    });

    test('should ', () => {
      expect(builder.build()).toBeInstanceOf(EasyFinance);
    });
  });
});
