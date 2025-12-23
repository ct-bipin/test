// theme/overrides/tableCell.ts
import type { Components, Theme } from "@mui/material/styles";

export default function MuiTableCell(
  theme: Theme
): Components["MuiTableCell"] {
  return {
    styleOverrides: {
      root: {
        lineHeight: "20px",
        fontSize: "14px",
        color: theme.palette.grey[700],
      },

      head: {
        fontWeight: 500,
        fontSize: "14px",
        lineHeight: "20px",
        color: theme.palette.grey[900],
      },
    },

    variants: [
      {
        // custom variant
        props: { variant: "id" as any },
        style: {
          color: theme.palette.grey[900],
          fontWeight: 500,
          fontSize: "14px",
          // lineHeight: "20px",
        },
      },
    ],
  };
}
