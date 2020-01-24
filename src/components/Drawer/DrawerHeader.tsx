import * as React from 'react';
import styled from 'styled-components';
import { IconButton, Close } from '..';
import { DrawerHeaderProps } from './Drawer';
import { Heading } from '..';

const HeaderLayout = styled.header`
  border-bottom: 1px solid ${props => props.theme.drawer.border.header};
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  padding: ${props => props.theme.drawer.padding.header};
  height: ${props => (props.title ? 'auto' : '8px')};
  margin-bottom: ${props => (props.title ? '32px' : '0px')};
`;

const DrawerHeader: React.FC<DrawerHeaderProps> = ({
  closeable,
  onCloseDrawer,
  title,
  closeTooltip,
}: DrawerHeaderProps) => (
  <HeaderLayout title={title}>
    {closeable && (
      <IconButton onClick={onCloseDrawer} tooltip={closeTooltip}>
        <Close />
      </IconButton>
    )}
    {title && (
      <Heading asTag="h3" size="m">
        {title}
      </Heading>
    )}
  </HeaderLayout>
);

export default DrawerHeader;
