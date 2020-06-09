import * as React from 'react';
import SidebarWrapper from './SidebarWrapper';

type Props = {
  children: JSX.Element | JSX.Element[] | undefined;
};

const Sidebar: React.FC<Props> = ({ children }) => {
  return <SidebarWrapper>{children}</SidebarWrapper>;
};

export default Sidebar;
