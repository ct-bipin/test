// @mui
import type { Theme } from "@mui/material/styles";

// ---------------------------------  OVERRIDES - OUTLINED INPUT  ---------------------------------

export default function OutlinedInput(theme: Theme) {
  return {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          height: 44,
          backgroundColor: theme.palette.grey[50],
          borderRadius: 12,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.grey[200],
          },

          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.grey[200],
          },

          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.grey[200],
            borderWidth: 1,
          },
        },

        input: {
          padding: "10px 12px",
          fontSize: 16,
          lineHeight: "20px",
          color: theme.palette.grey[700],
        },
      },
    },
  };
}
