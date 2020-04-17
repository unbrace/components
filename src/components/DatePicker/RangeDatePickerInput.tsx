import * as React from 'react';
import { DayPickerInputProps } from 'react-day-picker';
import DatePickerInput from './DatePickerInput';
import RangeDatePicker from './RangeDatePicker';

type Props = DayPickerInputProps;

const RangeDatePickerInput: React.FC<Props> = () => {
  return <DatePickerInput overlayComponent={(overlayProps: any) => <RangeDatePicker {...overlayProps} />} />;
};

export default RangeDatePickerInput;
