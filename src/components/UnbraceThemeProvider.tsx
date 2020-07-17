import merge from 'lodash/merge';
import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { componentTheme, baseTheme as originalBaseTheme, DefaultTheme } from '../theme';

type Props = {
  children: React.ReactElement;
  customTheme?: object;
  customBaseTheme?: Partial<DefaultTheme>;
};

const UnbraceThemeProvider: React.FunctionComponent<Props> = ({ children, customTheme, customBaseTheme }: Props) => {
  const baseTheme = customBaseTheme ? merge(originalBaseTheme, customBaseTheme) : originalBaseTheme;
  const theme = customTheme ? merge(componentTheme(baseTheme), customTheme) : componentTheme(baseTheme);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default UnbraceThemeProvider;
