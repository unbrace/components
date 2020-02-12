import { DefaultTheme } from '..';

const getButtonTheme = (theme: DefaultTheme) => ({
  background: {
    main: {
      danger: theme.palette.danger.shade5,
      neutral: theme.palette.neutral.shade3,
      outline: 'transparent',
      primary: theme.palette.primary.shade5,
      secondary: theme.palette.secondary.shade5,
      success: theme.palette.success.shade5,
      tertiary: 'none',
    },
    hover: {
      main: {
        danger: theme.palette.danger.shade6,
        neutral: theme.palette.neutral.shade4,
        primary: theme.palette.primary.shade6,
        secondary: theme.palette.secondary.shade6,
        success: theme.palette.success.shade6,
        tertiary: theme.palette.neutral.shade2,
      },
      outline: {
        danger: theme.palette.danger.shade1,
        neutral: theme.palette.neutral.shade1,
        primary: theme.palette.primary.shade1,
        secondary: theme.palette.secondary.shade1,
        success: theme.palette.success.shade1,
        tertiary: theme.palette.neutral.shade1,
      },
    },
  },
  borderRadius: {
    main: '5px',
  },
  borderWidth: {
    outline: '1px',
  },
  boxShadow: {
    danger: `0px 1px 3px rgba(0, 0, 0, 0.3), inset 0px 1px 1px ${theme.palette.danger.shade3}`,
    neutral: `0px 1px 3px rgba(0, 0, 0, 0.3), inset 0px 1px 1px ${theme.palette.neutral.shade3}`,
    primary: `0px 1px 3px rgba(0, 0, 0, 0.3), inset 0px 1px 1px ${theme.palette.primary.shade3}`,
    secondary: `0px 1px 3px rgba(0, 0, 0, 0.3), inset 0px 1px 1px ${theme.palette.secondary.shade1}`,
    success: `0px 1px 3px rgba(0, 0, 0, 0.3), inset 0px 1px 1px ${theme.palette.success.shade3}`,
  },
  color: {
    danger: theme.palette.danger.shade1,
    neutral: theme.palette.neutral.shade7,
    primary: theme.palette.primary.shade1,
    secondary: theme.palette.secondary.shade1,
    success: theme.palette.success.shade1,
    tertiary: theme.palette.neutral.shade5,
  },
  fontSize: {
    main: theme.typography.fontSize.regular,
  },
  fontWeight: {
    main: 500,
    outline: 400,
  },
  padding: {
    main: '12px 25px',
  },
  transition: `all ${theme.globals.transition.main}`,
});

export default getButtonTheme;
