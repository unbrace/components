import * as React from 'react';
import { DatePicker, RangeDatePicker } from '../components/DatePicker';
import { UnbraceThemeProvider } from '../components';
import { DayPickerProps } from 'react-day-picker';
import { Met } from '@storybook/addon-docs/';

export const RangePickerStory: React.FunctionComponent<DayPickerProps> = (props: DayPickerProps) => (
  <UnbraceThemeProvider>
    <RangeDatePicker />
  </UnbraceThemeProvider>
);
export const DatePickerStory = () => <DatePicker />;
export default {
  title: 'DatePicker',
  component: RangePickerStory,
};
