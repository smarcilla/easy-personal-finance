import { ByReportEntity } from './by.report.entity.inteface';
import { MovementItemReportEntity } from './movement.item.report.entity.interface';

export type MovementReportEntity = ByReportEntity<MovementItemReportEntity>;
