// @mui
import type { Theme } from "@mui/material/styles";

// ---------------------------------  OVERRIDES - CARD HEADER  ---------------------------------

export default function CardHeader(theme: Theme) {
  return {
    MuiCardHeader: {
      styleOverrides: {
        root: {
          paddingTop: theme.spacing(5),
          paddingBottom: theme.spacing(5),
          paddingLeft: theme.spacing(4),
          paddingRight: theme.spacing(4),
          gap: 15,
          borderBottom: `1px solid ${theme.palette.grey[200]}`,
        },
        title: {
          fontSize: 16,
          color: theme.palette.grey[900],
          textAlign: "left" as const,
          fontWeight: 500,
        },
        content: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        },
        subheader: {
          fontSize: 14,
          color: theme.palette.grey[900],
        },
      },
    },
  };
}
