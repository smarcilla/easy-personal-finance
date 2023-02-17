const mockService = jest.fn();

jest.mock('../MemoryTransactionService', () => {
  return {
    MemoryTransactionService: jest.fn().mockImplementation(() => mockService)
  };
});

import { MemoryTransactionService } from '../MemoryTransactionService';

import MemoryFinanceTransactionServiceBuilder from '../MemoryFinanceTransactionServiceBuilder';
import data from '../../data/jsonFinanceData.mock.json';

describe('MemoryTransactionServiceBuilder', () => {
  let builder: MemoryFinanceTransactionServiceBuilder;

  beforeEach(() => {
    builder = new MemoryFinanceTransactionServiceBuilder();
  });

  test('should ', () => {
    expect(builder).toBeDefined();
  });

  test('should ', () => {
    expect(builder.withData).toBeDefined();
  });

  test('should ', () => {
    expect(builder.build).toBeDefined();
  });

  describe('when build is called', () => {
    test('should ', () => {
      expect(new MemoryFinanceTransactionServiceBuilder().build()).toEqual(
        mockService
      );
    });

    test('should ', () => {
      new MemoryFinanceTransactionServiceBuilder().build();
      expect(MemoryTransactionService).toHaveBeenCalledWith({ data: [] });
    });
  });

  describe('when withData is called', () => {
    test('should ', () => {
      expect(
        new MemoryFinanceTransactionServiceBuilder().withData(data).build()
      ).toEqual(mockService);
    });

    test('should ', () => {
      new MemoryFinanceTransactionServiceBuilder().withData(data).build();

      expect(MemoryTransactionService).toHaveBeenCalledWith({ data });
    });
  });
});
