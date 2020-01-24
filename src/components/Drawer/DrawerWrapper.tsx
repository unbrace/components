import styled, { css } from 'styled-components';
import { DrawerWrapperProps } from './Drawer';

export const DrawerWrapper = styled.aside<DrawerWrapperProps>`
  background: ${props => props.theme.drawer.background.main};
  border-right: ${props => props.theme.drawer.border.main};
  bottom: 0;
  padding: ${props => props.theme.drawer.padding.main};
  position: fixed;
  top: 0;
  width: ${props => props.theme.drawer.width.open};
  z-index: ${props => props.theme.drawer.zIndex.main};

  ${props =>
    props.position === 'left' &&
    css`
      left: ${props.open ? 0 : `-${props.theme.drawer.width.open}`};
      box-shadow: ${props.open ? props.theme.drawer.boxShadow.left : 'none'};
      border-right: ${props.theme.drawer.border.main};
      transition: ${props.theme.drawer.transition.left};
    `}

  ${props =>
    props.position === 'right' &&
    css`
      right: ${props.open ? 0 : `-${props.theme.drawer.width.open}`};
      box-shadow: ${props.open ? props.theme.drawer.boxShadow.right : 'none'};
      border-left: ${props.theme.drawer.border.main};
      transition: ${props.theme.drawer.transition.right};
    `}
`;
