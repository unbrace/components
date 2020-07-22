import styled, { css } from 'styled-components';
import { animations } from '../../theme/keyframes';

type Props = {
  position?: 'top' | 'bottom' | 'left' | 'right' | 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  positionAbsolute?: boolean;
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  boxed?: boolean;
};

export const StyledTooltip = styled.span<Props>`
  animation: ${animations.fadeIn} 0.1s ease-in forwards;
  background: ${props => props.theme.tooltip.background.main};
  color: ${props => props.theme.tooltip.color.main};
  border-radius: ${props => props.theme.tooltip.borderRadius.main};
  box-shadow: ${props => props.theme.tooltip.boxShadow.main};
  font-size: ${props => props.theme.tooltip.fontSize.main};
  opacity: 0;
  padding: ${props => props.theme.tooltip.padding.main};
  position: ${props => (props.positionAbsolute ? 'absolute' : 'fixed')};
  z-index: 100;
  white-space: nowrap;
  
  &&& {
    * {
      color: ${props => props.theme.tooltip.color.main};
      font-size: ${props => props.theme.tooltip.fontSize.main};
    }
  }
  
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
    props.position === 'top-left' &&
    css`
      transform: translateX(-100%) translateY(-100%);
    `}

  ${props =>
    props.position === 'top-right' &&
    css`
      transform: translateY(-100%);
    `}

  ${props =>
    props.position === 'bottom-left' &&
    css`
      transform: translateX(-100%);
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
  ${props =>
    props.boxed &&
    css`
      max-width: ${props.theme.tooltip.maxWidth.boxed};
      white-space: normal;
    `}

  > li {
    list-style-type: none;
  }
`;
