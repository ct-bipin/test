import { createBrowserRouter } from "react-router-dom";

// @project
import { AppLayout } from "@/layouts";

import { ButtonPage } from "@/views/components";
import { CheckboxPage } from "@/views/components";
import { ChipPage } from "@/views/components";
import { ColorPage } from "@/views/components";
import { PaginationPage } from "@/views/components";
import { TabPage } from "@/views/components";
import { TextFieldPage } from "@/views/components";
import { TypographyPage } from "@/views/components";

import { OrderDetailsPage } from "@/views/orders";
import { OrderListPage } from "@/views/orders";

import RoutePage from "@/views/route-page/Route";


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
        children: [
          { index: true, element: <RoutePage /> },
          { path: "button", element: <ButtonPage /> },
          { path: "chip", element: <ChipPage /> },
          { path: "textfield", element: <TextFieldPage /> },
          { path: "color", element: <ColorPage /> },
          { path: "pagination", element: <PaginationPage /> },
          { path: "checkbox", element: <CheckboxPage /> },
          { path: "typography", element: <TypographyPage /> },
          { path: "Tab", element: <TabPage /> },
        ],
      },
    ],
  },
]);
