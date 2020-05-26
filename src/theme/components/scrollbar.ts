import { DefaultTheme } from '..';

const getScrollbarTheme = (theme: DefaultTheme) => ({
  buttonDisplay: 'none',
  thumb: theme.palette.neutral.shade4,
  thumbHover: theme.palette.neutral.shade5,
  track: theme.palette.neutral.shade2,
});

export default getScrollbarTheme;
