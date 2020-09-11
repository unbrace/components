import * as React from 'react';
import { Input as InputComponent, NumberInput, NumberInputValueProps } from '../components';
import { InputProps } from '../components/Form/Input';

export const Input: React.FunctionComponent<InputProps> = (props: InputProps) => {
  const [numberValue, setNumberValue] = React.useState<number | undefined>(0);
  console.log(numberValue);

  return (
    <div style={{ width: 300 }}>
      <InputComponent {...props} name="basic" type="text" />
      <InputComponent {...props} name="placeholder" type="text" placeholder="Placeholder" />
      <InputComponent {...props} name="error" type="text" placeholder="Placeholder" error="Invalid input" />
      <InputComponent {...props} label="label" name="label" type="text" placeholder="Placeholder" />
      <NumberInput
        {...props}
        label="number with comma & 5 step"
        name="number"
        type="text"
        placeholder="Placeholder"
        stepSize={5}
        value={numberValue}
        onChange={(values: NumberInputValueProps) => setNumberValue(values.numberValue)}
      />
      <NumberInput
        {...props}
        label="number with point"
        name="number"
        type="text"
        placeholder="Placeholder"
        decimalCharacter="."
        onChange={console.log}
      />
      <InputComponent {...props} disabled label="Disabled" name="Disabled" type="text" placeholder="Placeholder" />
      <InputComponent {...props} inlineLabel label="Inline Label" name="inline" type="text" placeholder="DD/MM/YY" />
      <InputComponent
        {...props}
        noLabel
        label="No Label"
        name="noLabel"
        type="text"
        placeholder="No label placholder"
      />
      <InputComponent
        {...props}
        defaultValue="Default value"
        label="Default value"
        name="Default value"
        type="text"
        placeholder="Placeholder"
      />
    </div>
  );
};

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
