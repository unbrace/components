import * as React from 'react';
import { reducer, createInitialState } from './reducers/rangeDatePicker';
import { isSelectingFirstDay } from './helpers/datePickerHelpers';
import { Modifier, DayPickerInputProps } from 'react-day-picker';
import { DateRange } from './RangeDatePicker';

type Props = {
  onChange: ({ from, to }: DateRange) => void;
  initialRange?: DateRange;
};

type RangeDatePickerInputProps = Pick<DayPickerInputProps, 'value' | 'dayPickerProps'>;

const useRangeDatePickerInputs = ({ initialRange, onChange }: Props) => {
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

  React.useEffect(() => {
    if (!from || to) {
      onChange({ from, to });
    }
  }, [from, to, onChange]);

  const handleDayMouseEnter = (day: Date) => {
    const { from, to } = state;
    if (!isSelectingFirstDay(from, to, day)) {
      dispatch({ type: 'DAY_ENTERED_SET', payload: day });
    }
  };

  const fromProps: RangeDatePickerInputProps = {
    value: state.from,
    dayPickerProps: {
      selectedDays,
      disabledDays,
      numberOfMonths: 1,
      modifiers,
      onDayClick: handleDayClick,
      onDayMouseEnter: handleDayMouseEnter,
      className: `unbrace_date-picker Range`,
    },
  };

  const toProps: RangeDatePickerInputProps = {
    value: state.from,
    dayPickerProps: {
      selectedDays,
      disabledDays,
      numberOfMonths: 1,
      modifiers,
      onDayClick: handleDayClick,
      onDayMouseEnter: handleDayMouseEnter,
      className: `unbrace_date-picker Range`,
    },
  };

  return { fromProps, toProps };
};

export default useRangeDatePickerInputs;
