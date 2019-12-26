import { DefaultTheme } from '..';

const getButtonTheme = (theme: DefaultTheme) => ({
  background: {
    danger: theme.palette.danger.shade5,
    dangerHover: theme.palette.danger.shade6,
    primary: theme.palette.secondary.shade5,
    primaryHover: theme.palette.secondary.shade6,
    secondary: theme.palette.neutral.shade2,
    secondaryHover: theme.palette.neutral.shade3,
    tertiary: 'none',
    tertiaryHover: theme.palette.neutral.shade2,
  },
  borderRadius: '5px',
  boxShadow: {
    danger: `0px 1px 3px rgba(0, 0, 0, 0.3), inset 0px 1px 1px ${theme.palette.danger.shade3}`,
    primary: `0px 1px 3px rgba(0, 0, 0, 0.3), inset 0px 1px 1px ${theme.palette.secondary.shade3}`,
    secondary: `0px 1px 3px rgba(0, 0, 0, 0.3), inset 0px 1px 1px ${theme.palette.neutral.shade1}`,
  },
  color: {
    danger: theme.palette.danger.shade1,
    primary: theme.palette.secondary.shade1,
    secondary: theme.palette.neutral.shade6,
    tertiary: theme.palette.secondary.shade5,
  },
  fontSize: {
    main: theme.typography.fontSize.regular,
  },
  padding: '12px 25px',
  transition: `all ${theme.globals.transition}`,
});

export default getButtonTheme;
