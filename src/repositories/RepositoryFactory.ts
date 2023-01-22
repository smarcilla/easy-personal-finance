import FinanceTransactionRepository from './FinanceTransactionRepository';

export default class RepositoryFactory {
  createFinanceTransaction(): FinanceTransactionRepository {
    return new FinanceTransactionRepository();
  }
}
