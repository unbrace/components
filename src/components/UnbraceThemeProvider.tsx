import merge from 'lodash/merge';
import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { componentTheme } from '../theme';
import MuiThemeProvider from './MuiThemeProvider';

type Props = {
  children: React.ReactElement;
  customTheme?: object;
  dateUtils?: any;
};

const UnbraceThemeProvider: React.FunctionComponent<Props> = ({ children, customTheme, dateUtils }: Props) => {
  const theme = customTheme ? merge(componentTheme, customTheme) : componentTheme;

  return (
    <ThemeProvider theme={theme}>
      <MuiThemeProvider dateUtils={dateUtils}>{children}</MuiThemeProvider>
    </ThemeProvider>
  );
};

export default UnbraceThemeProvider;
