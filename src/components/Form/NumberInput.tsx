import * as React from 'react';
import InputField, { InputProps } from './Input';
import { PlusButton, MinusButton, VerticalLine } from './NumberInput_styles';
import styled from 'styled-components';

type Props = {
  onChange?: (values: NumberInputValueProps) => void;
  numberInputMargin?: number;
  stepSize?: number;
  decimalCharacter?: string;
} & Omit<InputProps, 'onChange'>;

export type NumberInputValueProps = {
  stringValue?: string;
  numberValue?: number;
};

const DECIMAL = ',';
const NumberInput: React.FC<Props> = (props: Props) => {
  const { numberInputMargin, onChange, stepSize, decimalCharacter } = props;
  const [stringValue, setStringValue] = React.useState<string | undefined>(undefined);
  const [numberValue, setNumberValue] = React.useState<number | undefined>(undefined);
  const decimalChar = decimalCharacter || DECIMAL;

  const replaceDecimals = (value: string, from: string, to: string) => value.replace(from, to);

  const format = React.useCallback(
    (value: number) => {
      return replaceDecimals(value === -0 ? '-0' : value.toString(), '.', decimalChar);
    },
    [decimalChar],
  );

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
  }, [numberValue, stringValue, onChange]);

  return (
    <RelativeContainer>
      <InputField
        {...props}
        pattern={`[-]?[0-9${decimalChar}e]*`}
        onChange={onInputChange}
        onBlur={onBlur}
        value={stringValue}
      />
      <PlusButton onClick={addStep} numberInputMargin={numberInputMargin || 0} />
      <MinusButton onClick={subtractStep} numberInputMargin={numberInputMargin || 0} />
      <VerticalLine numberInputMargin={numberInputMargin || 0} />
    </RelativeContainer>
  );
};

export default NumberInput;

const RelativeContainer = styled.div`
  position: relative;
`;
