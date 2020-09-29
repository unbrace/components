import { DefaultTheme } from '..';

const getAppHeaderTheme = (theme: DefaultTheme) => ({
  background: theme.palette.neutral.shade1,
  borderBottom: `solid 2px ${theme.palette.neutral.shade2}`,
  height: '60px',
  padding: '5px 20px',
});

export default getAppHeaderTheme;
