// @mui
import type { Theme } from "@mui/material/styles";
import type { Components } from "@mui/material/styles";

// @project
import Button from "./button";
import CardHeader from "./card-header";
import Chip from "./chip";
import Container from "./container";
import IconButton from "./icon-button";
import MuiTab from "./tab";
import OutlinedInput from "./outlined-input";
import Tab from "./tab";
import TableCell from "./table-cell";
import TablePagination from "./table-pagination";
import TableRow from "./table-row";


// ---------------------------------  OVERRIDES - INDEX  ---------------------------------

export default function components(theme: Theme): Components {
  return {
    ...Button(theme),
    ...CardHeader(theme),
    ...Chip(theme),
    ...Container(theme),
    ...IconButton(),
    ...MuiTab(theme),
    ...OutlinedInput(theme),
    ...TableCell(theme),
    ...TablePagination(theme),
    ...TableRow(theme),
    ...Tab(theme),
  };
}
