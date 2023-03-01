import { ParsedObjectsResult } from 'read-excel-file';

export type RowData<T extends object> = ParsedObjectsResult<T>;
