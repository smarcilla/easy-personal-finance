import {
  FormDataFinanceTransactionServiceBuilder,
  MemoryFinanceTransactionServiceBuilder
} from '../../services';
import { TransactionServiceBuilder } from '../../transactions';

describe('transactions', () => {
  describe('when finance data comes from json data', () => {
    test('should return json transaction service', () => {
      expect(
        new TransactionServiceBuilder().withType('json-data')
      ).toBeInstanceOf(MemoryFinanceTransactionServiceBuilder);
    });
  });

  describe('when finance data comes from formdata data', () => {
    expect(
      new TransactionServiceBuilder().withType('form-data')
    ).toBeInstanceOf(FormDataFinanceTransactionServiceBuilder);
  });
});
