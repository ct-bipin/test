import { useState } from "react";

// @mui
import Stack from "@mui/material/Stack";
import TablePagination from "@mui/material/TablePagination";
import Typography from "@mui/material/Typography";

// @project
import { MainCard } from "@/components";


const rows = Array.from({ length: 90 }, (_, i) => `Item ${i + 1}`);
// ---------------------------------  PAGINATION - PAGE  ---------------------------------

export default function PaginationPage() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const visibleRows = rows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <MainCard title="Pagination Component Showcase">
      <Stack spacing={1} mb={3}>
        {visibleRows.map((row) => (
          <Typography key={row}>{row}</Typography>
        ))}
      </Stack>

      {/* Pagination Component */}
      <TablePagination
        component="div"
        count={rows.length}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Items per page"
        rowsPerPageOptions={[5, 10, 25, 50]}
      />
    </MainCard>
  );
};
