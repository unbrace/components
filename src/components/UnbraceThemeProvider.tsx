import merge from 'lodash/merge';
import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { componentTheme } from '../theme';
import GlobalStyle from '../theme/GlobalStyle';

type Props = {
  children: React.ReactElement;
  customTheme?: object;
  withGlobalStyle?: boolean;
};

const UnbraceThemeProvider: React.FunctionComponent<Props> = ({ children, customTheme, withGlobalStyle }: Props) => {
  const theme = customTheme ? merge(componentTheme, customTheme) : componentTheme;

  return (
    <ThemeProvider theme={theme}>
      {withGlobalStyle && <GlobalStyle />}
      {children}
    </ThemeProvider>
  );
};

export default UnbraceThemeProvider;
