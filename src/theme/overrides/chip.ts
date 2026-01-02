// @mui
import type { Theme } from "@mui/material/styles";

// ---------------------------------  OVERRIDES - CHIP  ---------------------------------

export default function Chip(theme: Theme) {
  return {
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "50px",
          padding: theme.spacing(2, 0.5),
          fontSize: "12px",
          fontWeight: 500,
          lineHeight: "20px",
        },
        colorPrimary: {
          backgroundColor: theme.palette.primary.lighter,
          color: theme.palette.primary.main,
        },

        colorWarning: {
          backgroundColor: theme.palette.warning.lighter,
          color: theme.palette.warning.main,
        },

        colorSuccess: {
          backgroundColor: theme.palette.success.lighter,
          color: theme.palette.success.main,
        },

        colorError: {
          backgroundColor: theme.palette.error.lighter,
          color: theme.palette.error.main,
        },
      },
    },
  };
}
