import * as React from 'react';
import { DatePicker, RangeDatePicker, DatePickerInput, useRangeDatePickerInputs } from '../components/DatePicker';
import { DayPickerProps } from 'react-day-picker';

export const RangePickerStory: React.FunctionComponent<DayPickerProps> = (props: DayPickerProps) => (
  <RangeDatePicker onChange={console.log} numberOfMonths={2} {...props} />
);

export const DatePickerStory: React.FunctionComponent<DayPickerProps> = (props: DayPickerProps) => (
  <DatePicker onChange={console.log} {...props} disabledDays={{ before: new Date() }} />
);

export const DatePickerInputStory: React.FunctionComponent<DayPickerProps> = () => {
  const [state, setDate] = React.useState(undefined);
  console.log(state);

  return (
    <div style={{ width: 400 }}>
      <DatePickerInput
        dayPickerProps={{ onDayClick: (date?: Date) => setDate(date) }}
        showOverlay
        inputProps={{
          isClearable: true,
          // onChange: setDate,  // Commented since the value needs to be parsed first for valid date formats
          onClear: () => {
            setDate(undefined);
          },
        }}
        value={state}
      />
      <div style={{ position: 'fixed', bottom: 30, width: 400 }}>
        <DatePickerInput onChange={console.log} />
      </div>
    </div>
  );
};

export const RangePickerInputStory: React.FunctionComponent<DayPickerProps> = () => {
  const { fromProps, toProps } = useRangeDatePickerInputs({
    initialRange: { from: new Date('2020/02/01'), to: new Date('2020/02/20') },
    numberOfMonths: 2,
    onChange: console.log,
    fromInputProps: { name: 'from', inlineLabel: true, isClearable: true, onClear: console.log },
    toInputProps: { name: 'to', inlineLabel: true },
  });

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
