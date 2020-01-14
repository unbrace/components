import getBadgeTheme from './components/badge';
import getButtonTheme from './components/button';
import globals from './components/globals';
import getIconButtonTheme from './components/iconButton';
import getSelectTheme from './components/select';
import getTableTheme from './components/table';
import getTooltipTheme from './components/tooltip';
import defaultPalette from './palette/defaultPalette';
import defaultTypography from './typography/defaultTypography';

const baseTheme = {
  globals: globals,
  palette: defaultPalette,
  typography: defaultTypography,
};

const componentTheme = {
  badge: getBadgeTheme(baseTheme),
  button: getButtonTheme(baseTheme),
  iconButton: getIconButtonTheme(baseTheme),
  select: getSelectTheme(baseTheme),
  table: getTableTheme(baseTheme),
  tooltip: getTooltipTheme(baseTheme),
  ...baseTheme,
};

export type ComponentTheme = typeof componentTheme;
export type DefaultTheme = typeof baseTheme;

export { media } from './utils';
export { baseTheme, componentTheme };
