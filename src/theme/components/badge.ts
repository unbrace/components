import { DefaultTheme } from '..';

export const getBadgeTheme = (theme: DefaultTheme) => ({
  background: {
    danger: `background-color: ${theme.palette.danger.shade1};`,
    primary: `background-color: ${theme.palette.primary.shade1};`,
    secondary: `background-color: ${theme.palette.neutral.shade1};`,
    success: `background-color: ${theme.palette.success.shade1};`,
    warning: `background-color: ${theme.palette.warning.shade1};`,
  },
  color: {
    danger: `color: ${theme.palette.danger.shade4};`,
    primary: `color: ${theme.palette.primary.shade5};`,
    secondary: `color: ${theme.palette.neutral.shade6};`,
    success: `color: ${theme.palette.success.shade5};`,
    warning: `color: ${theme.palette.warning.shade9};`,
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
