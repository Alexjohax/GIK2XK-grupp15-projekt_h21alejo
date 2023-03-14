import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import profileBg from "../assets/images/profile-bg.jpeg";

function Home() {
  return (
    <>
      <Container
        sx={{
          display: {
            sm: "flex",
            md: "none",
            height: "100vh",
            width: "100%",
            backgroundImage: `url(${profileBg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          },
        }}
      >
        <Box className="h-1/2 w-full rounded-3xl flex items-center justify-center">
          <Link to={"/products"} className="text-2xl text-cyan-800">
            Shop now
          </Link>
        </Box>
      </Container>
      <Grid
        className="h-screen bg-[url('../src/assets/images/bike-bg-fp.webp')] bg-cover bg-blend-lighten"
        container
        spacing={0}
        sx={{ display: { sm: "none", md: "flex" } }}
      >
        <Grid
          className="flex items-end justify-center pb-5"
          item
          xs={12}
          sm={6}
          md={3}
        >
          <Box
            className="h-1/4 clip-path-2 w-4/5 backdrop-blur-md rounded-3xl flex items-center justify-center"
            sx={{ backgroundImage: `url(${profileBg})` }}
          >
            <Box sx={{ widht: "50%" }}>
              <Link to={"/products"} className="text-2xl text-cyan-800">
                SHOP NOW
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid
          className="overflow-hidden flex items-start"
          item
          xs={12}
          sm={6}
          md={3}
        >
          <img
            className="clip-path-1"
            src="../src/assets/images/bike-fp-1.webp"
            alt="Bild"
          />
        </Grid>
        <Grid
          className="overflow-hidden border-x-2 border-black flex items-center justify-center"
          item
          xs={12}
          sm={6}
          md={3}
        >
          <img
            className="clip-path-2"
            src="../src/assets/images/bike-fp-4.webp"
            alt="Bild"
          />
        </Grid>
        <Grid
          className="overflow-hidden flex items-end"
          item
          xs={12}
          sm={6}
          md={3}
        >
          <img
            className="clip-path-3"
            src="../src/assets/images/bike-fp-3.webp"
            alt="Bild"
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
