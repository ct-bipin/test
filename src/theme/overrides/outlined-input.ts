// @mui
import type { Theme } from "@mui/material/styles";

// ---------------------------------  OVERRIDES - OUTLINED INPUT  ---------------------------------

export default function OutlinedInput(theme: Theme) {
  return {
  MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&[data-search="true"]': {
            height: 44,
            backgroundColor: theme.palette.grey[50],
            borderRadius: 12,
            // boxShadow: "0px 1px 2px rgba(10,13,18,0.08)",
            boxShadow: theme.shadow.outlinedinput,

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
