// @mui
import { createTheme } from "@mui/material/styles";

// @project
import components from "./overrides";
import { palette } from "./palette";
import typography from "./typography";
import { shadow } from "./shadow";

// ---------------------------------  THEME - INDEX  ---------------------------------

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1266,
      xl: 1440
    }
  },
  spacing: 4,
  palette,
  typography,
  shadow,
});

theme.components = components(theme);

export default theme;
