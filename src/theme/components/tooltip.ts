import { DefaultTheme } from '..';

const getTooltipTheme = (theme: DefaultTheme) => ({
  background: theme.palette.neutral.shade6,
  borderRadius: theme.globals.borderRadius.small,
  boxShadow: '1px 2px 14px rgba(0, 0, 0, 0.1), 1px 3px 4px rgba(0, 0, 0, 0.12)',
  color: theme.palette.neutral.shade2,
  fontSize: theme.typography.fontSize.small_5,
  padding: '5px 10px',
});

export default getTooltipTheme;
