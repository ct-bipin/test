// theme/overrides/index.ts
import type { Components, Theme } from "@mui/material/styles";

import MuiButton from "./button";
import MuiCardHeader from "./cardHeader";
import MuiChip from "./chip";
import MuiIconButton from "./iconButton";
import MuiTablePagination from "./tablePagination";
import MuiStack from "./stack";
import MuiTableCell from "./tableCell";
// import MuiTypography from "./typography";
import MuiCssBaseline from "./cssBaseline";
import MuiContainer from "./container";

export default function components(theme: Theme): Components {
  return {
    MuiButton: MuiButton(),
    MuiChip: MuiChip(theme),
    MuiIconButton: MuiIconButton(),
    MuiCardHeader: MuiCardHeader(theme),
    MuiTableCell: MuiTableCell(theme),
    MuiTablePagination: MuiTablePagination(theme),
    MuiStack: MuiStack(theme),
    // MuiTypography: MuiTypography(theme),
    MuiCssBaseline: MuiCssBaseline(theme),
    MuiContainer: MuiContainer(theme),
  };
}
 