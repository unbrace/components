import * as React from 'react';
import styled, { css } from 'styled-components';

export type ButtonProps = {
  block?: boolean;
  children?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'tertiary' | 'danger';
  isDisabled?: boolean;
  isLoading?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  type?: 'button' | 'reset' | 'submit' | undefined;
};

const Button = styled.button<ButtonProps>`
  background: ${props => props.theme.button.background.main[`${props.color}`]};
  border-radius: ${props => props.theme.button.borderRadius.main};
  border: none;
  box-shadow: ${props => props.theme.button.boxShadow[`${props.color}`]};
  color: ${props => props.theme.button.color[`${props.color}`]};
  cursor: pointer;
  display: flex;
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => props.theme.button.fontSize.main};
  font-weight: 500;
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
    `padding-right: 50px
     opacity: 0.7;
     pointer-events: none;

     > svg#loader {
       stroke: ${props.theme.palette.neutral.shade0};
     }
    `};

  &:active:hover,
  &:hover {
    background: ${props => props.theme.button.background.hover[`${props.color}`]};
  }
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
