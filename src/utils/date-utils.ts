import dayjs from 'dayjs';
import { DateFormatType } from '../const';

type SourceDate = Date | string | number | dayjs.Dayjs | null | undefined;

function getFormattedDate(date: SourceDate, format: DateFormatType): string {
  return date ? dayjs(date).format(format) : '';
}

export { getFormattedDate };
