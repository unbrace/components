import * as React from 'react';
import { reducer, createInitialState } from './reducers/rangeDatePicker';
import { isSelectingFirstDay } from './helpers/datePickerHelpers';
import { Modifier, DayPickerInputProps } from 'react-day-picker';
import { DateRange } from './RangeDatePicker';

type Props = {
  onChange: ({ from, to }: DateRange) => void;
  initialRange?: DateRange;
  numberOfMonths?: number;
};

type RangeDatePickerInputProps = Pick<DayPickerInputProps, 'value' | 'dayPickerProps' | 'onDayChange'>;

const useRangeDatePickerInputs = ({ initialRange, onChange, numberOfMonths }: Props) => {
  const [state, dispatch] = React.useReducer(reducer, createInitialState(initialRange));
  const { from, to, enteredTo } = state;
  const modifiers = { start: from, end: enteredTo };
  const disabledDays = { before: state.from, after: undefined } as Modifier;
  const selectedDays = [from, { from, to: enteredTo || to }] as Modifier[];
  const toRef = React.useRef<any>();

  const handleFromChange = (day: Date) => {
    dispatch({ type: 'FIRST_DAY_SET', payload: day });
    toRef.current?.showDayPicker();
  };

  const handleToChange = (day: Date) => {
    dispatch({ type: 'LAST_DAY_SET', payload: day });
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

  const dayPickerProps = {
    selectedDays,
    disabledDays,
    numberOfMonths: numberOfMonths || 1,
    modifiers,
    onDayMouseEnter: handleDayMouseEnter,
    className: `unbrace_date-picker Range`,
  };

  const fromProps: RangeDatePickerInputProps & any = {
    value: state.from,
    dayPickerProps,
    onDayChange: handleFromChange,
    inputProps: {
      name: 'from',
    },
  };

  const toProps: RangeDatePickerInputProps & any = {
    value: state.to,
    dayPickerProps,
    onDayChange: handleToChange,
    passableRef: toRef,
    inputProps: {
      name: 'to',
    },
  };

  return {
    fromProps,
    toProps,
  };
};

export default useRangeDatePickerInputs;
