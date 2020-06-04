import { DefaultTheme } from '..';

const getModalTheme = (theme: DefaultTheme) => ({
  background: theme.palette.neutral.shade0,
  borderRadius: '7px',
  boxShadow: '0 0 60px 0 rgba(0, 0, 0, 0.12)',
  color: theme.palette.neutral.shade8,
  defaultWidth: '500px',
  padding: '25px',

  header: {
    fontSize: theme.typography.fontSize.medium_7,
    fontSizeSubHeader: theme.typography.fontSize.small_5,
    fontSizeSubCode: theme.typography.fontSize.medium_2,
    fontWeight: '600',
  },

  footer: {
    background: theme.palette.neutral.shade1,
  },

  content: {
    color: theme.palette.neutral.shade9,
  },
});

export default getModalTheme;
