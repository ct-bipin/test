// theme/overrides/button.ts
import type { Components, 
  // Theme

 } from "@mui/material/styles";

export default function MuiButton(
  // theme: Theme
): Components["MuiButton"] {
  return {
    styleOverrides: {
      root: {
        borderRadius: 8,
        // ...theme.typography.button,
      },

      outlined: {
        border: "px solid",
      },
    },
  };
}
