import { defaultPalette } from "./palette/defaultPalette";
import { defaultTypography } from "./typography/defaultTypography";
import { getBadgeTheme } from "./components/badge";

const baseTheme = {
  palette: defaultPalette,
  typography: defaultTypography
};

const componentTheme = {
  badge: getBadgeTheme(baseTheme)
};

export type DefaultTheme = typeof baseTheme;
export type ComponentTheme = typeof componentTheme;

export { componentTheme };
