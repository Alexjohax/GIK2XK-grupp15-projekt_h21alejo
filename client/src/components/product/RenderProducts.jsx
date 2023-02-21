import React from "react";
import ProductCard from "./ProductCard";

function RenderProducts({ products, updateCartHandler }) {
  return (
    <div className="w-4/5 mx-auto flex flex-row gap-5 flex-wrap items-center">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          updateCartHandler={updateCartHandler}
        />
      ))}
    </div>
  );
}

export default RenderProducts;
