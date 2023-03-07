import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import { getAllProducts } from "../../models/ProductModel";
import ProductCard from "./ProductCard";

function RenderProducts({ updateCartHandler }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAllProducts().then((products) => setProducts(products));
  }, []);

  return (
    <Box className="w-full mx-auto flex flex-row gap-5 flex-wrap justify-center items-center">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          updateCartHandler={updateCartHandler}
        />
      ))}
    </Box>
  );
}

export default RenderProducts;
