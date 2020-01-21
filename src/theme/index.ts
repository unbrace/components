import getBadgeTheme from './components/badge';
import getButtonTheme from './components/button';
import globals from './components/globals';
import getIconButtonTheme from './components/iconButton';
import getSelectTheme from './components/select';
import getTextWrapTheme from './components/textWrap';
import getTooltipTheme from './components/tooltip';
import defaultPalette from './palette/defaultPalette';
import defaultTypography from './typography/defaultTypography';
import getAlertsTheme from './components/alerts';

const baseTheme = {
  globals: globals,
  palette: defaultPalette,
  typography: defaultTypography,
};

const componentTheme = {
  alerts: getAlertsTheme(baseTheme),
  badge: getBadgeTheme(baseTheme),
  button: getButtonTheme(baseTheme),
  iconButton: getIconButtonTheme(baseTheme),
  select: getSelectTheme(baseTheme),
  textWrap: getTextWrapTheme(baseTheme),
  tooltip: getTooltipTheme(baseTheme),
  ...baseTheme,
};

export type ComponentTheme = typeof componentTheme;
export type DefaultTheme = typeof baseTheme;

export { media } from './utils';
export { baseTheme, componentTheme };
