import styled from 'styled-components';

export type Props = {
  open: boolean;
};

export const Drawer = styled.aside<Props>`
  background: ${props => props.theme.drawer.background.main};
  border-right: ${props => props.theme.drawer.border.main};
  bottom: 0;
  left: ${props => (props.open ? 0 : props.theme.sidebar.width.open)};
  padding: ${props => props.theme.drawer.padding.main};
  position: fixed;
  top: 0;
  transition: ${props => props.theme.drawer.transition.main};
  width: ${props => props.theme.sidebar.width.open};
  z-index: ${props => props.theme.sidebar.zIndex.main};
`;
