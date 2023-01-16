export interface EasyFinanceOptions {
  dataSource?: DataSourceOptions;
}

export enum DataSourceTypes {
  CSV,
}
export interface DataSourceOptions {
  type?: DataSourceTypes;
}
