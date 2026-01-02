import { useState } from "react";

// @mui
import Checkbox from "@mui/material/Checkbox";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import { useTheme } from "@mui/material/styles";

// @assets
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

// @types
import type { Order } from "@/types/order";

// @constants
import { statusChipColorMap } from "@/constants/status-chip";

// @types
type OrdersTableProps = {
  rows: Order[];
  onView: (id: Order["id"]) => void;
};

// ---------------------------------  ORDERS - LIST  ---------------------------------

export default function OrdersTable({ rows, onView }: OrdersTableProps) {
  const [selected, setSelected] = useState<Order["id"][]>([]);
  const theme = useTheme();

  const handleSelectRow = (id: Order["id"]) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox />
          </TableCell>

          {[
            "ID",
            "Customer Name",
            "Branch",
            "Payment Type",
            "Order Date",
            "Status",
          ].map((title) => (
            <TableCell key={title}>
              {title}
              <TableSortLabel active direction="desc" />
            </TableCell>
          ))}

          <TableCell align="center">Action</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {rows.map((row) => {
          const isSelected = selected.includes(row.id);

          return (
            <TableRow key={row.id} hover selected={isSelected}>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={isSelected}
                  onChange={() => handleSelectRow(row.id)}
                />
              </TableCell>

              <TableCell sx={{ color: theme.palette.grey[900] }}>
                {row.id}
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.branch}</TableCell>
              <TableCell>{row.payment}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>
                <Chip
                  label={row.status}
                  color={statusChipColorMap[row.status]}
                />
              </TableCell>

              <TableCell align="center">
                <IconButton color="primary" onClick={() => onView(row.id)}>
                  <VisibilityOutlinedIcon />
                </IconButton>
                <IconButton color="secondary">
                  <EditOutlinedIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
