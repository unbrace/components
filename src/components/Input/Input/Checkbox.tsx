import * as React from 'react';
import styled from 'styled-components';
import { ErrorText } from './ErrorText';
import { Input } from './Input';
import { Label } from './Label';

type Props = {
  error?: string;
  label?: string;
  name: string;
  disabled?: boolean;
};

const Checkbox: React.FunctionComponent<Props> = ({ error, name, label, ...props }: Props) => {
  return (
    <CheckContainer disabled={props.disabled}>
      <Input id={name} name={name} {...props} />
      <Label htmlFor={name}>{label}</Label>
      {error && <ErrorText>{error}</ErrorText>}
    </CheckContainer>
  );
};

const CheckContainer = styled.div<{ disabled?: boolean }>`
  display: flex;
  justify-content: left;
  align-self: flex-start;
  position: relative;

  > label {
    margin-left: 40px;
    position: relative;
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
    user-select: none;

    &:before {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      background: ${props => props.theme.form.input.background};
      border-radius: ${props => props.theme.form.checkbox.borderRadius};
      border: ${props => props.theme.form.checkbox.border};
      left: -40px;
      top: 50%;
      transform: translateY(-50%);
    }

    &:after {
      content: '';
      position: absolute;
      left: -36px;
      top: calc(50% - 1px);
      width: 12px;
      height: 7px;
      border-left: 3px solid transparent;
      border-bottom: 3px solid transparent;
      transform: translateY(-50%) rotate(-45deg);
      transition: border ${props => props.theme.form.input.transition};
    }
  }

  > input {
    display: none;

    &:checked {
      + label {
        color: ${props => props.theme.form.checkbox.checkedColor};

        &::before {
          border-color: ${props => props.theme.form.checkbox.checkedColor};
        }

        &::after {
          border-left: 3px solid ${props => props.theme.form.checkbox.checkedColor};
          border-bottom: 3px solid ${props => props.theme.form.checkbox.checkedColor};
        }
      }
    }
  }
`;

export default Checkbox;
