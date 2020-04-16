import * as React from 'react';
import styled from 'styled-components';
import Checkbox from './Checkbox';
import { ErrorText } from './ErrorText';
import { FieldContainer } from './FieldContainer';
import { Label } from './Label';
import { HTMLProps } from 'react';

export const TYPE_CHECKBOX = 'checkbox';
export const TYPE_EMAIL = 'email';
export const TYPE_NUMBER = 'number';
export const TYPE_PASSWORD = 'password';
export const TYPE_TEXT = 'text';

export type InputProps = {
  error?: string;
  errorAsBlock?: boolean;
  name: string;
  noLabel?: boolean;
} & Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'ref'> &
  Omit<HTMLProps<HTMLInputElement>, 'as'>;

// eslint-disable-next-line react/display-name
const InputField: React.FunctionComponent<InputProps> = React.forwardRef((props: InputProps, ref: React.Ref<any>) => {
  const { error, errorAsBlock, label, name, noLabel } = props;
  if (props.type === TYPE_CHECKBOX) {
    return <Checkbox name={props.name} error={props.error} {...props} />;
  }

  return (
    <FieldContainer>
      {!noLabel && <Label htmlFor={name}>{label || name}</Label>}
      <Input {...props} hasError={Boolean(error)} id={name} ref={ref} />
      {error && <ErrorText block={errorAsBlock}>{error}</ErrorText>}
    </FieldContainer>
  );
});

export const Input = styled.input<{ hasError?: boolean }>`
  background: ${props => props.theme.form.background.main};
  border-radius: ${props => props.theme.form.borderRadius.input};
  border: ${props => (!props.hasError ? props.theme.form.border.input.main : props.theme.form.border.input.error)};
  box-shadow: ${props => props.theme.form.boxShadow.main};
  color: ${props => props.theme.form.color.input.main};
  margin: ${props => props.theme.form.margin.main};
  padding: ${props => props.theme.form.padding.main};
  transition: box-shadow 0.15s ease-in, border 0.15s ease-in;
  width: 100%;
  font-size: 100%;

  &::placeholder {
    color: ${props => props.theme.form.color.input.placeholder};
  }

  &:focus {
    border: ${props => (!props.hasError ? props.theme.form.border.input.focus : props.theme.form.border.input.error)};
    box-shadow: ${props =>
      !props.hasError ? props.theme.form.boxShadow.focus : props.theme.form.boxShadow.focusError};
    outline: none;
  }

  &[disabled] {
    background: ${props => props.theme.form.background.disabled};
    cursor: not-allowed;
  }

  ${props =>
    props.type === 'checkbox' &&
    `
    box-shadow: none;
    width: auto;
    display: flex;
    align-self: flex-start;
  `};
`;

export default InputField;
