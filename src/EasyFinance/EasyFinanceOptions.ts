export enum OriginOptions {
  memory,
  file,
  cloud,
}

export enum FormatOptions {
  json,
  csv,
  xslx,
}

export default interface EasyFinanceOptions {
  origin: OriginOptions;
  format: FormatOptions;
}
