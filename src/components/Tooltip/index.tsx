import styled from 'styled-components';
import { animations } from '../../theme/keyframes';

type Props = {
  Alignment?: 'left' | 'right';
};

const Tooltip = styled.span<Props>`
  animation: ${animations.fadeIn} 0.1s ease-in forwards;
  background: ${props => props.theme.tooltip.background};
  border-radius: ${props => props.theme.tooltip.borderRadius};
  box-shadow: ${props => props.theme.tooltip.boxShadow};
  color: ${props => props.theme.tooltip.color};
  font-size: ${props => props.theme.tooltip.fontSize};
  opacity: 0;
  padding: ${props => props.theme.tooltip.padding};
  position: fixed;
  transform: ${props =>
    props.Alignment === 'left' ? 'translateX(-50%)' : props.Alignment === 'right' ? 'translateX(50%)' : 'none'};
  z-index: 100;

  > li {
    list-style-type: none;
  }
`;

export default Tooltip;
