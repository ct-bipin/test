// @mui
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// @project
import OrderItem from "@/components/orders/OrderItem";
import MainCard from "@/components/MainCard";
import DetailTable from "../orderlist/DetailTable";

// @assets
import CalendarTodayTwoToneIcon from "@mui/icons-material/CalendarTodayTwoTone";
import MailTwoToneIcon from '@mui/icons-material/MailTwoTone';
import PhoneIphoneTwoToneIcon from '@mui/icons-material/PhoneIphoneTwoTone';

// ---------------------------------  DETAILS - DETAILSTAB  ---------------------------------

export default function Details() {
  return (
    <>
      <MainCard title="Customer" subtitle="Placed on 12.07.2018 10:00">

      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{
          gap: 4,
          alignItems: "center",
          py: 4,
          px: 2,
        }}
      >
        <Stack direction="row" sx={{ gap: 1, alignItems: "center" }}>
          <CalendarTodayTwoToneIcon
            fontSize="small"
            sx={{ color: "grey.500" }}
          />
          <Typography variant="caption" color="grey.600">
            Sophia Hale
          </Typography>
        </Stack>

        <Stack direction="row" sx={{ gap: 1, alignItems: "center" }}>
          <PhoneIphoneTwoToneIcon fontSize="small" sx={{ color: "grey.500" }} />
          <Typography variant="caption" color="grey.600">
            070 123 4567
          </Typography>
        </Stack>

        <Stack
          direction="row"
          gap={1}
          alignItems="center"
          sx={{ gap: 1, alignItems: "center" }}
        >
          <MailTwoToneIcon fontSize="small" sx={{ color: "grey.500" }} />
          <Typography variant="caption" color="grey.600">
            example@mail.com
          </Typography>
        </Stack>
      </Stack>

      <Divider />

      <Stack direction={{ xs: "column", md: "row" }} sx={{ p: 2 }}>
        <Stack sx={{ gap: 1.5, flex: 1 }}>
          <Typography variant="h5" color="grey.900">
            Payment method
          </Typography>
          <Typography variant="h6" color="grey.900">
            Credit Card
          </Typography>
          <OrderItem label="Transaction ID" value="000001-TXT" />
          <OrderItem label="Amount" value="$2500" />
        </Stack>

        <Stack sx={{ gap: 1.5, flex: 2 }}>
          <Typography variant="h5" color="grey.900">
            Shipping method
          </Typography>
          <Typography variant="h6" color="grey.900">
            Carrier
          </Typography>
          <OrderItem label="Tracking Code" value="FX-012345-6" />
          <OrderItem label="Date" value="12.15.2018" />
        </Stack>
      </Stack>

      <Stack direction={{ xs: "column", md: "column" }} sx={{ px: 2, py: 4 }}>
        <Stack direction="row" sx={{ gap: 1 }}>
          <OrderItem label="Fulfillment status" value="Delivered" />
        </Stack>

        <Stack direction="row" sx={{ gap: 1 }}>
          <OrderItem label="Payment status" value="" />
          <Chip variant="outlined" label="Paid" color="success" />
        </Stack>
      </Stack>

      <Divider />

      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{
          gap: { xs: 3, md: 6 },
          py: 4,
        }}
      >
        <Stack gap={1.5} sx={{ flex: 1 }}>
          <Typography variant="h5" color="grey.900">
            Billing address
          </Typography>
          <OrderItem label="First name" value="Joseph" />
          <OrderItem label="Last name" value="William" />
          <OrderItem label="Address" value="4898 Joanne Lane street" />
          <OrderItem label="City" value="Boston" />
          <OrderItem label="Country" value="United States" />
          <OrderItem label="State" value="Massachusetts" />
          <OrderItem label="Zip code" value="02110" />
          <OrderItem label="Phone" value="+1 (070) 123-4567" />
        </Stack>

        <Stack gap={1.5} sx={{ flex: 2 }}>
          <Typography variant="h5" color="grey.900">
            Shipping address
          </Typography>
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
      </MainCard>
      <Divider />
      {/* </MainCard> */}

      <MainCard title="Products">
        <DetailTable />
      </MainCard>

      <Box
        sx={{
          bgcolor: "grey.100",
          borderRadius: 3,
          p: 4,
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Stack
          sx={{
            width: 300,
            gap: 2,
          }}
        >
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h6" color="grey.900">
              Sub Total :
            </Typography>
            <Typography variant="caption" color="grey.500">
              $4725.00
            </Typography>
          </Stack>

          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h6" color="grey.900">
              Taxes (10%) :
            </Typography>
            <Typography variant="caption" color="grey.500">
              $57.00
            </Typography>
          </Stack>

          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h6" color="grey.900">
              Discount (5%) :
            </Typography>
            <Typography variant="caption" color="grey.500">
              $45.00
            </Typography>
          </Stack>

          <Stack direction="row" justifyContent="space-between" pt={2}>
            <Typography variant="h6" color="primary.main">
              Total :
            </Typography>
            <Typography variant="h6" color="primary.main">
              $4827.00
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
