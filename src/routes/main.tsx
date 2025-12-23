import { Routes, Route } from "react-router-dom";
import OrderList from "../views/orders/List";
import OrderDetails from "../views/orders/Details";
import ButtonPage from "../views/components/Button";
import ChipPage from "../views/components/chip";
import TextfieldpPage from "../views/components/textfield";
import ColorPage from "../views/components/color";
import PaginationPage from "../views/components/pagination";
import CheckboxPage from "../views/components/checkbox";
import TypographyPage from "../views/components/typography";

export default function AppRoutes() {
  return (
     <Routes>
      <Route path="/" element={<OrderList />} />
      <Route path="/details/:orderId" element={<OrderDetails />} />

      <Route path="/button" element={<ButtonPage />} />
      <Route path="/chip" element={<ChipPage />} />
      <Route path="/textfield" element={<TextfieldpPage />} />
      <Route path="/color" element={<ColorPage />} />
      <Route path="/pagination" element={<PaginationPage />} />
      <Route path="/checkbox" element={<CheckboxPage />} />
      <Route path="/typography" element={<TypographyPage />} />
      
    </Routes>
  );
}
