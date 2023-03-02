import { ByReportEntity } from './by.report.entity.inteface';
import { NoteItemReportEntity } from './note.item.report.entity.interface';

export type NoteReportEntity = ByReportEntity<NoteItemReportEntity>;
