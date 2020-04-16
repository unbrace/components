import * as React from 'react';
import { Input as InputComponent } from '../components';
import { InputProps } from '../components/Form/Input';

export const Input: React.FunctionComponent<InputProps> = (props: InputProps) => (
  <React.Fragment>
    <InputComponent {...props} name="basic" type="text" />
    <InputComponent {...props} name="placeholder" type="text" placeholder="Placeholder" />
    <InputComponent {...props} name="error" type="text" placeholder="Placeholder" error="Invalid input" />
    <InputComponent {...props} label="label" name="label" type="text" placeholder="Placeholder" />
    <InputComponent {...props} disabled label="Disabled" name="Disabled" type="text" placeholder="Placeholder" />
    <InputComponent
      {...props}
      defaultValue="Default value"
      label="Default value"
      name="Default value"
      type="text"
      placeholder="Placeholder"
    />
  </React.Fragment>
);

export const Checkbox: React.FunctionComponent<InputProps> = () => (
  <React.Fragment>
    <InputComponent name="basic" type="checkbox" label="Basic" />
    <InputComponent disabled name="disabled" type="checkbox" label="Disabled" />
  </React.Fragment>
);

export default {
  title: 'Form',
  component: Input,
};
