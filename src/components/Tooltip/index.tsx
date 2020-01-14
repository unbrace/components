import styled from 'styled-components';
import { animations } from '../../theme/keyframes';

type Props = {
  alignment?: 'left' | 'right';
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
  transform: ${props =>
    props.alignment === 'left' ? 'translateX(-50%)' : props.alignment === 'right' ? 'translateX(50%)' : 'none'};
  z-index: 100;

  > li {
    list-style-type: none;
  }
`;

export default Tooltip;
