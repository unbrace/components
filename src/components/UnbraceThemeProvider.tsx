import * as React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import merge = require('lodash.merge');
import { componentTheme } from '../theme';

type Props = {
  children: React.ReactElement;
  customTheme?: DefaultTheme;
};

const UnbraceThemeProvider: React.FunctionComponent<Props> = ({ children, customTheme }: Props) => {
  const theme = customTheme ? merge(customTheme, componentTheme) : componentTheme;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default UnbraceThemeProvider;
