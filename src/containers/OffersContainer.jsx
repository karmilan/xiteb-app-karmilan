import React from "react";
import Offers from "../components/Offers";
import img1 from "../assets/card-img-1.png";
import { Box, Grid, Typography } from "@mui/material";

const OffersContainer = () => {
  return (
    <>
   <Box mx={{md:4}} my={{xs:3, md:12}}>
   <Typography textAlign='center' fontSize={28} mb={2}><b>Offers</b></Typography>
      <Grid container spacing={1} >
        <Grid xs={12} md={4}>
          <Offers cardImg={img1} />
        </Grid>
        <Grid xs={12} md={4}>
          <Offers cardImg={img1} />
        </Grid>
        <Grid xs={12} md={4}>
          <Offers cardImg={img1} />
        </Grid>
      </Grid>
   </Box>
    </>
  );
};

export default OffersContainer;
