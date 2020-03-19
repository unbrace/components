import * as React from 'react';
import { DatePicker, RangeDatePicker } from '../components/DatePicker';
import { UnbraceThemeProvider } from '../components';
import { DayPickerProps } from 'react-day-picker';

export const RangePickerStory: React.FunctionComponent<DayPickerProps> = (props: DayPickerProps) => (
  <UnbraceThemeProvider>
    <RangeDatePicker onChange={console.log} {...props} />
  </UnbraceThemeProvider>
);

export const DatePickerStory: React.FunctionComponent<DayPickerProps> = (props: DayPickerProps) => (
  <UnbraceThemeProvider>
    <DatePicker onChange={console.log} {...props} />
  </UnbraceThemeProvider>
);

export default {
  title: 'DatePicker',
  component: RangePickerStory,
};
