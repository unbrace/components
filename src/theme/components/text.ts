import { DefaultTheme } from '..';

const getTextTheme = (theme: DefaultTheme) => ({
  color: {
    heading: {
      danger: theme.palette.danger.shade5,
      neutral: theme.palette.neutral.shade8,
      primary: theme.palette.primary.shade5,
      secondary: theme.palette.secondary.shade5,
      success: theme.palette.success.shade5,
      warning: theme.palette.warning.shade7,
    },
    text: {
      danger: {
        normal: theme.palette.danger.shade5,
        medium: theme.palette.danger.shade4,
        light: theme.palette.danger.shade3,
      },
      neutral: {
        normal: theme.palette.neutral.shade8,
        medium: theme.palette.neutral.shade5,
        light: theme.palette.neutral.shade4,
      },
      primary: {
        normal: theme.palette.primary.shade5,
        medium: theme.palette.primary.shade4,
        light: theme.palette.primary.shade3,
      },
      secondary: {
        normal: theme.palette.secondary.shade6,
        medium: theme.palette.secondary.shade5,
        light: theme.palette.secondary.shade4,
      },
      success: {
        normal: theme.palette.success.shade5,
        medium: theme.palette.success.shade4,
        light: theme.palette.success.shade3,
      },
      warning: {
        normal: theme.palette.warning.shade8,
        medium: theme.palette.warning.shade7,
        light: theme.palette.warning.shade6,
      },
    },
  },
  fontSize: {
    heading: {
      xxl: theme.typography.fontSize.large_4,
      xl: theme.typography.fontSize.large_0,
      l: theme.typography.fontSize.medium_9,
      m: theme.typography.fontSize.medium_6,
      s: theme.typography.fontSize.medium_4,
      xs: theme.typography.fontSize.medium_2,
      xxs: theme.typography.fontSize.regular,
    },
    text: {
      xxl: theme.typography.fontSize.medium_7,
      xl: theme.typography.fontSize.medium_5,
      l: theme.typography.fontSize.medium_4,
      m: theme.typography.fontSize.medium_2,
      s: theme.typography.fontSize.regular,
      xs: theme.typography.fontSize.small_5,
      xxs: theme.typography.fontSize.small_4,
    },
  },
});

export default getTextTheme;
