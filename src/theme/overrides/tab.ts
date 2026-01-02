// @mui
import type { Theme } from "@mui/material/styles";

// ---------------------------------  OVERRIDES - Tab  ---------------------------------

export default function Tab(theme: Theme) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 500,
          fontSize: 14,
          lineHeight: "20px",

          color: theme.palette.grey[500],

          "& .MuiSvgIcon-root": {
            fontSize: 20,
            color: theme.palette.grey[500],
          },

          "&.Mui-selected": {
            color: theme.palette.primary.main,
            "& .MuiSvgIcon-root": {
              color: theme.palette.primary.main,
            },
          },

          "&:hover:not(.Mui-selected)": {
            backgroundColor: theme.palette.grey[50],
          },
        },
      },
    },

    MuiTabs: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${theme.palette.grey[200]}`,
        },

        indicator: {
          height: 2,
          backgroundColor: theme.palette.primary.main,
        },
      },
    },
  };
}
