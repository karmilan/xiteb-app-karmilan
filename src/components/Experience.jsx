import { Info } from "@mui/icons-material";
import {
  Box,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ListSubheader,
  Typography,
} from "@mui/material";
import React from "react";

const Experience = ({ experienceData }) => {
  return (
    <>
      <Box>
        <ImageList sx={{ width: "100%" }} gap={8}>
          <ImageListItem key="Subheader" cols={3}>
            <Typography fontSize={{xs:22, md:36}} sx={{ color: "#104c97" }}>
              Experience Something New
            </Typography>
            <Typography component="p" fontSize={{ xs: 14, md: 20 }}>
              Fall into a relaxing stay with one of our exclusive offers.
            </Typography>
          </ImageListItem>
          {experienceData.map((item) => (
            <ImageListItem key={item.img} sx={{ width: { xs: "100vw", md: "unset" } }}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                subtitle={item.author}
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${item.title}`}
                  >
                    <Info />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </>
  );
};

export default Experience;
