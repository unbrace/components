import * as React from 'react';
import { DatePicker, RangeDatePicker } from '../components/DatePicker';
import { DayPickerProps } from 'react-day-picker';

export const RangePickerStory: React.FunctionComponent<DayPickerProps> = (props: DayPickerProps) => (
  <RangeDatePicker onChange={console.log} {...props} />
);

export const DatePickerStory: React.FunctionComponent<DayPickerProps> = (props: DayPickerProps) => (
  <DatePicker onChange={console.log} {...props} />
);

export default {
  title: 'DatePicker',
  component: RangePickerStory,
};
