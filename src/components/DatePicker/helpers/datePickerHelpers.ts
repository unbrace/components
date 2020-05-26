import { DateUtils } from 'react-day-picker';

type UndefinedOrDate = Date | undefined;

export const isSelectingFirstDay = (from: UndefinedOrDate, to: UndefinedOrDate, day: Date) => {
  const isBeforeFirstDay = Boolean(from && DateUtils.isDayBefore(day, from));
  const isRangeSelected = Boolean(from && to);

  return Boolean(!from) || isBeforeFirstDay || isRangeSelected;
};
