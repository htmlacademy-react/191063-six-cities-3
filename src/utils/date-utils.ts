import dayjs from 'dayjs';
import { DateFormatType } from '../types/app-types';

type SourceDate = Date | string | number | dayjs.Dayjs | null | undefined;

export function getFormattedDate(date: SourceDate, format: DateFormatType): string {
  return date ? dayjs(date).format(format) : '';
}
