import * as React from 'react';
import styled, { css } from 'styled-components';
import { animations } from '../../theme/keyframes';
import { Tooltip } from '..';

type Props = {
  isDisabled?: boolean;
  size?: 'small' | 'main' | 'large';
  tooltip?: string;
  tooltipPositionUp?: boolean;
  isLoading?: boolean;
  positionAbsolute?: boolean;
  disabledTooltip?: string;
} & React.HTMLAttributes<HTMLButtonElement>;

const EnhancedIconButton: React.FC<Props> = ({
  children,
  tooltip,
  positionAbsolute,
  onClick,
  disabledTooltip,
  isDisabled,
  ...other
}: Props) => {
  return (
    <Tooltip
      content={(isDisabled && disabledTooltip) || tooltip}
      positionAbsolute={positionAbsolute}
      isActive={Boolean(tooltip)}
    >
      <IconButton {...other} isDisabled={isDisabled} type="button" onClick={!isDisabled ? onClick : undefined}>
        {children}
      </IconButton>
    </Tooltip>
  );
};

const IconButton = styled('button')<Props>`
  align-items: center;
  background: transparent;
  border-radius: 50%;
  border: none;
  color: ${props => props.theme.iconButton.color.normal};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: ${props => props.theme.iconButton.size.button[props.size ? props.size : 'main']};
  justify-content: space-around;
  margin: ${props => props.theme.iconButton.margin.main};
  padding: 0;
  transition: color, background 0.25s ease-out;
  position: relative;
  width: ${props => props.theme.iconButton.size.button[props.size ? props.size : 'main']};
  ${props => props.isDisabled && 'cursor: not-allowed'};

  &:hover {
    color: ${props => props.theme.iconButton.color.hover};
    background: ${props => (props.isDisabled ? 'transparent' : props.theme.iconButton.background.hover)};
  }

  > span > svg,
  > span > span > svg {
    width: ${props => props.theme.iconButton.size.icon[props.size ? props.size : 'main']};
    height: ${props => props.theme.iconButton.size.icon[props.size ? props.size : 'main']};
    fill: ${props =>
      props.isDisabled ? props.theme.iconButton.color.isDisabled : props.theme.iconButton.color.normal};
  }

  ${props =>
    props.isLoading &&
    css`
      position: relative;

      &::after {
        content: '';
        position: absolute;
        top: -2px;
        bottom: -2px;
        right: -2px;
        left: -2px;
        border-radius: 50%;
        border: 2px solid transparent;
        border-right: 2px solid ${props.theme.iconButton.color.normal};
        opacity: 0;
        animation: ${animations.rotation} 1.5s ease-in-out infinite, ${animations.fadeIn} 0.3s ease-in forwards;
      }
    `}
`;

export default EnhancedIconButton;
