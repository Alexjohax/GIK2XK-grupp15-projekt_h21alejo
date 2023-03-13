import ResponsiveAppBar from "../../components/navigation/ResponsiveAppBar";
import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import theme from "../../theme/theme";

function Shop({ numberOfItems }) {
  return (
    <Container
      sx={{ backgroundColor: theme.palette.tertiaryLight.main }}
      maxWidth="xl"
    >
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
