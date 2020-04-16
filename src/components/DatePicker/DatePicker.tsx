import * as React from 'react';
import DayPicker, { DayModifiers, DayPickerProps } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import DatePickerWrapper from './DatePickerWrapper';

type Props = {
  onChange?: (day: Date | undefined) => void;
} & DayPickerProps;

export const DatePicker: React.FC<Props> = ({ onChange, ...props }: Props) => {
  const handleDaySelect = (day: Date, { selected }: DayModifiers) => {
    onChange?.(selected ? undefined : day);
  };

  return (
    <DatePickerWrapper>
      <DayPicker {...props} className={`unbrace_date-picker ${props.className} `} onDayClick={handleDaySelect} />
    </DatePickerWrapper>
  );
};

export default DatePicker;
