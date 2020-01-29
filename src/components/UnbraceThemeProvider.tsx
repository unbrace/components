import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { componentTheme } from '../theme';
import merge from 'lodash/merge';

type Props = {
  children: React.ReactElement;
  customTheme?: object;
};

const UnbraceThemeProvider: React.FunctionComponent<Props> = ({ children, customTheme }: Props) => {
  const theme = customTheme ? merge(componentTheme, customTheme) : componentTheme;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default UnbraceThemeProvider;
