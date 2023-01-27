import { FinanceTransactionEntity } from '../../entities';
import { MemoryFinanceTransactionService } from '../MemoryFinanceTransactionService';

describe('MemoryFinanceTransactionService', () => {
  let memoryFinanceTransactionService: MemoryFinanceTransactionService;

  beforeEach(() => {
    memoryFinanceTransactionService = new MemoryFinanceTransactionService();
  });

  test('', () => {
    expect(memoryFinanceTransactionService).toBeDefined();
  });

  test('should ', () => {
    expect(memoryFinanceTransactionService.find).toBeDefined();
  });

  describe('find', () => {
    let result: FinanceTransactionEntity[];

    beforeEach(() => {
      result = memoryFinanceTransactionService.find();
    });
    test('', () => {
      expect(result).toEqual([]);
    });
  });
});
