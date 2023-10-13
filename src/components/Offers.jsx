import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { globalColors } from "../constants/GlobalColors";

const Offers = ({ cardImg }) => {
  return (
    <>
      <Card sx={{ maxWidth: 455, mx: 1 }}>
        <CardMedia sx={{ height: 140 }} image={cardImg} title="green iguana" />
        <CardContent>
          <Typography fontSize='14px' textAlign='center' gutterBottom variant="h5" component="div">
          <b>Shangri–La Circle Exclusive Member Rate with Breakfast</b>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Exclusive Member Rate with Breakfast for Shangri-La Circle member.
          </Typography>
          <Typography fontSize='14px' textAlign='center'>From SGD 247.36 Average Per Night</Typography>
        </CardContent>
        <CardActions>
          {/* <Button size="small">Share</Button> */}
          <Button
            sx={{
              color: globalColors.themeA.btnColor,
              borderColor: globalColors.themeA.btnColor,
              m: "10px auto"
            }}
            variant="outlined"
            size="small"
            // sx={{ m: "10px auto" }}
          >
            View Details
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Offers;
