import FinanceService from '../services/FinanceService';
import EasyFinanceOptions, { FormatOptions, OriginOptions } from './EasyFinanceOptions';

export const defaultEasyFinanceOptions: EasyFinanceOptions = {
  origin: OriginOptions.memory,
  format: FormatOptions.json,
};

export default class EasyFinance {
  constructor(public readonly options: EasyFinanceOptions = defaultEasyFinanceOptions) {}

  getFinanceService(): FinanceService {
    return new FinanceService();
  }
}
