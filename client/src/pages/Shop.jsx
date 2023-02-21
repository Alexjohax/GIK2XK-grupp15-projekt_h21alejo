import ResponsiveAppBar from "../components/navigation/ResponsiveAppBar";
import React from "react";
import RenderProducts from "../components/product/RenderProducts";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

function Shop({ cart }) {
  const itemsInCart = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  return (
    <Container maxWidth="xl" className="h-screen">
      <Container
        maxWidth="xl"
        className="h-1/6 w-full bg-slate-200 text-center"
      >
        GREAT BIKES
      </Container>
      <ResponsiveAppBar numberOfItemsInCart={itemsInCart} />
      <Container className="my-5" maxWidth="lg">
        <Outlet />
      </Container>
    </Container>
  );
}

export default Shop;
