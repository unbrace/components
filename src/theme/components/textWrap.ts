import { DefaultTheme } from '..';

const getTextWrapTheme = (theme: DefaultTheme) => ({
  background: {
    pill: theme.palette.neutral.shade3,
  },
});

export default getTextWrapTheme;
