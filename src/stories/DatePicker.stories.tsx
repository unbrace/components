import * as React from 'react';
import { DatePicker, RangeDatePicker, DatePickerInput } from '../components/DatePicker';
import { DayPickerProps } from 'react-day-picker';
import useRangeDatePickerInputs from '../components/DatePicker/useRangeDatePickerInputs';

export const RangePickerStory: React.FunctionComponent<DayPickerProps> = (props: DayPickerProps) => (
  <RangeDatePicker onChange={console.log} {...props} />
);

export const DatePickerStory: React.FunctionComponent<DayPickerProps> = (props: DayPickerProps) => (
  <DatePicker onChange={console.log} {...props} />
);

export const DatePickerInputStory: React.FunctionComponent<DayPickerProps> = () => (
  <div style={{ width: 400 }}>
    <DatePickerInput onChange={console.log} />
  </div>
);

export const RangePickerInputStory: React.FunctionComponent<DayPickerProps> = () => {
  const { fromProps, toProps } = useRangeDatePickerInputs({ onChange: console.log });

  return (
    <div style={{ width: 400 }}>
      <DatePickerInput {...fromProps} />
      <DatePickerInput {...toProps} />
    </div>
  );
};

export default {
  title: 'DatePicker',
  component: RangePickerStory,
};
