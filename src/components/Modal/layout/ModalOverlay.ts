import styled from 'styled-components';
import { animations } from '../../../theme/keyframes';

const ModalOverlay = styled('div')`
  align-items: center;
  animation: ${animations.fadeIn} 0.15s ease-in;
  background-color: rgba(58, 58, 58, 0.3);
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 2000;
`;

export default ModalOverlay;
