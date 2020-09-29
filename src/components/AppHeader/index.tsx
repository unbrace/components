import * as React from 'react';
import { Header, LeftContent, RightContent } from './styles';

type Props = {
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
};

const AppHeader: React.FunctionComponent<Props> = ({ leftContent, rightContent }) => (
  <Header>
    {leftContent && <LeftContent>{leftContent}</LeftContent>}
    {rightContent && <RightContent>{rightContent}</RightContent>}
  </Header>
);

export default AppHeader;
