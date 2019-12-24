import { defaultTheme } from "..";

export const getBadgeTheme = (theme: defaultTheme) => ({
  borderRadius: "25px",
  fontSize: "13px",
  fontSizeXSmall: "10px",
  fontWeight: "500",
  padding: "6px 23px",
  paddingLarge: "10px 20px",
  paddingSmall: "4px 14px",

  background: {
    danger: `background-color: ${theme.palette.danger.shade1};`,
    primary: `background-color: ${theme.palette.primary.shade1};`,
    secondary: `background-color: ${theme.palette.neutral.shade1};`,
    success: `background-color: ${theme.palette.success.shade1};`,
    warning: `background-color: ${theme.palette.warning.shade1};`
  },
  color: {
    danger: `color: ${theme.palette.danger.shade4};`,
    primary: `color: ${theme.palette.primary.shade5};`,
    secondary: `color: ${theme.palette.neutral.shade6};`,
    success: `color: ${theme.palette.success.shade5};`,
    warning: `color: ${theme.palette.warning.shade9};`
  }
});
