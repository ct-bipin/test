import {
//   Box,
//   Typography,
//   Stack,
//   Divider,
//   Chip,
//   Grid,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   IconButton,
  Card,
  CardHeader,
  CardContent,
  Stack,
  Button,
  Typography,
  Divider,
  Grid,
  Chip,
} from "@mui/material";

// import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import type { Order } from "../../../types/order";

// import type { Order } from "../../types/order";

type Props = {
  order: Order;
};

export default function Details({ order }: Props) {
    console.log("orders val", order);
    
  return (
    <>
      {/* Customer Info */}
      {/* <Box mb={3}>
        <Stack direction="row" justifyContent="space-between">
          <Typography fontWeight={600}>Customer</Typography>
          <Typography variant="body2" color="text.secondary">
            Placed on {order.date}
          </Typography>
        </Stack>

        <Stack direction="row" spacing={4} mt={2}>
          <Typography>{order.name}</Typography>

          <Stack direction="row" spacing={1}>
            <PhoneOutlinedIcon fontSize="small" />
            <Typography>{order.phone}</Typography>
          </Stack>

          <Stack direction="row" spacing={1}>
            <EmailOutlinedIcon fontSize="small" />
            <Typography>{order.email}</Typography>
          </Stack>
        </Stack>
      </Box>

      <Divider />

      <Grid container spacing={4} mt={1}>
        <Grid item xs={12} md={6}>
          <Typography fontWeight={600} mb={1}>
            Payment method
          </Typography>
          <Typography>{order.payment}</Typography>

          <Stack direction="row" spacing={1} mt={1}>
            <Typography>Payment status:</Typography>
            <Chip label={order.status} color="success" size="small" />
          </Stack>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography fontWeight={600} mb={1}>
            Shipping method
          </Typography>
          <Typography>Carrier</Typography>
          <Typography>Tracking Code: FX-012345-6</Typography>
        </Grid>
      </Grid>

      <Divider sx={{ my: 3 }} />

      <Typography fontWeight={600} mb={2}>
        Products
      </Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Description</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Total</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {order.products.map((item) => (
            <TableRow key={item.name}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.qty}</TableCell>
              <TableCell>${item.price}</TableCell>
              <TableCell>${item.qty * item.price}</TableCell>
              <TableCell align="center">
                <IconButton color="error">
                  <DeleteOutlineIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Box mt={4} p={3} bgcolor="grey.100" borderRadius={2}>
        <Stack alignItems="flex-end">
          <Typography fontWeight={700} color="primary">
            Total : ${order.total || 0}
          </Typography>
        </Stack>
      </Box> */}




{/* 
      <Box mb={3}>
  <Stack direction="row" justifyContent="space-between">
    <Typography fontWeight={600}>Customer</Typography>
    <Typography variant="body2" color="text.secondary">
      Placed on 12.07.2018 10:00
    </Typography>
  </Stack>

  <Stack direction="row" spacing={4} mt={2}>
    <Typography>Sophia Hale</Typography>

    <Stack direction="row" spacing={1}>
      <PhoneOutlinedIcon fontSize="small" />
      <Typography>070 123 4567</Typography>
    </Stack>

    <Stack direction="row" spacing={1}>
      <EmailOutlinedIcon fontSize="small" />
      <Typography>example@mail.com</Typography>
    </Stack>
  </Stack>
</Box>

<Divider />

<Grid container spacing={4} mt={1}>
  <Grid item xs={12} md={6}>
    <Typography fontWeight={600} mb={1}>
      Payment method
    </Typography>
    <Typography>Credit Card</Typography>

    <Stack direction="row" spacing={1} mt={1}>
      <Typography>Payment status:</Typography>
      <Chip label="Paid" color="success" size="small" />
    </Stack>
  </Grid>

  <Grid item xs={12} md={6}>
    <Typography fontWeight={600} mb={1}>
      Shipping method
    </Typography>
    <Typography>Carrier</Typography>
    <Typography>Tracking Code: FX-012345-6</Typography>
  </Grid>
</Grid>

<Divider sx={{ my: 3 }} />

<Typography fontWeight={600} mb={2}>
  Products
</Typography>

<Table>
  <TableHead>
    <TableRow>
      <TableCell>Description</TableCell>
      <TableCell>Quantity</TableCell>
      <TableCell>Amount</TableCell>
      <TableCell>Total</TableCell>
      <TableCell align="center">Action</TableCell>
    </TableRow>
  </TableHead>

  <TableBody>
    {[
      { name: "Logo Design", qty: 6, price: 200 },
      { name: "Landing Page", qty: 7, price: 100 },
      { name: "Admin Template", qty: 5, price: 150 },
    ].map((item) => (
      <TableRow key={item.name}>
        <TableCell>{item.name}</TableCell>
        <TableCell>{item.qty}</TableCell>
        <TableCell>${item.price}</TableCell>
        <TableCell>${item.qty * item.price}</TableCell>
        <TableCell align="center">
          <IconButton color="error">
            <DeleteOutlineIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>

<Box mt={4} p={3} bgcolor="grey.100" borderRadius={2}>
  <Stack alignItems="flex-end" spacing={1}>
    <Typography>Sub Total : $4725.00</Typography>
    <Typography>Taxes (10%) : $57.00</Typography>
    <Typography>Discount (5%) : $45.00</Typography>
    <Typography fontWeight={700} color="primary">
      Total : $4827.00
    </Typography>
  </Stack>
</Box>
 */}

       <Card>
        <CardHeader title="Customer" />

        <CardContent>
            <Stack
            direction={{ xs: "column", md: "row" }}
            gap={4}
            alignItems="center"
            >
            <Typography fontWeight={600}>Sophia Hale</Typography>

            <Stack direction="row" gap={1} alignItems="center">
                <PhoneOutlinedIcon fontSize="small" />
                <Typography>070 123 4567</Typography>
            </Stack>

            <Stack direction="row" gap={1} alignItems="center">
                <EmailOutlinedIcon fontSize="small" />
                <Typography>example@mail.com</Typography>
            </Stack>
            </Stack>
            
            <Divider/>

            <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 3, md: 6 }}
            sx={{ p: 2  }}
            >
  <Stack spacing={1.5} flex={1}>
    <Typography fontWeight={600}>Payment method</Typography>
    <Typography color="text.secondary">Credit Card</Typography>
    <Typography color="text.secondary">Transaction ID : 000001-TXT</Typography>
    <Typography color="text.secondary">Amount : $2500</Typography>

    <Stack direction="row" spacing={1} alignItems="center">
      <Typography color="text.secondary">Payment status :</Typography>
      <Chip label="Paid" size="small" color="success" />
    </Stack>
  </Stack>

  <Stack spacing={1.5} flex={2}>
    <Typography fontWeight={600}>Shipping method</Typography>
    <Typography color="text.secondary">Carrier</Typography>
    <Typography color="text.secondary">Tracking Code : FX-012345-6</Typography>
    <Typography color="text.secondary">Date : 12.15.2018</Typography>
    
  </Stack>
</Stack>


    <Stack spacing={1}>
      {/* Fulfillment Status */}
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography color="text.secondary">
          Fulfillment status :
        </Typography>
        <Typography fontWeight={600}>
          Delivered
        </Typography>
      </Stack>

      {/* Payment Status */}
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography color="text.secondary">
          Payment status :
        </Typography>
        <Chip
          label="Paid"
          color="success"
          size="small"
          sx={{
            fontWeight: 600,
            px: 1.5,
          }}
        />
      </Stack>
    </Stack>

        

        </CardContent>
        </Card>




    </>
  );
}
