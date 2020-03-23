import { TransitionStatus } from 'react-transition-group/Transition';
import getAlertsTheme from './components/alerts';
import getBadgeTheme from './components/badge';
import getButtonTheme from './components/button';
import getDrawerTheme from './components/drawer';
import globals from './components/globals';
import getIconButtonTheme from './components/iconButton';
import getPillTheme from './components/pill';
import getSelectTheme from './components/select';
import getTextTheme from './components/text';
import getTextWrapTheme from './components/textWrap';
import getTooltipTheme from './components/tooltip';
import defaultPalette from './palette/defaultPalette';
import defaultTypography from './typography/defaultTypography';
import getTableTheme from './components/table';
import getFormTheme from './components/form';

const baseTheme = {
  globals: globals,
  palette: defaultPalette,
  typography: defaultTypography,
};

const componentTheme = {
  alerts: getAlertsTheme(baseTheme),
  badge: getBadgeTheme(baseTheme),
  button: getButtonTheme(baseTheme),
  drawer: getDrawerTheme(baseTheme),
  iconButton: getIconButtonTheme(baseTheme),
  form: getFormTheme(baseTheme),
  select: getSelectTheme(baseTheme),
  table: getTableTheme(baseTheme),
  textWrap: getTextWrapTheme(baseTheme),
  tooltip: getTooltipTheme(baseTheme),
  text: getTextTheme(baseTheme),
  pill: getPillTheme(baseTheme),
  ...baseTheme,
};

export type ComponentTheme = typeof componentTheme;
export type DefaultTheme = typeof baseTheme;
export type AnimationProps = {
  state: TransitionStatus;
};
export { media } from './utils';
export { baseTheme, componentTheme };
