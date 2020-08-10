import styled, { css } from 'styled-components';
import { animations } from '../../theme/keyframes';
import { ModalStyleProps } from './ModalContainer';

export const ModalWrapper = styled('section')<ModalStyleProps>`
  animation: ${animations.flyIn} 0.3s ease-out;
  background-clip: padding-box;
  background-color: ${props => props.theme.modal.background};
  border-radius: ${props => props.theme.modal.borderRadius};
  box-shadow: ${props => props.theme.modal.boxShadow};
  color: ${props => props.theme.modal.color};
  max-height: 94vh;
  max-width: 90vw;
  outline: 0;
  position: relative;
  width: ${props => props.theme.modal.defaultWidth};

  ${props => props.size === 'small' && 'width: 300px;'};
  ${props => props.size === 'medium' && 'width: 700px;'};
  ${props => props.size === 'large' && 'width: 900px;'};
  ${props =>
    props.position &&
    css`
      position: fixed;
      top: ${props.position.top}px;
      left: ${props.position.left}px;
    `};
`;

export const ModalContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  max-height: 90vh;
`;

export const ModalOverlay = styled('div')`
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

export const ModalHeader = styled.header`
  align-items: center;
  border-radius: ${props => props.theme.modal.borderRadius} ${props => props.theme.modal.borderRadius} 0 0;
  display: flex;
  flex-direction: column;
  flex-flow: wrap;
  min-height: 50px;
  padding: ${props => props.theme.modal.padding};
  padding-bottom: 0px;

  > h1 {
    font-size: ${props => props.theme.modal.header.fontSize};
    font-weight: ${props => props.theme.modal.header.fontWeight};
    width: 100%;
  }

  > h5 {
    margin-top: 5px;
    color: ${props => props.theme.palette.neutral.shade5};
    font-size: ${props => props.theme.modal.header.fontSizeSubHeader};
    max-width: 700px;
  }

  > h3 {
    color: ${props => props.theme.palette.neutral.shade5};
    font-size: ${props => props.theme.modal.header.fontSizeSubCode};
    max-width: 700px;
  }
`;

export const ModalBody = styled.section`
  max-height: 65vh;
  overflow-y: auto;
  padding: ${props => props.theme.modal.padding};
  white-space: pre-wrap;

  &.visibleOverflow {
    overflow-y: visible;
  }

  p {
    color: ${props => props.theme.palette.neutral.shade5};
    font-size: 14px;
    font-weight: 200;
    margin: 0 0 20px;
  }
`;

export const ModalFooter = styled.footer`
  background-color: ${props => props.theme.modal.footer.background};
  border-radius: 0 0 ${props => props.theme.modal.borderRadius} ${props => props.theme.modal.borderRadius};
  display: flex;
  justify-content: flex-end;
  padding: ${props => props.theme.modal.padding};

  > * {
    margin-left: 10px;
    align-self: center;
  }
`;
