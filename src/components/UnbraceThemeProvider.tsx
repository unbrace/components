import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import merge = require('lodash.merge');
import { componentTheme } from '../theme';

type Props = {
  children: React.ReactElement;
  customTheme?: object;
};

const UnbraceThemeProvider: React.FunctionComponent<Props> = ({ children, customTheme }: Props) => {
  const theme = customTheme ? merge(customTheme, componentTheme) : componentTheme;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default UnbraceThemeProvider;
