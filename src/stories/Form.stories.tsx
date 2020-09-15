import * as React from 'react';
import { Input as InputComponent, NumberInput, NumberInputValueProps } from '../components';
import { InputProps } from '../components/Form/Input';

export const Input: React.FunctionComponent<InputProps> = (props: InputProps) => {
  const [numberValue, setNumberValue] = React.useState<number | undefined>(34.33);
  const [numberValue2, setNumberValue2] = React.useState<number | undefined>(undefined);

  return (
    <div style={{ width: 300 }}>
      <InputComponent {...props} name="basic" type="text" />
      <InputComponent {...props} name="placeholder" type="text" placeholder="Placeholder" />
      <InputComponent {...props} name="error" type="text" placeholder="Placeholder" error="Invalid input" />
      <InputComponent {...props} label="label" name="label" type="text" placeholder="Placeholder" isClearable />
      <NumberInput
        {...props}
        label="number with comma & 5 step"
        name="number"
        type="text"
        stepSize={5}
        value={numberValue}
        onChange={(values: NumberInputValueProps) => setNumberValue(values.numberValue)}
      />
      <NumberInput
        {...props}
        label="number with point"
        name="number2"
        type="text"
        decimalCharacter="."
        isClearable
        value={numberValue}
        onChange={(values: NumberInputValueProps) => setNumberValue(values.numberValue)}
      />
      <NumberInput
        {...props}
        label="inline"
        name="number3"
        type="text"
        inlineLabel
        decimalCharacter=","
        isClearable
        value={numberValue2}
        onChange={(values: NumberInputValueProps) => setNumberValue2(values.numberValue)}
      />
      <NumberInput
        {...props}
        label="inline no clear"
        name="number4"
        type="text"
        inlineLabel
        decimalCharacter=","
        value={numberValue2}
        onChange={(values: NumberInputValueProps) => setNumberValue2(values.numberValue)}
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
