import {
  Avatar,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

import DeleteIcon from "@mui/icons-material/Delete";

function ShoppingCart({ cart, removeProduct }) {
  const calculateTotal = (cart) => {
    let sum = 0;
    cart.forEach((product) => {
      sum += product.price * product.quantity;
    });
    return sum;
  };

  return (
    <Container maxWidth="xl" className="h-screen">
      <Container maxWidth="xs">
        <List>
          {cart.length > 0 ? (
            cart.map((product) => (
              <ListItem
                key={product.id}
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => removeProduct(product)}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar>
                    <img src={product.imageUrl} />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={`${product.name} x ${product.quantity} `}
                  secondary={`${product.price * product.quantity} SEK`}
                />
              </ListItem>
            ))
          ) : (
            <ListItem>
              <ListItemText
                primary="No products in cart."
                secondary="Please go add some awesome bikes to your cart!"
              />
            </ListItem>
          )}
        </List>
        {cart.length > 0 && (
          <>
            <Typography>Total: {calculateTotal(cart)}</Typography>
          </>
        )}
      </Container>
    </Container>
  );
}

export default ShoppingCart;
