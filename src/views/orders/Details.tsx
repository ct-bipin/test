// import { useParams, Navigate } from "react-router-dom";
// import {
//   Box,
//   Card,
//   CardContent,
//   Container,
//   Typography,
//   Tabs,
//   Tab,
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
// } from "@mui/material";

import OrderDetailsPage from "../../sections/orders/details";

// import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
// import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
// import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
// import { rows } from "../../utils/rows";
// import type { Order } from "../../types/order";

// export default function OrderDetails() {
//   const { orderId } = useParams<{ orderId: string }>();

//   const order: Order | undefined = rows.find(
//     (item) => item.id === orderId
//   );

//   if (!order) {
//     return <Navigate to="/" replace />;
//   }

//   return (
//     <Container maxWidth="lg">
//     <Card>
//     <CardContent>

//       <Typography variant="h5" fontWeight={600} mb={2}>
//         Customer List
//       </Typography>

//       <Tabs value={0} sx={{ mb: 3 }}>
//         <Tab label="Details" />
//         <Tab label="Invoice" />
//         <Tab label="Status" />
//       </Tabs>

//       <Box mb={3}>
//         <Stack direction="row" justifyContent="space-between">
//           <Typography fontWeight={600}>Customer</Typography>
//           <Typography variant="body2" color="text.secondary">
//             Placed on 12.07.2018 10:00
//           </Typography>
//         </Stack>

//         <Stack direction="row" spacing={4} mt={2}>
//           <Typography>Sophia Hale</Typography>
//           <Stack direction="row" spacing={1}>
//             <PhoneOutlinedIcon fontSize="small" />
//             <Typography>070 123 4567</Typography>
//           </Stack>
//           <Stack direction="row" spacing={1}>
//             <EmailOutlinedIcon fontSize="small" />
//             <Typography>example@mail.com</Typography>
//           </Stack>
//         </Stack>
//       </Box>

//       <Divider />

 
//       <Grid container spacing={4} mt={1}>
//         <Grid>
//           <Typography fontWeight={600} mb={1}>
//             Payment method
//           </Typography>
//           <Typography>Credit Card</Typography>
//           <Typography>Transaction ID: 000001-TXT</Typography>
//           <Typography>Amount: $2500</Typography>

//           <Stack direction="row" spacing={1} mt={1}>
//             <Typography>Payment status:</Typography>
//             <Chip label="Paid" color="success" size="small" />
//           </Stack>
//         </Grid>

//         <Grid>
//           <Typography fontWeight={600} mb={1}>
//             Shipping method
//           </Typography>
//           <Typography>Carrier</Typography>
//           <Typography>Tracking Code: FX-012345-6</Typography>
//           <Typography>Date: 12.15.2018</Typography>

//           <Typography mt={1}>
//             Fulfillment status: <Chip label="Delivered" size="small" />
//           </Typography>
//         </Grid>
//       </Grid>

//       <Divider sx={{ my: 3 }} />

//       <Grid container spacing={4}>
//         <Grid>
//           <Typography fontWeight={600} mb={1}>
//             Billing address
//           </Typography>
//           <Typography>Joseph William</Typography>
//           <Typography>4898 Joanne Lane Street</Typography>
//           <Typography>Boston, United States</Typography>
//           <Typography>Massachusetts, 02110</Typography>
//           <Typography>+1 (070) 123-4567</Typography>
//         </Grid>

//         <Grid>
//           <Typography fontWeight={600} mb={1}>
//             Shipping address
//           </Typography>
//           <Typography>Sara Soudan</Typography>
//           <Typography>4898 Joanne Lane Street</Typography>
//           <Typography>Boston, United States</Typography>
//           <Typography>Massachusetts, 02110</Typography>
//           <Typography>+1 (070) 123-4567</Typography>
//         </Grid>
//       </Grid>

//       <Box mt={4}>
//         <Typography fontWeight={600} mb={2}>
//           Products
//         </Typography>

//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Description</TableCell>
//               <TableCell>Quantity</TableCell>
//               <TableCell>Amount</TableCell>
//               <TableCell>Total</TableCell>
//               <TableCell align="center">Action</TableCell>
//             </TableRow>
//           </TableHead>

//           <TableBody>
//             {[
//               { name: "Logo Design", qty: 6, price: 200 },
//               { name: "Landing Page", qty: 7, price: 100 },
//               { name: "Admin Template", qty: 5, price: 150 },
//             ].map((item) => (
//               <TableRow key={item.name}>
//                 <TableCell>{item.name}</TableCell>
//                 <TableCell>{item.qty}</TableCell>
//                 <TableCell>${item.price}</TableCell>
//                 <TableCell>${item.qty * item.price}</TableCell>
//                 <TableCell align="center">
//                   <IconButton color="error">
//                     <DeleteOutlineIcon />
//                   </IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </Box>

//       <Box mt={4} p={3} bgcolor="#F5F7FA" borderRadius={2}>
//         <Stack spacing={1} alignItems="flex-end">
//           <Typography>Sub Total : $4725.00</Typography>
//           <Typography>Taxes (10%) : $57.00</Typography>
//           <Typography>Discount (5%) : $45.00</Typography>
//           <Typography fontWeight={700} color="primary">
//             Total : $4827.00
//           </Typography>
//         </Stack>
//       </Box>

//     </CardContent>
//   </Card>
// </Container>


//   );
// }


 const OrderList = () =>{
  return(
    <>
      <OrderDetailsPage/>
    </>
  )
 }

 export default OrderList;