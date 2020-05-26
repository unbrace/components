import * as React from 'react';
import { reducer, createInitialState } from './reducers/rangeDatePicker';
import { isSelectingFirstDay } from './helpers/datePickerHelpers';
import { Modifier, DayPickerInputProps } from 'react-day-picker';
import { DateRange } from './RangeDatePicker';
import DayPickerInput from 'react-day-picker/types/DayPickerInput';

type Props = {
  onChange: ({ from, to }: DateRange) => void;
  initialRange?: DateRange;
  numberOfMonths?: number;
  fromInputProps?: object;
  toInputProps?: object;
};

type RangeDatePickerInputProps = Pick<DayPickerInputProps, 'value' | 'dayPickerProps' | 'onDayChange' | 'inputProps'>;

const useRangeDatePickerInputs = ({ initialRange, onChange, numberOfMonths, fromInputProps, toInputProps }: Props) => {
  const [state, dispatch] = React.useReducer(reducer, createInitialState(initialRange));
  const { from, to, enteredTo } = state;
  const modifiers = { start: from, end: enteredTo || to };
  const selectedDays = [from, { from, to: enteredTo || to }] as Modifier[];
  const toRef = React.useRef<DayPickerInput>();

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
    numberOfMonths: numberOfMonths || 1,
    modifiers,
    onDayMouseEnter: handleDayMouseEnter,
    className: `unbrace_date-picker Range`,
  };

  const fromProps: RangeDatePickerInputProps = {
    value: state.from,
    dayPickerProps: { ...dayPickerProps, disabledDays: { after: state.to } as Modifier },
    onDayChange: handleFromChange,
    inputProps: fromInputProps,
  };

  const toProps: RangeDatePickerInputProps & { passableRef: React.MutableRefObject<DayPickerInput> } = {
    value: state.to,
    dayPickerProps: { ...dayPickerProps, disabledDays: { before: state.from } as Modifier },
    onDayChange: handleToChange,
    passableRef: toRef as React.MutableRefObject<DayPickerInput>,
    inputProps: toInputProps,
  };

  return {
    fromProps,
    toProps,
  };
};

export default useRangeDatePickerInputs;
