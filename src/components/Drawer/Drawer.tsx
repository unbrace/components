import * as React from 'react';
import DrawerHeader from './DrawerHeader';
import { DrawerWrapper } from './DrawerWrapper';

export type DrawerHeaderProps = {
  closeable?: boolean;
  onCloseDrawer?: () => void;
  title?: string;
  closeTooltip?: string;
};

export type DrawerWrapperProps = {
  open: boolean;
  position?: 'left' | 'right';
};

type Props = {
  children: React.ReactNode | React.ReactNode[];
} & DrawerHeaderProps &
  DrawerWrapperProps;

const Drawer: React.FC<Props> = ({
  open,
  closeable,
  title,
  onCloseDrawer,
  closeTooltip,
  children,
  position = 'left',
}: Props) => {
  return (
    <DrawerWrapper open={open} position={position}>
      <DrawerHeader {...{ closeable, title, onCloseDrawer, closeTooltip }}></DrawerHeader>
      {children}
    </DrawerWrapper>
  );
};

export default Drawer;
