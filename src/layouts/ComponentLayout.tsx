import { Outlet } from "react-router-dom";

// @mui
import Container from "@mui/material/Container";

// ---------------------------------  LAYOUT - COMPONENT LAYOUT  ---------------------------------

export default function ComponentLayout() {
    return (
        <Container maxWidth="lg" sx={{ py: 5 }}>
            <Outlet />
        </Container>
    );
}
