import { DefaultTheme } from '..';

const getTableTheme = (theme: DefaultTheme) => ({
  background: {
    pill: theme.palette.neutral.shade3,
  },
});

export default getTableTheme;
