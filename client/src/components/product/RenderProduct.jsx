import {
  Box,
  Button,
  Container,
  Divider,
  Rating,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import FeedbackAlert from "../feedback/FeedbackAlert";
import moment from "moment";

function RenderProduct({ fetchProduct, product, updateCartHandler }) {
  const { id, title, imageUrl, description, price, ratings } = product;

  const [rating, setRating] = useState(0);
  const [success, setSuccess] = useState(false);

  const updateRating = (id, value) => {
    const url = "http://localhost:5000/ratings";
    const payload = { product_id: id, rating: value };

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
    fetchProduct();
  };

  useEffect(() => {
    let values = 0;
    ratings.forEach((rating) => {
      values += rating.rating;
    });
    setRating(values / ratings.length);
    console.log("rating: ", rating);
  }, [ratings]);
  console.log(ratings.length);
  return (
    <Container
      maxWidth="xl"
      className=" py-2 h-4/5 flex items-center justify-center"
    >
      <Box className="flex flex-wrap justify-center items-center flex-col px-6">
        <Box
          component="img"
          sx={{
            widht: 700,
            height: 466,
            maxHeight: { xs: 233, md: 350, lg: 466 },
            maxWidth: { xs: 350, md: 525, lg: 700 },
          }}
          alt={title}
          src={imageUrl}
        />
        <Box className="py-3 flex-grow mb-5">
          <Typography
            gutterBottom
            variant="h4"
            component="h4"
            className="text-black"
          >
            {title} - {price} SEK
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </Box>
        {success && (
          <FeedbackAlert
            message="This awesome bike was added to your cart!"
            width="50%"
          />
        )}
        <Box className="flex flex-col items-center w-full">
          <Rating
            name="simple-controlled"
            value={rating}
            precision={1.0}
            size="small"
            onChange={(event, newValue) => updateRating(id, newValue)}
          />
          <Button
            variant="contained"
            onClick={() => {
              updateCartHandler(product);
              setSuccess(true);
            }}
            sx={{ width: { xs: "100%", md: "50%", lg: "33%" }, mt: 2 }}
          >
            Add to cart
          </Button>
        </Box>
      </Box>
      {ratings.length > 0 && (
        <Container maxWidth="sm" sx={{ mt: 5 }}>
          <Typography
            variant="h5"
            component="h5"
            className="text-black text-center"
          >
            Product ratings
          </Typography>
          <Container
            sx={{ display: "flex", flexDirection: "column", mt: 2 }}
            maxWidth="md"
          >
            {ratings.map((rating, i) => (
              <>
                <Box
                  key={rating.createdAt}
                  sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    mb: 1,
                    mt: 1,
                  }}
                >
                  <Rating
                    name="read-only"
                    value={rating.rating}
                    precision={1.0}
                    size="small"
                    readOnly
                  />
                  <Typography sx={{ ml: 5 }}>
                    {moment(rating.createdAt).format("YYYY-MMM-DD")}
                  </Typography>
                </Box>
                {i < ratings.length - 1 && <Divider variant="middle" />}
              </>
            ))}
          </Container>
        </Container>
      )}
    </Container>
  );
}

export default RenderProduct;
