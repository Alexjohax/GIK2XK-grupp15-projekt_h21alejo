import { Button, Container, Rating, Typography } from "@mui/material";
import React from "react";

function RenderProduct({ product, updateCartHandler }) {
  const { id, title, imageUrl, description, price, ratings } = product;
  let rating = 0;
  if (ratings) {
    const values = ratings.reduce((total,num) => total + num, 0);
    rating = values / ratings.length;
  } 
  return (
    <Container
      maxWidth="md"
      className="bg-slate-200 py-2 h-4/5 flex items-center justify-center"
    >
      <div className="flex flex-wrap justify-center items-center flex-col px-6">
        <img src={imageUrl} className=" self-center" />
        <div className="py-3 flex-grow mb-5">
          <Typography gutterBottom variant="h5" component="div" className="text-black">
            {title} - {price} SEK
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </div>
        <div className="flex justify-evenly w-full">
          <Rating
            name="read-only"
            value={rating}
            precision={0.5}
            size="small"
            readOnly
          />
          <Button
            variant="contained"
            onClick={() => updateCartHandler(product)}
          >
            Add to cart
          </Button>
          
        </div>
      </div>
      <Container maxWidth="md">
      <Typography className="text-black">Product ratings</Typography>
        {ratings.map((rating) => <Container maxWidth="md"><Rating
            name="read-only"
            value={rating}
            precision={0.5}
            size="small"
            readOnly
          />{rating.createdAt}</Container>)}
      </Container>
    </Container>
  );
}

export default RenderProduct;
