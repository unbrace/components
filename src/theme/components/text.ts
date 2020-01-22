import { DefaultTheme } from '..';

const getTextTheme = (theme: DefaultTheme) => ({
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
