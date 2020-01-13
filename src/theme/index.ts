import getBadgeTheme from './components/badge';
import getButtonTheme from './components/button';
import getIconButtonTheme from './components/iconButton';
import globals from './components/globals';
import defaultPalette from './palette/defaultPalette';
import defaultTypography from './typography/defaultTypography';
import getTooltipTheme from './components/tooltip';
import getSelectTheme from './components/select';

const baseTheme = {
  globals: globals,
  palette: defaultPalette,
  typography: defaultTypography,
};

const componentTheme = {
  badge: getBadgeTheme(baseTheme),
  button: getButtonTheme(baseTheme),
  iconButton: getIconButtonTheme(baseTheme),
  tooltip: getTooltipTheme(baseTheme),
  select: getSelectTheme(baseTheme),
  ...baseTheme,
};

export type DefaultTheme = typeof baseTheme;
export type ComponentTheme = typeof componentTheme;

export { media } from './utils';
export { baseTheme, componentTheme };
