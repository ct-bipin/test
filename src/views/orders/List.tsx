import { useNavigate } from "react-router-dom";

// @mui
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import TablePagination from "@mui/material/TablePagination";
import OutlinedInput from "@mui/material/OutlinedInput";

// @project
import OrdersTable from "../../sections/orders/orderlist/Table";

// @types
import type { Order } from "../../types/order";

// @utils
import { rows } from "../../utils/rows";

// @project
import MainCard from "../../components/MainCard";

// @assets
import AddIcon from "@mui/icons-material/Add";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

// ---------------------------------  ORDER LIST - PAGE  ---------------------------------

export default function OrderList() {
  const navigate = useNavigate();

  const handleViewOrder = (orderId: Order["id"]) => {
    navigate(`/details/${orderId}`);
  };

  return (
    <Container maxWidth="lg">
      <MainCard title="Order List">
        <Stack direction="row" justifyContent="space-between">
          <OutlinedInput
            placeholder="Search"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "grey.600" }} />
              </InputAdornment>
            }
          />

          <Stack direction="row" gap={3}>
            <Button variant="outlined" startIcon={<FileDownloadOutlinedIcon />}>
              Download
            </Button>
            <Button variant="contained" size="medium" startIcon={<AddIcon />}>
              Add New
            </Button>
          </Stack>
        </Stack>
        <OrdersTable rows={rows} onView={handleViewOrder} />
        <TablePagination
          component="div"
          count={rows.length}
          page={0}
          rowsPerPage={10}
          onPageChange={() => { }}
          onRowsPerPageChange={() => { }}
          labelRowsPerPage="Items per page"
        />
      </MainCard>
    </Container>
  );
}
