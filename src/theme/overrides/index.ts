
// @mui
import type { Theme } from "@mui/material/styles";
import type { Components } from "@mui/material/styles";

// @project
import Button from "./button";
import CardHeader from "./card-header";
import Chip from "./chip";
import IconButton from "./icon-button";
import TablePagination from "./table-pagination";
import TableCell from "./table-cell";
import Container from "./container";
import TableRow from "./table-row";
import OutlinedInput from "./outlined-input";


// ---------------------------------  OVERRIDES - INDEX  ---------------------------------

export default function components(theme: Theme): Components {
  return {
      ...Button(theme),
      ...Chip(theme),
      ...IconButton(),
      ...CardHeader(theme),
      ...TableCell(theme),
      ...TablePagination(theme),
      ...Container(theme),
      ...TableRow(theme),
      ...OutlinedInput(theme),
  };
}
