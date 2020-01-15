import styled from 'styled-components';
import { animations } from '../../theme/keyframes';

type Props = {
  isLeftAligned?: boolean;
};

const Tooltip = styled.span<Props>`
  animation: ${animations.fadeIn} 0.1s ease-in forwards;
  background: ${props => props.theme.tooltip.background.main};
  border-radius: ${props => props.theme.tooltip.borderRadius.main};
  box-shadow: ${props => props.theme.tooltip.boxShadow.main};
  color: ${props => props.theme.tooltip.color.main};
  font-size: ${props => props.theme.tooltip.fontSize.main};
  opacity: 0;
  padding: ${props => props.theme.tooltip.padding.main};
  position: fixed;
  transform: ${props => (props.isLeftAligned ? 'none' : 'translateX(-50%)')};
  z-index: 100;

  > li {
    list-style-type: none;
  }
`;

export default Tooltip;
