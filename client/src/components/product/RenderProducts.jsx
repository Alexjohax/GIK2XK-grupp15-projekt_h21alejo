import React from "react";
import Product from "./ProductCard";

function RenderProducts({ products }) {
  return (
    <div className="w-4/5 mx-auto flex flex-row gap-5 flex-wrap items-center">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default RenderProducts;
