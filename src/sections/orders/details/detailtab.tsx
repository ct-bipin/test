// @mui
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// @project
import OrderItem from "../../../components/orders/OrderItem";
import MainCard from "../../../components/MainCard";

// @assets
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";

// ---------------------------------  DETAILS - DETAILSTAB  ---------------------------------

export default function Details() {
  return (
    <MainCard>
        <Stack
          direction={{ xs: "column", md: "row" }}
          gap={4}
          alignItems="center"
          py={4}
          px={2}
        >
          <Typography>Sophia Hale</Typography>

          <Stack direction="row" gap={1} alignItems="center">
            <PhoneOutlinedIcon fontSize="small" />
            <Typography>070 123 4567</Typography>
          </Stack>

          <Stack direction="row" gap={1} alignItems="center">
            <EmailOutlinedIcon fontSize="small" />
            <Typography>example@mail.com</Typography>
          </Stack>
        </Stack>

        <Divider />

        <Stack direction={{ xs: "column", md: "row" }} p={2}>
          <Stack  sx = {{gap: 1.5, flex:1}}>
            <OrderItem label="Payment method" value="Credit Card" />
            <OrderItem label="Method" value="Credit Card" />
            <OrderItem label="Transaction ID" value="000001-TXT" />
            <OrderItem label="Amount" value="$2500" />
          </Stack>

          <Stack sx={{gap:1.5, flex:2}}>
            <OrderItem label="Shipping method" value="" />
            <OrderItem label="Carrier" value="Carrier" />
            <OrderItem label="Tracking Code" value="FX-012345-6" />
            <OrderItem label="Date" value="12.15.2018" />
          </Stack>
        </Stack>

        <Stack direction={{ xs: "column", md: "column" }} px={2} py={4}>
          <Stack direction="row" sx={{gap:1}}>
            <OrderItem label="Fulfillment status" value="Delivered" />
          </Stack>

          <Stack direction="row" sx ={{gap:1}}>
            <OrderItem label="Payment status" value="" />
            <Chip
              label="Paid"
              color="success"
              size="small"
              sx={{ fontWeight: 600, px: 1.5 }}
            />
          </Stack>
        </Stack>

        <Divider />

        <Stack
          direction={{ xs: "column", md: "row" }}
          sx={{
            spacing: { xs: 3, md: 6 },
            gap: { xs: 3, md: 6 },
            py: 4,
          }}
        >
          <Stack gap={1.5} flex={1}>
            <OrderItem label="Billing address" value="" />
            <OrderItem label="First name" value="Joseph" />
            <OrderItem label="Last name" value="William" />
            <OrderItem label="Address" value="4898 Joanne Lane street" />
            <OrderItem label="City" value="Boston" />
            <OrderItem label="Country" value="United States" />
            <OrderItem label="State" value="Massachusetts" />
            <OrderItem label="Zip code" value="02110" />
            <OrderItem label="Phone" value="+1 (070) 123-4567" />
          </Stack>

          <Stack gap={1.5} flex={2}>
            <OrderItem label="Shipping address" value="" />
            <OrderItem label="First name" value="Sara" />
            <OrderItem label="Last name" value="Soudan" />
            <OrderItem label="Address" value="4898 Joanne Lane street" />
            <OrderItem label="City" value="Boston" />
            <OrderItem label="Country" value="United States" />
            <OrderItem label="State" value="Massachusetts" />
            <OrderItem label="Zip code" value="02110" />
            <OrderItem label="Phone" value="+1 (070) 123-4567" />
          </Stack>
        </Stack>

        <Divider />
    </MainCard>
  );
}
