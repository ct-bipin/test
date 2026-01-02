// @mui
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

// @asset
import IconButton from "@mui/material/IconButton";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";

// @util
import { rows } from "./detailrows";

// ---------------------------------  ORDERS - LIST  ---------------------------------

export default function DetailTable() {
  const theme = useTheme();
  return (
    <Table>
      <TableHead>
        <TableRow>
          {["Description", "Quantity", "Amount", "Total", "Action"].map((h) => (
            <TableCell key={h}>{h}</TableCell>
          ))}
        </TableRow>
      </TableHead>

      <TableBody>
        {rows.map(({ title, desc, qty, amount }, index) => {
          const total = qty * amount;

          return (
            <TableRow key={index}>
              <TableCell>
                <Typography sx={{ color: theme.palette.grey[900] }}>
                  {title}
                </Typography>
                <Typography variant="caption" color="grey.600">{desc}</Typography>
              </TableCell>

              <TableCell sx={{ color: "grey.500" }}>{qty}</TableCell>
              <TableCell sx={{ color: "grey.500" }}>
                ${amount.toFixed(2)}
              </TableCell>
              <TableCell sx={{ color: theme.palette.grey[500] }}>
                ${total.toFixed(2)}
              </TableCell>

              <TableCell>
                <IconButton color="primary">
                  <DeleteTwoToneIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
