import styled, { css } from 'styled-components';
import { animations } from '../../theme/keyframes';

type Props = {
  position?: 'top' | 'bottom' | 'left' | 'right';
  positionAbsolute?: boolean;
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
};

export const StyledTooltip = styled.span<Props>`
  animation: ${animations.fadeIn} 0.1s ease-in forwards;
  background: ${props => props.theme.tooltip.background.main};
  border-radius: ${props => props.theme.tooltip.borderRadius.main};
  box-shadow: ${props => props.theme.tooltip.boxShadow.main};
  color: ${props => props.theme.tooltip.color.main};
  font-size: ${props => props.theme.tooltip.fontSize.main};
  opacity: 0;
  padding: ${props => props.theme.tooltip.padding.main};
  position: ${props => (props.positionAbsolute ? 'absolute' : 'fixed')};
  z-index: 100;
  
  ${props =>
    props.left &&
    css`
      left: ${props.left}px;
    `}
  ${props =>
    props.top &&
    css`
      top: ${props.top}px;
    `}
  ${props =>
    props.right &&
    css`
      right: ${props.right}px;
    `}
  ${props =>
    props.bottom &&
    css`
      bottom: ${props.bottom}px;
    `}

  ${props =>
    props.position === 'left' &&
    css`
      transform: translateX(-100%) translateY(-50%);
    `}
  ${props =>
    props.position === 'right' &&
    css`
      transform: translateY(-50%);
    `}
  ${props =>
    props.position === 'top' &&
    css`
      transform: translateX(-50%) translateY(-100%);
    `}
  ${props =>
    props.position === 'bottom' &&
    css`
      transform: translateX(-50%);
      ${props.positionAbsolute &&
        css`
          transform: translateX(-50%) translateY(100%);
        `}
    `}

  > li {
    list-style-type: none;
  }

  ${props =>
    props.positionAbsolute &&
    css`
      white-space: nowrap;
    `}
`;
