import * as React from 'react';
import styled, { css } from 'styled-components';

export type ButtonProps = {
  block?: boolean;
  children?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'neutral';
  isDisabled?: boolean;
  isLoading?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  type?: 'button' | 'reset' | 'submit' | undefined;
  variant?: 'outline';
};

const Button = styled.button<ButtonProps>`
  background: ${props => props.theme.button.background.main[props.color || 'primary']};
  border-radius: ${props => props.theme.button.borderRadius.main};
  border: none;
  box-shadow: ${props => props.theme.button.boxShadow[props.color || 'primary']};
  color: ${props => props.theme.button.color[props.color || 'primary']};
  cursor: pointer;
  display: flex;
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => props.theme.button.fontSize.main};
  font-weight: ${props => props.theme.button.fontWeight.main};
  justify-content: center;
  padding: ${props => props.theme.button.padding.main};
  position: relative;
  text-align: center;
  transition: ${props => props.theme.button.transition};

  ${props =>
    !props.isDisabled &&
    css`
      &:focus,
      &:hover {
        transform: translateY(-1px);
      }
    `};

  &:active {
    transform: none;
  }

  ${props => props.block && 'width: 100%;'};
  ${props => props.isDisabled && 'opacity: 0.6; cursor: not-allowed;'};

  ${props =>
    props.isLoading &&
    css`
      padding-right: 50px;
      opacity: 0.7;
      pointer-events: none;

      > svg#loader {
        stroke: ${props.theme.palette.neutral.shade0};
      }
    `};

  &:focus,
  &:active:hover,
  &:hover {
    background: ${props => props.theme.button.background.hover.main[props.color || 'primary']};
  }

  ${props =>
    props.variant === 'outline' &&
    css`
      box-shadow: none;
      background: ${props.theme.button.background.main.outline};
      border: solid ${props.theme.button.borderWidth.outline}
        ${props.theme.button.background.main[props.color || 'primary']};
      color: ${props.theme.button.background.main[props.color || 'primary']};
      font-weight: ${props => props.theme.button.fontWeight.outline};

      &:focus,
      &:active:hover,
      &:hover {
        background: ${props.theme.button.background.hover.outline[props.color || 'primary']};
      }
    `}
`;

const SubmitButton: React.FunctionComponent<ButtonProps> = ({
  children,
  isDisabled,
  isLoading,
  ...other
}: ButtonProps) => (
  <Button isDisabled={isDisabled} isLoading={isLoading} type="submit" {...other}>
    {children}
    {isLoading && (
      <svg
        id="loader"
        width="30"
        height="30"
        viewBox="0 0 44 44"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', right: 10, top: 6 }}
      >
        <g fill="none" fillRule="evenodd" strokeWidth="3">
          <circle cx="22" cy="22" r="1">
            <animate
              attributeName="r"
              begin="0s"
              dur="1.8s"
              values="1; 20"
              calcMode="spline"
              keyTimes="0; 1"
              keySplines="0.165, 0.84, 0.44, 1"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-opacity"
              begin="0s"
              dur="1.8s"
              values="1; 0"
              calcMode="spline"
              keyTimes="0; 1"
              keySplines="0.3, 0.61, 0.355, 1"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="22" cy="22" r="1">
            <animate
              attributeName="r"
              begin="-0.9s"
              dur="1.8s"
              values="1; 20"
              calcMode="spline"
              keyTimes="0; 1"
              keySplines="0.165, 0.84, 0.44, 1"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-opacity"
              begin="-0.9s"
              dur="1.8s"
              values="1; 0"
              calcMode="spline"
              keyTimes="0; 1"
              keySplines="0.3, 0.61, 0.355, 1"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </svg>
    )}
  </Button>
);

export { SubmitButton };

export default Button;
