import CatalogMain from "@pages/catalog-main/catalog-main";
import ItemPage from "@pages/item-page/item-page";
import { useAppDispatch } from "@store/hooks";
import { createHashRouter, RouterProvider } from "react-router-dom";
import data from "../initial-data.json";
import React from "react";
import { loadCatalog } from "@store/reducers/reducerCatalog";
import PageContainer from "@containers/page-container/page-container";
import CartPage from "@pages/cart-page/cart-page";
import AdminPage from "@pages/admin-page/admin-page";

const App = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(loadCatalog(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const router = createHashRouter([
    {
      path: "/",
      element: <PageContainer />,
      children: [
        { index: true, element: <CatalogMain /> },
        {
          path: "/item/:itemCode",
          element: <ItemPage />,
          loader: ({ params }) => {
            return params;
          },
        },
        {
          path: "/cart",
          element: <CartPage />,
        },
      ],
    },
    { path: "/admin", element: <AdminPage /> },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
