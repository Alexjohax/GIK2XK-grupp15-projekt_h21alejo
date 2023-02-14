import { Rating } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function Product({ product }) {
  const { id, name, imageUrl, description, price, rating } = product;
  return (
    <Link to={`/product/${id}`} className="basis-1/5">
      <Card className="px-2 flex flex-col justify-between">
        <img src={imageUrl} />
        <h2>{name}</h2>
        <h3>{price}</h3>
        <p className="mb-3">{description}</p>
        <Rating
          name="read-only"
          value={rating}
          precision={0.5}
          size="small"
          readOnly
        />
      </Card>
    </Link>
  );
}

export default Product;
