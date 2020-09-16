import * as React from 'react';
import InputField, { InputProps } from './Input';
import { PlusButton, MinusButton, VerticalLine, Addon } from './NumberInput_styles';

type Props = {
  onChange?: (values: NumberInputValueProps) => void;
  stepSize?: number;
  decimalCharacter?: string;
  precision?: number;
  value?: number;
} & Omit<InputProps, 'onChange' | 'onClear' | 'value'>;

export type NumberInputValueProps = {
  stringValue?: string;
  numberValue?: number;
};

const DECIMAL = ',';
const PRECISION = 2;
const NumberInput: React.FC<Props> = (props: Props) => {
  const { onChange, stepSize, decimalCharacter, precision } = props;
  const decimalChar = decimalCharacter || DECIMAL;
  const precisionNum = precision === 0 ? Number('0') : precision || PRECISION;
  const FORMAT_REGEX = new RegExp(`^(-)?\\d+(\\.\\d{${precisionNum}})${precisionNum === 0 ? '{0}' : ''}$`);
  const replaceDecimals = (value: string, from: string, to: string) => value.replace(from, to);

  const toStringFormat = React.useCallback(
    (value: number) => replaceDecimals(value.toFixed(precisionNum), '.', decimalChar),
    [decimalChar, precisionNum],
  );

  const toNumber = React.useCallback(
    (numberValue: string) =>
      Math.round(parseFloat(numberValue) * Math.pow(10, precisionNum)) / Math.pow(10, precisionNum),
    [precisionNum],
  );

  const [numberValue, setNumberValue] = React.useState<number | undefined>(
    props.value !== undefined ? props.value : undefined,
  );
  const [stringValue, setStringValue] = React.useState<string | undefined>(
    props.value !== undefined ? toStringFormat(props.value) : '',
  );

  const onInputChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.validity.valid) {
        setStringValue(e.target.value);
        const formatted = replaceDecimals(e.target.value, decimalChar, '.');
        if (!isNaN(parseFloat(formatted)) && FORMAT_REGEX.exec(formatted)) {
          const newNumberValue = toNumber(formatted);
          setNumberValue(newNumberValue);
        }
        if (e.target.value === '') {
          setNumberValue(undefined);
        }
      }
    },
    [decimalChar, toNumber, FORMAT_REGEX],
  );

  const onBlur = React.useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      const parsed = toNumber(replaceDecimals(e.target.value, decimalChar, '.'));
      if (!isNaN(parsed)) {
        setStringValue(toStringFormat(parsed));
        setNumberValue(parsed);
      }
      props.onBlur?.(e);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [toStringFormat, decimalChar],
  );

  const onClear = React.useCallback((e: React.MouseEvent<Element>) => {
    setStringValue('');
    setNumberValue(undefined);
    const input = e.currentTarget.parentElement?.parentElement?.querySelector('input');
    input?.focus();
  }, []);

  const onAddStep = (e: React.MouseEvent<Element>) => {
    const calculatedValue = (numberValue ? numberValue : 0) + (stepSize || 1);
    setStringValue(toStringFormat(calculatedValue));
    setNumberValue(calculatedValue);
    const input = e.currentTarget.parentElement?.parentElement?.querySelector('input');
    input?.focus();
  };

  const onSubtractStep = (e: React.MouseEvent<Element>) => {
    const calculatedValue = (numberValue ? numberValue : 0) - (stepSize || 1);
    setStringValue(toStringFormat(calculatedValue));
    setNumberValue(calculatedValue);
    const input = e.currentTarget.parentElement?.parentElement?.querySelector('input');
    input?.focus();
  };

  React.useEffect(() => {
    (onChange as (values: NumberInputValueProps) => void)?.({ stringValue, numberValue });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberValue, stringValue]);

  React.useEffect(() => {
    if (props.value !== undefined) {
      setStringValue(toStringFormat(props.value));
      setNumberValue(props.value);
    } else {
      setStringValue('');
      setNumberValue(undefined);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <MinusButton onClick={onSubtractStep} />
          <PlusButton onClick={onAddStep} />
        </Addon>
      }
    />
  );
};

export default NumberInput;
