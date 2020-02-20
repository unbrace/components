import styled, { css } from 'styled-components';
import { animations } from '../../theme/keyframes';

type Props = {
  isLeftAligned?: boolean;
  positionAbsolute?: boolean;
  top: number;
  left: number;
};

export const StyledTooltip = styled.span<Props>`
  animation: ${animations.fadeIn} 0.1s ease-in forwards;
  background: ${props => props.theme.tooltip.background.main};
  border-radius: ${props => props.theme.tooltip.borderRadius.main};
  box-shadow: ${props => props.theme.tooltip.boxShadow.main};
  color: ${props => props.theme.tooltip.color.main};
  font-size: ${props => props.theme.tooltip.fontSize.main};
  left: ${props => props.left}px;
  opacity: 0;
  padding: ${props => props.theme.tooltip.padding.main};
  position: ${props => (props.positionAbsolute ? 'absolute' : 'fixed')};
  top: ${props => props.top}px;
  transform: ${props => (props.isLeftAligned ? 'none' : 'translateX(-50%)')};
  z-index: 100;

  > li {
    list-style-type: none;
  }

  ${props =>
    props.positionAbsolute &&
    css`
      white-space: nowrap;
    `}
`;
