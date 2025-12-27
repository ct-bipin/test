import type { Components, Theme } from "@mui/material/styles";

// ---------------------------------  OVERRIDES - CARD HEADER  ---------------------------------

export default function MuiCardHeader(
  theme: Theme
): Components["MuiCardHeader"] {
  return {
    styleOverrides: {
      root: {
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
        gap: "15px",
        borderBottom: `1px solid ${theme.palette.grey[200]}`,
      },
      title: {
        fontSize: "16px",
        color: theme.palette.grey[900],
        textAlign: "left",
        fontWeight: 500,
      },
    },
  };
}
