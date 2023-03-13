import * as React from "react";

import List from "@mui/material/List";

import OrderListItem from "./OrderListItem";

function OrderList() {
  return (
    <List sx={{ width: "100%" }}>
      <OrderListItem />
      <OrderListItem />
      <OrderListItem />
    </List>
  );
}

export default OrderList;
