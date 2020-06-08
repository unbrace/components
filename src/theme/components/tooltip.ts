import { DefaultTheme } from '..';

const getTooltipTheme = (theme: DefaultTheme) => ({
  background: { main: theme.palette.neutral.shade6 },
  borderRadius: { main: theme.globals.borderRadius.small },
  boxShadow: { main: '1px 2px 14px rgba(0, 0, 0, 0.1), 1px 3px 4px rgba(0, 0, 0, 0.12)' },
  color: { main: theme.palette.neutral.shade2 },
  fontSize: { main: theme.typography.fontSize.small_5 },
  padding: { main: '5px 10px' },
  maxWidth: {
    boxed: '420px',
  },
});

export default getTooltipTheme;
