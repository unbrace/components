import { DateUtils } from 'react-day-picker';

type UndefinedOrDate = Date | undefined;

export const isSelectingFirstDay = (from: UndefinedOrDate, to: UndefinedOrDate, day: Date) => {
  const isBeforeFirstDay = from && DateUtils.isDayBefore(day, from);
  const isRangeSelected = from && to;

  return !from || isBeforeFirstDay || isRangeSelected;
};
