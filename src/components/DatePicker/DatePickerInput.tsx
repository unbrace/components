import * as React from 'react';
import DatePickerInputComponent from 'react-day-picker/DayPickerInput';
import { DayPickerInputProps, DayModifiers } from 'react-day-picker';
import { Input } from '../Form/Input';
import DatePickerWrapper from './DatePickerWrapper';

type Props = {
  onChange?: (day: Date | undefined) => void;
} & DayPickerInputProps;

const DatePickerInput: React.FC<Props> = ({ onChange, ...props }: Props) => {
  const handleDaySelect = (day: Date, { selected }: DayModifiers) => {
    onChange?.(selected ? undefined : day);
  };

  return (
    <DatePickerInputComponent
      dayPickerProps={{
        className: `unbrace_date-picker`,
        onDayClick: handleDaySelect,
      }}
      component={Input}
      overlayComponent={DatePickerWrapper}
      {...props}
    />
  );
};

export default DatePickerInput;
