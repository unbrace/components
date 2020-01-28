import { DefaultTheme } from '..';

const getPillTheme = (theme: DefaultTheme) => ({
  background: {
    danger: theme.palette.danger.shade5,
    neutral: theme.palette.neutral.shade7,
    primary: theme.palette.primary.shade5,
    secondary: theme.palette.secondary.shade5,
    success: theme.palette.success.shade5,
    warning: theme.palette.warning.shade7,
  },
  color: {
    danger: theme.palette.danger.shade1,
    neutral: theme.palette.neutral.shade1,
    primary: theme.palette.primary.shade1,
    secondary: theme.palette.secondary.shade1,
    success: theme.palette.success.shade1,
    warning: theme.palette.warning.shade1,
  },
  fontSize: {
    m: theme.typography.fontSize.regular,
    s: theme.typography.fontSize.small_5,
    xs: theme.typography.fontSize.small_4,
  },
  padding: {
    m: '2px 8px',
    s: '1px 5px',
    xs: '0px 4px',
  },
});

export default getPillTheme;
