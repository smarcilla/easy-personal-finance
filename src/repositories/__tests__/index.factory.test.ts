import FinanceTransactionRepository from '../FinanceTransactionRepository';
import FinanceTransactionFactory from '../index';

describe('Name of the group', () => {
  let factory: FinanceTransactionFactory;

  beforeEach(() => {
    factory = new FinanceTransactionFactory();
  });
  describe('financeTransactionRepository', () => {
    let financeTransactionRepository: FinanceTransactionRepository;

    beforeEach(() => {
      financeTransactionRepository = factory.createFinanceTransaction();
    });
    test('should ', () => {
      expect(factory).toBeDefined();
    });

    test('should ', () => {
      expect(factory.createFinanceTransaction).toBeDefined();
    });

    test('should ', () => {
      expect(financeTransactionRepository).toBeDefined();
    });

    test('should ', () => {
      expect(financeTransactionRepository.find).toBeDefined();
    });
  });
});
