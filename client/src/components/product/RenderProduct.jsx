import { Container } from "@mui/material";
import React from "react";

function RenderProduct({ product }) {
  const { name, description, price, rating, imageUrl } = product;
  return <Container maxWidth="md"></Container>;
}

export default RenderProduct;
