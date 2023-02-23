import { Button, Container, Rating, Typography } from "@mui/material";
import React from "react";

function RenderProduct({ product, updateCartHandler }) {
  const { id, title, imageUrl, description, price, ratings } = product;
  let rating = 0;
  if (ratings) {
    const values = ratings.reduce((total,num) => total + num, 0);
    rating = values / ratings.length;
  } 
  const updateRating = (id, value) => {
    const url = 'http://localhost:5000/ratings'
    const payload = {product_id: id, rating: value}

    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).then(response => response.json()).then(data => console.log(data)).catch(error => console.log(error))

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
            name="simple-controlled"
            value={rating}
            precision={0.5}
            size="small"
            onChange={(event, newValue) => updateRating(id, newValue)}
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
        <Container sx={{display: 'flex', flexDirection: 'column'}}  maxWidth="md">
        {ratings.map((rating) => <Rating key={`rating-${Math.floor(Math.random()*100)}`}
            name="read-only"
            value={rating}
            precision={0.5}
            size="small"
            readOnly
          />)}
        </Container>
      </Container>
    </Container>
  );
}

export default RenderProduct;
