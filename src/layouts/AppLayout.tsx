import { Outlet } from "react-router-dom";

// @mui
import Container from "@mui/material/Container";

// ---------------------------------  LAYOUT - APP LAYOUT  ---------------------------------

export default function AppLayout() {
  return(
      <Container maxWidth="lg">
            <Outlet />
      </Container>
  )
};
