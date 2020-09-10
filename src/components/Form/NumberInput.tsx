import * as React from 'react';
import InputField, { InputProps } from './Input';
import { PlusButton, MinusButton, VerticalLine } from './NumberInput_styles';
import styled from 'styled-components';

type Props = {
  onNumberChange?: (value: string) => void;
  numberInputMargin?: number;
} & InputProps;

const NumberInput: React.FC<Props> = (props: Props) => {
  const { pattern, numberInputMargin, onChange, onNumberChange } = props;

  const onInputChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.validity.valid) {
        onChange?.(e);
        onNumberChange?.(e.target.value);
      }
    },
    [onChange, onNumberChange],
  );

  const plusOne = () => {
    const calculatedValue = !props.value ? '1' : (Number(props.value) + 1).toString();
    onNumberChange?.(calculatedValue);
  };

  const minusOne = () => {
    const calculatedValue = !props.value ? '-1' : (Number(props.value) - 1).toString();
    onNumberChange?.(calculatedValue);
  };

  return (
    <RelativeContainer>
      <InputField {...props} pattern={pattern} onChange={onInputChange} />
      <PlusButton onClick={plusOne} numberInputMargin={numberInputMargin || 0} />
      <MinusButton onClick={minusOne} numberInputMargin={numberInputMargin || 0} />
      <VerticalLine numberInputMargin={numberInputMargin || 0} />
    </RelativeContainer>
  );
};

export default NumberInput;

const RelativeContainer = styled.div`
  position: relative;
`;
