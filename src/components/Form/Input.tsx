import * as React from 'react';
import styled from 'styled-components';
import Checkbox from './Checkbox';
import { ErrorText } from './ErrorText';
import { FieldContainer } from './FieldContainer';
import { Label } from './Label';
import { HTMLProps } from 'react';
import { Close } from '../icons';

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
  inlineLabel?: boolean;
  onClear?: (() => void) | ((e: React.MouseEvent<Element>) => void);
  isClearable?: boolean;
  addonRight?: React.ReactNode;
  addonWidth?: number;
} & Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'ref'> &
  Omit<HTMLProps<HTMLInputElement>, 'as'>;

// eslint-disable-next-line react/display-name
const InputField: React.FunctionComponent<InputProps> = React.forwardRef(
  (props: InputProps, ref: React.Ref<HTMLInputElement>) => {
    const { error, errorAsBlock, label, name, noLabel, inlineLabel, isClearable } = props;
    const { onClear, ...rest } = props;
    if (props.type === TYPE_CHECKBOX) {
      return <Checkbox {...props} />;
    }

    return (
      <FieldContainer>
        {!noLabel && (
          <Label inlineLabel={inlineLabel} htmlFor={name}>
            {label || name}
          </Label>
        )}
        <RelativeContainer>
          <Input
            {...rest}
            addonWidth={props.addonWidth}
            inlineLabel={inlineLabel}
            hasError={Boolean(error)}
            id={name}
            ref={ref}
          />
          {isClearable && onClear && props.value && (
            <ClearButton className="input__close" moveToRightAmount={props.addonWidth} onClick={onClear} />
          )}
          {props.addonRight && props.addonRight}
        </RelativeContainer>
        {error && <ErrorText block={errorAsBlock}>{error}</ErrorText>}
      </FieldContainer>
    );
  },
);

export const Input = styled.input<{
  hasError?: boolean;
  inlineLabel?: boolean;
  isClearable?: boolean;
  addonWidth?: number;
}>`
  background: ${props => props.theme.form.background.main};
  border-radius: ${props => props.theme.form.borderRadius.input};
  border: ${props => (!props.hasError ? props.theme.form.border.input.main : props.theme.form.border.input.error)};
  box-shadow: ${props => props.theme.form.boxShadow.main};
  color: ${props => props.theme.form.color.input.main};
  margin: ${props => props.theme.form.margin.main};
  padding: ${props => props.theme.form.padding.main};
  height: ${props => props.theme.form.height.input};
  text-align: ${props => (props.inlineLabel ? 'right' : 'left')};
  transition: box-shadow 0.15s ease-in, border 0.15s ease-in;
  width: 100%;
  font-size: 100%;
  ${props => props.isClearable && props.inlineLabel && 'padding-right: 32px'};
  ${props => props.isClearable && props.inlineLabel && props.addonWidth && `padding-right: ${props.addonWidth + 32}px`};
  ${props =>
    !props.isClearable && props.inlineLabel && props.addonWidth && `padding-right: ${props.addonWidth + 15}px`};

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

const ClearButton = styled(Close)<{ moveToRightAmount?: number }>`
  &.input__close {
    &&& {
      position: absolute;
      top: 20px;
      right: ${props => (props.moveToRightAmount ? `${props.moveToRightAmount + 10}px` : '10px')};
      cursor: pointer;

      > svg {
        max-width: 17px;
        max-height: 17px;
        fill: ${props => props.theme.palette.neutral.shade4};
      }

      &:hover {
        > svg {
          fill: ${props => props.theme.palette.neutral.shade5};
        }
      }
    }
  }
`;

const RelativeContainer = styled.div`
  position: relative;
`;

export default InputField;
