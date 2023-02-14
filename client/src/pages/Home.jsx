import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Grid
      className="h-screen bg-[url('../src/assets/images/bike-bg-fp.webp')] bg-cover bg-blend-lighten"
      container
      spacing={0}
    >
      <Grid
        className="flex items-end justify-center pb-5"
        item
        xs={12}
        sm={6}
        md={3}
      >
        <div className="h-1/2 w-4/5 backdrop-blur-md rounded-3xl ">
          <Link to={"/shop"} className="text-2xl">
            Shop now
          </Link>
        </div>
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
  );
}

export default Home;
