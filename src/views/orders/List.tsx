import {
  Card,
  CardHeader,
  CardContent,
  Stack,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Checkbox,
  IconButton,
  TablePagination,
  Divider,
  Container,
  Chip,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import TableSortLabel from "@mui/material/TableSortLabel";

// import StatusChip from "../components/StatusChip";
import SearchInput from "../../components/orders/SearchInput";
import { rows } from "../../utils/rows";
import { statusChipColorMap } from "../../constants/statusChip";
import { useNavigate } from "react-router-dom";
import type { Order } from "../../types/order";

export default function OrderList() {

  const navigate = useNavigate();

  const handleViewOrder = (orderId: Order["id"]) => {
    navigate(`/details/${orderId}`);
  };

  return (
    <Container maxWidth="lg">
    <Card>
      <CardHeader title="Order List" />
        <Divider />
      <CardContent>
        <Stack direction="row" justifyContent="space-between">
          <SearchInput />

          <Stack direction="row" gap={3}>
            <Button variant="outlined" startIcon={<FileDownloadOutlinedIcon />}>
              Download
            </Button>
            <Button variant="contained" color="primary" startIcon={<AddIcon />}>
              Add New
            </Button>
          </Stack>
        </Stack>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell >
                <TableSortLabel active direction="desc">
                  ID
                </TableSortLabel>
              </TableCell>
               <TableCell>
                <TableSortLabel active direction="desc">
                    Customer Name
                </TableSortLabel>
                </TableCell>

                <TableCell>
                <TableSortLabel active direction="desc">
                    Branch
                </TableSortLabel>
                </TableCell>

                <TableCell>
                <TableSortLabel active direction="desc">
                    Payment Type
                </TableSortLabel>
                </TableCell>

                <TableCell>
                <TableSortLabel active direction="desc">
                    Order Date
                </TableSortLabel>
                </TableCell>

                <TableCell>
                <TableSortLabel active direction="desc">
                    Status
                </TableSortLabel>
                </TableCell>

                <TableCell align="center">
                    Action
                </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell variant="id">{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.branch}</TableCell>
                <TableCell>{row.payment}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>
                  <Chip label={row.status}  color={statusChipColorMap[row.status]}/>
                </TableCell>
                <TableCell align="center">
                  <IconButton 
                    color="primary"  
                    onClick={() => handleViewOrder(row.id)}
                  >
                    <VisibilityOutlinedIcon />
                  </IconButton>
                  <IconButton color="secondary">
                    <EditOutlinedIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>

      <TablePagination
        component="div"
        count={rows.length}
        page={0}
        rowsPerPage={10}
        onPageChange={() => {}}
        onRowsPerPageChange={() => {}}
        labelRowsPerPage="Items per page"
      />
    </Card>
    </Container>
  
  );
}
