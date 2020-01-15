import { DefaultTheme } from '..';

const getAlertsTheme = (theme: DefaultTheme) => ({
  background: {
    main: theme.palette.neutral.shade0,
    danger: theme.palette.danger.shade1,
    default: theme.palette.primary.shade1,
    success: theme.palette.success.shade1,
    warning: theme.palette.warning.shade1,
  },
  borderRadius: {
    main: theme.globals.borderRadius.main,
  },
  boxShadow: {
    main: '3px 4px 8px rgba(0, 0, 0, 0.05), 2px 1px 20px rgba(0, 0, 0, 0.05)',
  },
  color: {
    danger: theme.palette.danger.shade5,
    default: theme.palette.primary.shade5,
    success: theme.palette.success.shade5,
    warning: theme.palette.warning.shade5,
  },
  positioning: {
    main: {
      left: undefined,
      top: '50px',
      right: '30px',
    },
    mobile: {
      left: '8px',
      top: '50px',
      right: '8px',
    },
  },
});

export default getAlertsTheme;
