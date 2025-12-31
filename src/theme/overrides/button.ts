// @mui
import type { Theme } from "@mui/material/styles";

// ---------------------------------  OVERRIDES - BUTTON  ---------------------------------

export default function MuiButton(theme: Theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "8px 16px",
          boxShadow: "none",
          
          "&:hover": {
            boxShadow: "none",
              // boxShadow: theme.shadow.button,
          },
        },
      },
    },
  };
}
