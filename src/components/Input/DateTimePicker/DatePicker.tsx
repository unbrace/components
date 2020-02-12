import { DatePicker as MaterialDatePicker } from '@material-ui/pickers';
import * as React from 'react';
import { ErrorText } from '../Input/ErrorText';
import { FieldContainer } from '../Input/FieldContainer';
import InputContainer from '../Input/InputContainer';
import { Label } from '../Input/Label';
import { UnbraceDatePickerProps } from './index';

type Props = {
  noLabel?: string;
  label?: string;
  error?: string;
};

const DatePicker: React.FC<UnbraceDatePickerProps & Props> = ({
  noLabel,
  label,
  error,
  value,
  onChange,
  ...props
}: UnbraceDatePickerProps & Props) => {
  return (
    <FieldContainer>
      {!noLabel && <Label htmlFor={name}>{label || name}</Label>}
      <MaterialDatePicker
        TextFieldComponent={InputContainer}
        value={value}
        onChange={onChange}
        variant="inline"
        {...props}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </FieldContainer>
  );
};

export default DatePicker;
