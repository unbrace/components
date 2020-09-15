import * as React from 'react';
import InputField, { InputProps } from './Input';
import { PlusButton, MinusButton, VerticalLine, Addon } from './NumberInput_styles';

type Props = {
  onChange?: (values: NumberInputValueProps) => void;
  stepSize?: number;
  decimalCharacter?: string;
  value?: number;
} & Omit<InputProps, 'onChange' | 'onClear' | 'value'>;

export type NumberInputValueProps = {
  stringValue?: string;
  numberValue?: number;
};

const DECIMAL = ',';
const NumberInput: React.FC<Props> = (props: Props) => {
  const { onChange, stepSize, decimalCharacter } = props;
  const decimalChar = decimalCharacter || DECIMAL;
  const replaceDecimals = (value: string, from: string, to: string) => value.replace(from, to);

  const format = React.useCallback(
    (value: number) => {
      return replaceDecimals(value === -0 ? '0' : value.toString(), '.', decimalChar);
    },
    [decimalChar],
  );

  const [numberValue, setNumberValue] = React.useState<number | undefined>(props.value || undefined);
  const [stringValue, setStringValue] = React.useState<string | undefined>((props.value && format(props.value)) || '');

  const onInputChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.validity.valid) {
        setStringValue(e.target.value);
        const formatted = replaceDecimals(e.target.value, decimalChar, '.');
        if (!isNaN(parseFloat(formatted)) && formatted.match(/[0-9]$/) && formatted.match(/^(-)?[0-9]/)) {
          const newNumberValue = parseFloat(formatted);
          setStringValue(format(newNumberValue));
          setNumberValue(newNumberValue);
        }
        if (e.target.value === '') {
          setNumberValue(undefined);
        }
      }
    },
    [format, decimalChar],
  );

  const onBlur = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const parsed = parseFloat(replaceDecimals(e.target.value, decimalChar, '.'));
      if (!isNaN(parsed)) {
        setStringValue(format(parsed));
        setNumberValue(parsed);
      }
    },
    [format, decimalChar],
  );

  const onClear = React.useCallback(() => {
    setStringValue('');
    setNumberValue(undefined);
  }, []);

  const addStep = () => {
    const calculatedValue = (numberValue ? numberValue : 0) + (stepSize || 1);
    setStringValue(format(calculatedValue));
    setNumberValue(calculatedValue);
  };

  const subtractStep = () => {
    const calculatedValue = (numberValue ? numberValue : 0) - (stepSize || 1);
    setStringValue(format(calculatedValue));
    setNumberValue(calculatedValue);
  };

  React.useEffect(() => {
    (onChange as (values: NumberInputValueProps) => void)?.({ stringValue, numberValue });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberValue, stringValue]);

  React.useEffect(() => {
    if (props.value !== undefined) {
      setStringValue(format(props.value));
      setNumberValue(props.value);
    } else {
      setStringValue('');
      setNumberValue(undefined);
    }
  }, [props.value]);

  return (
    <InputField
      {...props}
      pattern={`[-]?[0-9${decimalChar}e]*`}
      onChange={onInputChange}
      onBlur={onBlur}
      onClear={onClear}
      value={stringValue}
      addonWidth={58}
      addonRight={
        <Addon>
          <VerticalLine />
          <MinusButton onClick={subtractStep} />
          <PlusButton onClick={addStep} />
        </Addon>
      }
    />
  );
};

export default NumberInput;
