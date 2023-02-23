import React from "react";
import { useParams } from "react-router-dom";
import RenderProduct from "../components/product/RenderProduct";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";

function SingleProductPage({ products, updateCartHandler, cart }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <Typography>Product not found...</Typography>;
  }

  return (
    <>
      <RenderProduct product={product} updateCartHandler={updateCartHandler} />

    </>
  );
}

export default SingleProductPage;
