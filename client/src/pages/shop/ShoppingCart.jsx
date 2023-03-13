import {
  Avatar,
  Button,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import FeedbackAlert from "../../components/feedback/FeedbackAlert";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../../models/OrderModel";

function ShoppingCart({ cart, setCart, removeProduct }) {
  const calculateTotal = (cart) => {
    let sum = 0;
    cart.forEach((product) => {
      sum += product.price * product.quantity;
    });
    return sum;
  };
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const navigate = useNavigate();

  const [order, setOrder] = useState({
    items: "",
    sum: 0,
    status: false,
    user_id: null,
  });

  return (
    <Container
      maxWidth="xl"
      className="h-screen flex justify-center items-center"
    >
      <Container maxWidth="xs">
        {orderConfirmed && cart.length > 0 && (
          <FeedbackAlert message="Tack för din beställning!" width="100%" />
        )}
        <List>
          {cart.length > 0 ? (
            cart.map((product) => (
              <ListItem
                key={product.id}
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => {
                      removeProduct(product);
                    }}
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
                  primary={`${product.title} x ${product.quantity} `}
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
        {!orderConfirmed ? (
          <Button
            variant="outlined"
            onClick={() => {
              localStorage.removeItem("productCart");
              setOrderConfirmed(true);
              setOrder({
                items: JSON.stringify(cart),
                sum: calculateTotal(cart).toFixed(2),
                status: false,
                user_id: 1,
              });

              //Måste nog ha en relationstabell mellan order och order_items och cart
              /* typ for each product in cart createOrderItem(orderid, product) sen
              i profil/dashboard hämtar man på orderid och får get all where orderid = orderid. */
              /*               createOrder({
                items: JSON.stringify(cart),
                sum: calculateTotal(cart).toFixed(2),
                status: false,
                user_id: 1,
              }); */

              console.log(JSON.stringify(order).length);
            }}
          >
            ORDER NOW!
          </Button>
        ) : (
          <Button
            variant="outlined"
            onClick={() => {
              setCart([]);
              setOrderConfirmed(false);
              setTimeout(() => {
                navigate("/products");
              }, 300);
            }}
          >
            Back to products!
          </Button>
        )}
      </Container>
    </Container>
  );
}

export default ShoppingCart;
