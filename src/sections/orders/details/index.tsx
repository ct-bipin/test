import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";

// @mui
import Container from "@mui/material/Container";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

// @project
import MainCard from "../../../components/MainCard";
import Details from "./Detailtab";
import Invoice from "./Invoicetab";
import Status from "./Statustab";

// @types
import type { Order } from "../../../types/order";

// @utils
import { rows } from "../../../utils/rows";

// ---------------------------------  DETAILS - INDEX  ---------------------------------

export default function OrderDetailsPage() {
  const { orderId } = useParams<{ orderId: string }>();
  const [tab, setTab] = useState(0);

  const order: Order | undefined = rows.find((item) => item.id === orderId);

  if (!order) {
    return <Navigate to="/" replace />;
  }

  return (
    <Container maxWidth="lg">
      <MainCard title="Order Details">
        <Tabs value={tab} onChange={(_, value) => setTab(value)} sx={{ mb: 3 }}>
          <Tab label="Details" />
          <Tab label="Invoice" />
          <Tab label="Status" />
        </Tabs>

        {/* Tab Content */}
        {tab === 0 && <Details />}
        {tab === 1 && <Invoice />}
        {tab === 2 && <Status />}
      </MainCard>
    </Container>
  );
}
