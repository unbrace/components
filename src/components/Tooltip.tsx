import styled from 'styled-components';
import { animations } from '../theme/keyframes';

type Props = {
  leftAligned?: boolean;
};

const Tooltip = styled.span<Props>`
  animation: ${animations.fadeIn} 0.1s ease-in forwards;
  background: ${props => props.theme.iconButton.tooltip.background};
  border-radius: ${props => props.theme.iconButton.tooltip.borderRadius};
  box-shadow: ${props => props.theme.iconButton.tooltip.boxShadow};
  color: ${props => props.theme.iconButton.tooltip.color};
  font-size: ${props => props.theme.iconButton.tooltip.fontSize};
  opacity: 0;
  padding: ${props => props.theme.iconButton.tooltip.padding};
  position: fixed;
  transform: ${props => (props.leftAligned ? 'none' : 'translateX(-50%)')};
  z-index: 100;

  > li {
    list-style-type: none;
  }
`;

export default Tooltip;
