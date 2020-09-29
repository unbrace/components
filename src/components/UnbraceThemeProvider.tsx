import merge from 'lodash/merge';
import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { componentTheme, baseTheme as originalBaseTheme, DefaultTheme } from '../theme';
import GlobalStyle from '../theme/GlobalStyle';

type Props = {
  children: React.ReactElement;
  customTheme?: object;
  customBaseTheme?: Partial<DefaultTheme>;
  withGlobalStyle?: boolean;
};

const UnbraceThemeProvider: React.FunctionComponent<Props> = ({
  children,
  customTheme,
  customBaseTheme,
  withGlobalStyle,
}: Props) => {
  const baseTheme = customBaseTheme ? merge(originalBaseTheme, customBaseTheme) : originalBaseTheme;
  const theme = customTheme ? merge(componentTheme(baseTheme), customTheme) : componentTheme(baseTheme);

  return (
    <ThemeProvider theme={theme}>
      {withGlobalStyle && <GlobalStyle />}
      {children}
    </ThemeProvider>
  );
};

export default UnbraceThemeProvider;
