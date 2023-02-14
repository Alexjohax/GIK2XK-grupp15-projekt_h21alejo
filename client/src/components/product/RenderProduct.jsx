import { Button, Container, Rating, Typography } from "@mui/material";
import React from "react";

function RenderProduct({ product }) {
  const { name, longDescription, price, rating, imageUrl } = product;
  return (
    <Container
      maxWidth="md"
      className="bg-slate-200 py-2 h-4/5 flex items-center justify-center"
    >
      <div className="flex flex-wrap justify-center items-center flex-col px-6">
        <img src={imageUrl} className=" self-center" />
        <div className="py-3 flex-grow mb-5">
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {longDescription}
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
          <Button variant="contained">Buy now</Button>
        </div>
      </div>
    </Container>
  );
}

export default RenderProduct;
