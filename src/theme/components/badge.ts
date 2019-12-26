import { DefaultTheme } from '..';

export const getBadgeTheme = (theme: DefaultTheme) => ({
  background: {
    danger: theme.palette.danger.shade1,
    primary: theme.palette.primary.shade1,
    secondary: theme.palette.neutral.shade1,
    success: theme.palette.success.shade1,
    warning: theme.palette.warning.shade1,
  },
  color: {
    danger: theme.palette.danger.shade4,
    primary: theme.palette.primary.shade5,
    secondary: theme.palette.neutral.shade6,
    success: theme.palette.success.shade5,
    warning: theme.palette.warning.shade9,
  },
  padding: {
    main: '6px 23px',
    large: '10px 20px',
    small: '4px 14px',
  },
  fontSize: {
    main: '13px',
    xsmall: '10px',
  },
  borderRadius: {
    main: '25px',
  },
  fontWeight: {
    main: 500,
  },
});
