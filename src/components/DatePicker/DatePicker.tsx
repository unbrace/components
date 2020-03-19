import * as React from 'react';
import DayPicker, { DayModifiers, DayPickerProps } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import DatePickerWrapper from './DatePickerWrapper';

type Props = {
  onChange: (day: Date | undefined) => void;
  initialDay?: Date;
} & DayPickerProps;

export const DatePicker: React.FC<Props> = ({ onChange, initialDay, ...props }: Props) => {
  const [selectedDay, setSelectedDay] = React.useState(initialDay);

  const handleDaySelect = (day: any, { selected }: DayModifiers) => {
    setSelectedDay(selected ? undefined : day);
  };

  const handleChange = React.useCallback(
    (date: Date | undefined) => {
      onChange(date);
    },
    [onChange],
  );

  React.useEffect(() => {
    handleChange(selectedDay);
  }, [selectedDay]);

  return (
    <DatePickerWrapper>
      <DayPicker
        {...props}
        className={`unbrace_date-picker ${props.className} `}
        selectedDays={selectedDay}
        onDayClick={handleDaySelect}
      />
    </DatePickerWrapper>
  );
};

export default DatePicker;
