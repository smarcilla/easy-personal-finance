import { ReportServiceBuilderException } from '../exceptions/report.service.builder.exception';
import { TransactionRepository } from '../interfaces';
import { ReportBuilder } from '../interfaces/report.builder.interface';
import { ReportService } from '../interfaces/report.service.interface';
import { EasyFinanceReportService } from '../services';
import { CategoryReportService } from '../services/category.report.service';
import { ConceptReportService } from '../services/concept.report.service';
import { MortgageReportService } from '../services/mortgage.report.service';
import { MovementReportService } from '../services/movement.report.service';
import { NoteReportService } from '../services/note.report.service';
import { TotalReportService } from '../services/total.report.service';
import { TransactionEntityHelper } from './transaction.entity.helper';

export class EasyFinanceReportBuilder implements ReportBuilder {
  private repositories!: Array<TransactionRepository>;

  addRepository(repository: TransactionRepository) {
    if (!this.repositories) {
      this.repositories = [];
    }

    this.repositories.push(repository);

    return this;
  }

  setRepositories(repositories: Array<TransactionRepository>) {
    this.repositories = repositories;

    return this;
  }

  build(): ReportService {
    if (!this.repositories) {
      throw new ReportServiceBuilderException(
        'repositories undefined before building report service builder'
      );
    }

    const transactionEntityHelper = new TransactionEntityHelper();
    const categoryReportService = new CategoryReportService();
    const totalReportService = new TotalReportService(
      this.repositories,
      transactionEntityHelper
    );
    const conceptReportService = new ConceptReportService();
    const movementReportService = new MovementReportService();
    const noteReportService = new NoteReportService();
    const mortgageReportService = new MortgageReportService();

    return new EasyFinanceReportService(
      categoryReportService,
      totalReportService,
      conceptReportService,
      movementReportService,
      noteReportService,
      mortgageReportService
    );
  }
}
