import * as React from 'react';
import DayPicker, { DayModifiers } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export const DatePicker = () => {
  const [selectedDay, setSelectedDay] = React.useState(undefined);

  const handleDaySelect = (day: any, { selected }: DayModifiers) => {
    setSelectedDay(selected ? undefined : day);
  };
  return <DayPicker selectedDays={selectedDay} onDayClick={handleDaySelect} />;
};

export default DatePicker;
