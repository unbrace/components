import * as React from 'react';
import styled from 'styled-components';
import { IconButton, Close } from '..';

const HeaderLayout = styled.header`
  border-bottom: 1px solid ${props => props.theme.drawer.border.header};
  display: flex;
  justify-content: space-between;
  padding: ${props => props.theme.drawer.padding.header};
`;

type Props = {
  closeable?: boolean;
  toggleDrawerCallback?: () => void;
  children: React.ReactNode | React.ReactNode[];
};

const DrawerHeader: React.FC<Props> = ({ closeable, toggleDrawerCallback, children }: Props) => (
  <HeaderLayout>
    {closeable && (
      <IconButton onClick={toggleDrawerCallback}>
        <Close />
      </IconButton>
    )}
    {children}
  </HeaderLayout>
);

export default DrawerHeader;
