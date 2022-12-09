import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./Components/HomePage/Home";
import Products from "./Components/Products/Products";
import Contact from "./Components/ContactAndInfo/Contact";
import ShoppingCart from "./Components/Shopping Cart/ShoppingCart";
import { UseCardsContext } from "./Context/GeneralContext/useCardsContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/shoppingcart",
        element: <ShoppingCart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ContextProvider value={{ cards, hanleCards }}> */}
    <RouterProvider router={router} />
    {/* </ContextProvider> */}
  </React.StrictMode>
);
