import DateFnsUtils from '@date-io/date-fns';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import * as React from 'react';
import { baseTheme } from '../theme';

const defaultMaterialTheme = createMuiTheme({
  palette: {
    primary: {
      light: baseTheme.palette.primary.shade4,
      main: baseTheme.palette.primary.shade5,
      dark: baseTheme.palette.primary.shade6,
      contrastText: '#fff',
    },
    error: {
      light: baseTheme.palette.danger.shade3,
      main: baseTheme.palette.danger.shade4,
      dark: baseTheme.palette.danger.shade5,
      contrastText: '#fff',
    },
  },
});

type Props = {
  dateUtils?: any;
  children: React.ReactElement;
};

const MuiThemeProvider: React.FC<Props> = ({ dateUtils, children }: Props) => (
  <ThemeProvider theme={defaultMaterialTheme}>
    <MuiPickersUtilsProvider utils={dateUtils || DateFnsUtils}>{children}</MuiPickersUtilsProvider>
  </ThemeProvider>
);

export default MuiThemeProvider;
