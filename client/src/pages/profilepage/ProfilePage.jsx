import React from "react";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import OrderList from "./OrderList";
import profileBg from "../../assets/images/profile-bg.jpeg";

function ProfilePage(/* {user} */) {
  const user = {
    first_name: "Alex",
    last_name: "Johansson",
    email: "alex@megasoffa.se",
    createdAt: "2022-01-01",
  };

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 2,
        backgroundImage: `url(${profileBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ p: 2 }}>
            <Avatar
              alt={`${user.first_name} ${user.last_name}`}
              src={
                user.photoUrl
                  ? user.photoUrl
                  : "https://lh3.googleusercontent.com/a/AGNmyxZ1gSDBySiF8acKvwQUh2rjtjepWVUteFeJRBGQ3g=s288"
              }
              sx={{ width: "15rem", height: "15rem" }}
            />
            <Typography variant="h5">{`${user.first_name} ${user.last_name}`}</Typography>
            <Typography variant="subtitle1">{user.email}</Typography>
            <Typography variant="subtitle1">
              Joined on {user.createdAt}
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              sx={{ mt: 2 }}
              onClick={() => {
                navigate("/products");
              }}
            >
              Back to shop
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h5" gutterBottom>
              My orders
            </Typography>
            <OrderList />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProfilePage;
