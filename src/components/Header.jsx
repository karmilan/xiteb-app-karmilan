import {
  InsertChartOutlined,
  Language,
  Menu,
  Person,
  PhoneAndroid,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { headerStyle } from "../styles/HeaderStyle";
import logo from '../assets/LogoShangri-La.png'

const Header = ({handleDrawerToggle}) => {
  return (
    <>
      <Grid container width={{ md: "80%" }} justifyContent={{ md: "center" }}>
        <Grid xs={7} sm={4} md={6}>
          <Box>
            <img src={logo} width='190px' />
          </Box>
        </Grid>

        <Grid xs={5} sm={8} md={6}>
          {/* <Box width="60vw" display={{ xs: "none", md: "block" }}> */}
          <Box width="60vw" display={{ xs: "none", sm: "block" }}>
            <List sx={headerStyle.list}>
              <ListItem sx={headerStyle.listItem} disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={headerStyle.listItemIcon}>
                    <Person />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      sx: { ...headerStyle.listItemText },
                    }}
                    primary="Sign in"
                  />
                </ListItemButton>
                <Divider orientation="vertical" flexItem />
              </ListItem>

              <ListItem sx={headerStyle.listItem} disablePadding>
                <ListItemButton>
                  <ListItemText
                    primaryTypographyProps={{
                      sx: { ...headerStyle.listItemText },
                    }}
                    primary="Join Now"
                  />
                </ListItemButton>
                <Divider orientation="vertical" flexItem />
              </ListItem>

              <ListItem sx={headerStyle.listItem} disablePadding>
                <ListItemButton sx={{ px: "0", textAlign: "center" }}>
                  <ListItemText
                    primaryTypographyProps={{
                      sx: { ...headerStyle.listItemText },
                    }}
                    primary="Find Reservation"
                  />
                </ListItemButton>
                <Divider orientation="vertical" flexItem />
              </ListItem>

              <ListItem sx={headerStyle.listItem} disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={headerStyle.listItemIcon}>
                    <Language />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      sx: { ...headerStyle.listItemText },
                    }}
                    primary="English"
                  />
                </ListItemButton>
                <Divider orientation="vertical" flexItem />
              </ListItem>

              <ListItem sx={headerStyle.listItem} disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={headerStyle.listItemIcon}>
                    <PhoneAndroid />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            </List>
          </Box>

          {/* <Box display={{ xs: "block", md: "none" }}> */}
          <Box display={{ xs: "block", sm: "none" }}>
            <List
              sx={{
                display: { xs: "flex", md: "none" },
                flexDirection: { xs: "row", md: "unset" },
              }}
            >
              <ListItem sx={headerStyle.listItemRes}>
                <ListItemButton>
                  <ListItemIcon>
                    <Person />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>

              <ListItem sx={headerStyle.listItemRes}>
                <ListItemButton>
                  <ListItemIcon>
                    <InsertChartOutlined />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>

              <ListItem sx={headerStyle.listItemRes}>
                <ListItemButton onClick={handleDrawerToggle}>
                  <ListItemIcon>
                    <Menu />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
