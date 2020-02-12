import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import * as React from 'react';
import {
  DatePicker as InputDatePicker,
  KeyboardDatePicker as InputKeyboardDatePicker,
} from '../components/Input/DateTimePicker';
import Input from '../components/Input/Input/Input';
import UnbraceThemeProvider from '../components/UnbraceThemeProvider';

export const DatePicker = () => {
  const [selectedDate, handleDateChange] = React.useState<MaterialUiPickersDate>(new Date());

  return (
    <UnbraceThemeProvider>
      <div style={{ display: 'flex', width: 612, flexDirection: 'column', margin: '0 auto' }}>
        <InputDatePicker label="Basic date picker" value={selectedDate} onChange={handleDateChange} />
      </div>
    </UnbraceThemeProvider>
  );
};

export const KeyboardDatePicker = () => {
  const [selectedDate, handleDateChange] = React.useState<MaterialUiPickersDate>(new Date());

  return (
    <UnbraceThemeProvider>
      <React.Fragment>
        <InputKeyboardDatePicker value={selectedDate} onChange={date => handleDateChange(date)} />
      </React.Fragment>
    </UnbraceThemeProvider>
  );
};

export const InputField = () => (
  <UnbraceThemeProvider>
    <div style={{ display: 'flex', width: 612, flexDirection: 'column', margin: '0 auto' }}>
      <Input label={'Basic input'} name={'input'} type="text" />
      <Input label={'Disabled input'} name={'input'} type="text" disabled />
      <Input error={'Error text'} label={'Input with error'} name={'input'} type="text" />
    </div>
  </UnbraceThemeProvider>
);

export default {
  title: 'Input',
};
