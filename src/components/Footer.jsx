import {
  Box,
  Checkbox,
  Grid,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { globalColors } from "../constants/GlobalColors";
import { footerStyle } from "../styles/FooterStyle";
import {
  ChevronRight,
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <>
      <Grid container width={{ md: "80%" }} mx={{ md: "auto" }}>
        <Grid xs={12} sm={6} md={4}>
          <List>
            <ListItem>
              <ListItemText
                primaryTypographyProps={{
                  sx: { ...footerStyle.listItemTextHeading },
                }}
                primary="Corporate information"
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="Cinnamon Hotels & Resorts" />
            </ListItem>
            <ListItem>
              <ListItemText primary="John Keells Group" />
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListItemText
                primaryTypographyProps={{
                  sx: { ...footerStyle.listItemTextHeading },
                }}
                primary="Blogs"
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="Cinnamon Ublog" />
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListItemText
                primaryTypographyProps={{
                  sx: { ...footerStyle.listItemTextHeading },
                }}
                primary="Careers"
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="Careers" />
            </ListItem>
          </List>
        </Grid>

        <Grid xs={12} sm={6} md={4}>
          <List>
            <ListItem>
              <ListItemText
                primaryTypographyProps={{
                  sx: { ...footerStyle.listItemTextHeading },
                }}
                primary="Get In Touch"
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="Know Sri Lanka" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Contact US" />
            </ListItem>
            <ListItem>
              <ListItemText primary="FAQs" />
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListItemText
                primaryTypographyProps={{
                  sx: { ...footerStyle.listItemTextHeading },
                }}
                primary="Sections"
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="Careers" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Blog" />
            </ListItem>
          </List>
        </Grid>

        <Grid xs={12} sm={6} md={4}>
          <List>
            <ListItem>
              <ListItemText
                primaryTypographyProps={{
                  sx: { ...footerStyle.listItemTextHeading },
                }}
                primary="Follow Us"
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Facebook fontSize="large" />
                </ListItemIcon>
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon>
                  <Twitter fontSize="large" />
                </ListItemIcon>
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon>
                  <LinkedIn fontSize="large" />
                </ListItemIcon>
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon>
                  <Instagram fontSize="large" />
                </ListItemIcon>
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon>
                  <YouTube fontSize="large" />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>

            <ListItem>
              <Box
                sx={{
                  width: 500,
                  maxWidth: "100%",
                  my: 4,
                }}
              >
                <TextField
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <ChevronRight />
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
                  label="Email Address"
                />
              </Box>
            </ListItem>

            <ListItem alignItems="flex-start">
              <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }} />
              <Typography component="p">
                {" "}
                By Checking this box, I consent to the processing of my Personal
                Data by Cinnamon for the purpose and within the Conditions{" "}
              </Typography>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
