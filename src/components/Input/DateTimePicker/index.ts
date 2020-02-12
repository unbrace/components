import { DatePickerProps } from '@material-ui/pickers';
import { ParsableDate } from '@material-ui/pickers/constants/prop-types';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import DatePicker from './DatePicker';
import KeyboardDatePicker from './KeyboardDatePicker';

export type UnbraceDatePickerProps = {
  value: ParsableDate;
  onChange: (date: MaterialUiPickersDate) => void;
} & DatePickerProps;

export { DatePicker, KeyboardDatePicker };
