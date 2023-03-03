export interface ReportHelperService<T> {
  getReport(): Promise<T>;
}
