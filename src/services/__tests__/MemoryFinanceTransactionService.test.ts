import { MemoryFinanceTransactionService } from '../MemoryFinanceTransactionService';
import data from '../data/jsonFinanceData.mock.json';

describe('MemoryFinanceTransactionService', () => {
  let memoryFinanceTransactionService: MemoryFinanceTransactionService;

  beforeEach(() => {
    memoryFinanceTransactionService = new MemoryFinanceTransactionService({ data });
  });

  test('', () => {
    expect(memoryFinanceTransactionService).toBeDefined();
  });

  test('should ', () => {
    expect(memoryFinanceTransactionService.find).toBeDefined();
  });
});
