import { FinanceTransactionService } from '../services/FinanceTransactionService';
import { MemoryFinanceTransactionService } from '../services/MemoryFinanceTransactionService';
import EasyFinanceOptions, { FormatOptions, OriginOptions } from './EasyFinanceOptions';

export const defaultEasyFinanceOptions: EasyFinanceOptions = {
  origin: OriginOptions.memory,
  format: FormatOptions.json,
};

export default class EasyFinance {
  constructor(public readonly options: EasyFinanceOptions = defaultEasyFinanceOptions) {}

  getFinanceService(): FinanceTransactionService {
    return new MemoryFinanceTransactionService();
  }
}
