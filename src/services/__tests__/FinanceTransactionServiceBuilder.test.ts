import FinanceTransactionServiceBuilder from '../FinanceTransactionServiceBuilder';
import MemoryFinanceTransactionServiceBuilder from '../MemoryFinanceTransactionServiceBuilder';

describe('FinanceTransactionServiceBuilder', () => {
  let builder: FinanceTransactionServiceBuilder;

  beforeEach(() => {
    builder = new FinanceTransactionServiceBuilder();
  });

  test('should ', () => {
    expect(builder).toBeDefined();
  });

  test('should ', () => {
    expect(builder.withOrigin).toBeDefined();
  });

  describe('when branch 1', () => {
    test('should ', () => {
      expect(builder.withOrigin('memory')).toBeInstanceOf(MemoryFinanceTransactionServiceBuilder);
    });
  });
});
