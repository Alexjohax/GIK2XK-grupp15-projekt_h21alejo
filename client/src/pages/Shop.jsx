import AppBar from "../components/navigation/ResponsiveAppBar";
import React from "react";
import RenderProducts from "../components/product/RenderProducts";

function Shop({ products }) {
  return (
    <div className="h-screen">
      <div className="h-1/6 w-full bg-slate-200 text-center">GREAT BIKES</div>
      <AppBar />
      <div className="my-1 mx-1">breadcrumbs</div>
      <div>
        <RenderProducts products={products} />
      </div>
    </div>
  );
}

export default Shop;
