import { Button, Rating } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";

function Product({ product, updateCartHandler }) {
  const { id, title, imageUrl, price, ratings } = product;
  let rating = 0;
  if (ratings) {
    const values = ratings.reduce((total,num) => total + num, 0);
    rating = values / ratings.length;
  } 
  return (
    <Card className="basis-1/5 flex flex-col">
      <Link
        to={`/products/${id}`}
        className="px-2 flex flex-col justify-between min-h-[350px]"
      >
        <img src={imageUrl} />
        <h2>{title}</h2>
        <h3>{price}</h3>
        <Rating
          name="read-only"
          value={rating}
          precision={0.5}
          size="small"
          readOnly
          className="mb-2"
        />
      </Link>
      <Button onClick={() => updateCartHandler(product)} variant="contained">
        Add to cart
      </Button>
    </Card>
  );
}

export default Product;
