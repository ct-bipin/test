import { Routes, Route } from "react-router-dom";
import OrderList from "../views/orders/List";
import OrderDetails from "../views/orders/Details";

export default function AppRoutes() {
  return (
     <Routes>
      <Route path="/" element={<OrderList />} />
      <Route path="/details/:orderId" element={<OrderDetails />} />
    </Routes>
  );
}
