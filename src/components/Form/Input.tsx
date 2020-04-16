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
  background: ${props => props.theme.form.input.background};
  border-radius: ${props => props.theme.form.input.borderRadius};
  border: ${props => (!props.hasError ? props.theme.form.input.border : props.theme.form.input.borderError)};
  box-shadow: ${props => props.theme.form.input.boxShadow};
  color: ${props => props.theme.form.input.color};
  margin: ${props => props.theme.form.input.margin};
  padding: ${props => props.theme.form.input.padding};
  transition: box-shadow 0.15s ease-in, border 0.15s ease-in;
  width: 100%;

  &::placeholder {
    color: ${props => props.theme.form.input.colorPlaceholder};
  }

  &:focus {
    border: ${props => (!props.hasError ? props.theme.form.input.borderFocus : props.theme.form.input.borderError)};
    box-shadow: ${props =>
      !props.hasError ? props.theme.form.input.boxShadowFocus : props.theme.form.input.boxShadowFocusError};
    outline: none;
  }

  &[disabled] {
    background: ${props => props.theme.form.input.backgroundDisabled};
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
