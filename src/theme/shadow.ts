// @mui
import { alpha } from "@mui/material/styles";

// @project
import { palette } from "./palette";

// ---------------------------------  CUSTOM SHADOWS  ---------------------------------

export const shadow = {
  none: "none",
  input: `0px 1px 2px ${alpha(palette.grey[900], 0.04)}`,
  card: `0px 2px 4px ${alpha(palette.primary.main, 0.5)}`,
  button: `0px 3px 6px ${alpha(palette.grey[900], 0.8)}`,
  dropdown: `0px 6px 12px ${alpha(palette.grey[900], 0.12)}`,
  modal: `0px 12px 32px ${alpha(palette.grey[900], 0.16)}`, 
  outlinedinput: `0px 3px 6px ${alpha(palette.grey[900], 0.14)}`
};

export type CustomShadows = typeof shadow;

// ---------------------------------  THEME AUGMENTATION  ---------------------------------

declare module "@mui/material/styles" {
  interface Theme {
    shadow: CustomShadows;
  }
  interface ThemeOptions {
    shadow?: CustomShadows;
  }
}
