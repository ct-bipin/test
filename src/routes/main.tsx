import { createBrowserRouter } from "react-router-dom";

// @project
// import { AppLayout, ComponentLayout } from "@/layouts";
import {
  ButtonPage,
  CheckboxPage,
  ChipPage,
  ColorPage,
  PaginationPage,
  TextFieldPage,
  TypographyPage,
} from "@/views/components";
import { OrderDetailsPage, OrderListPage } from "@/views/orders";
import RoutePage from "@/views/route-page/Route";
import { AppLayout, ComponentLayout } from "@/layouts";

// ---------------------------------  ROUTES - MAIN  ---------------------------------

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <OrderListPage /> },
      { path: "/details/:orderId", element: <OrderDetailsPage /> },

      {
        path: "/component",
        element: <ComponentLayout />,
        children: [
          { index: true, element: <RoutePage /> },
          { path: "button", element: <ButtonPage /> },
          { path: "chip", element: <ChipPage /> },
          { path: "textfield", element: <TextFieldPage /> },
          { path: "color", element: <ColorPage /> },
          { path: "pagination", element: <PaginationPage /> },
          { path: "checkbox", element: <CheckboxPage /> },
          { path: "typography", element: <TypographyPage /> },
        ],
      },
    ],
  },
]);
