import * as React from 'react';
import DayPicker, { DayPickerProps, Modifier } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { isSelectingFirstDay } from './helpers/datePickerHelpers';
import { createInitialState, reducer } from './reducers/rangeDatePicker';
import DatePickerWrapper from './DatePickerWrapper';

export type DateRange = {
  from: Date | undefined;
  to: Date | undefined;
};

type Props = {
  onChange: ({ from, to }: DateRange) => void;
  initialRange?: DateRange;
} & DayPickerProps;

export const RangeDatePicker: React.FunctionComponent<Props> = ({ initialRange, onChange, ...props }: Props) => {
  const [state, dispatch] = React.useReducer(reducer, createInitialState(initialRange));
  const { from, to, enteredTo } = state;
  const modifiers = { start: from, end: enteredTo };
  const disabledDays = { before: state.from, after: undefined } as Modifier;
  const selectedDays = [from, { from, to: enteredTo }] as Modifier[];

  const handleDayClick = (day: Date) => {
    if (from && to && day >= from && day <= to) {
      dispatch({ type: 'RESET' });

      return;
    }
    if (isSelectingFirstDay(from, to, day)) {
      dispatch({ type: 'FIRST_DAY_SET', payload: day });
    } else {
      dispatch({ type: 'LAST_DAY_SET', payload: day });
    }
  };

  const handleChange = React.useCallback(
    (date: DateRange) => {
      onChange(date);
    },
    [onChange],
  );

  React.useEffect(() => {
    if (!from && !to) {
      handleChange({ from, to });
    }
    if (to) {
      handleChange({ from, to });
    }
  }, [from, to]);

  const handleDayMouseEnter = (day: Date) => {
    const { from, to } = state;
    if (!isSelectingFirstDay(from, to, day)) {
      dispatch({ type: 'DAY_ENTERED_SET', payload: day });
    }
  };

  return (
    <DatePickerWrapper>
      <DayPicker
        numberOfMonths={1}
        fromMonth={state.from}
        selectedDays={selectedDays}
        disabledDays={disabledDays}
        modifiers={modifiers}
        onDayClick={handleDayClick}
        onDayMouseEnter={handleDayMouseEnter}
        {...props}
        className={`unbrace_date-picker Range ${props.className}`}
      />
    </DatePickerWrapper>
  );
};

export default RangeDatePicker;
