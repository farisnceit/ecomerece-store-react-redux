import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Homepage from "pages/Homepage";
import Productlist from "pages/Productlist";
import ProductDetails from "pages/ProductDetails";
import ShoppingCart from "pages/ShoppingCart";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "homepage",
      element: <Homepage />,
    },
    {
      path: "productlist",
      element: <Productlist />,
    },
    {
      path: "productdetails",
      element: <ProductDetails />,
    },
    {
      path: "shoppingcart",
      element: <ShoppingCart />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
