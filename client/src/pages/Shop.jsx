import ResponsiveAppBar from "../components/navigation/ResponsiveAppBar";
import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

function Shop({ numberOfItems }) {
  return (
    <Container maxWidth="xl" className="h-screen">
      <Container
        maxWidth="xl"
        className="h-1/6 w-full bg-slate-200 text-center"
      >
        GREAT BIKES
      </Container>
      <ResponsiveAppBar numberOfItemsInCart={numberOfItems} />
      <Container className="my-5" maxWidth="xl">
        <Outlet />
      </Container>
    </Container>
  );
}

export default Shop;
