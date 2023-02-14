import ResponsiveAppBar from "../components/navigation/ResponsiveAppBar";
import React from "react";
import { useParams } from "react-router-dom";
import RenderProduct from "../components/product/RenderProduct";

function SingleProductPage({ products }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div>Product not found...</div>;
  }

  return (
    <div className="h-screen">
      <div className="h-1/6 w-full bg-slate-200 text-center">GREAT BIKES</div>
      <ResponsiveAppBar />
      <div className="my-1 mx-1">breadcrumbs</div>
      <RenderProduct product={product} />
    </div>
  );
}

export default SingleProductPage;
