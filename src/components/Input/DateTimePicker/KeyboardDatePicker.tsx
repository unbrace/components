import { KeyboardDatePicker as MaterialKeyboardDatePicker } from '@material-ui/pickers';
import * as React from 'react';
import InputContainer from '../Input/InputContainer';
import { UnbraceDatePickerProps } from './index';

const KeyboardDatePicker: React.FC<UnbraceDatePickerProps> = ({
  value,
  onChange,
  ...props
}: UnbraceDatePickerProps) => {
  return (
    <MaterialKeyboardDatePicker
      TextFieldComponent={InputContainer}
      format="dd/MM/yyyy"
      value={value}
      onChange={onChange}
      variant="inline"
      {...props}
    />
  );
};

export default KeyboardDatePicker;
