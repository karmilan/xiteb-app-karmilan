import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse } from "@mui/material";
import { topBarStyle } from "../styles/TopBarStyle";

const menuItems = [
  {
    id: 1,
    text: "ABOUT",
    subItems: [
      { id: 11, text: "Overview" },
      { id: 12, text: "Explore Colombo" },
      { id: 13, text: "Services & Facilities" },
      { id: 14, text: "Map & Directions" },
    ],
  },
  {
    id: 2,
    text: "ROOMS & SUITES",
    subItems: [
      { id: 21, text: "Deluxe Lake View" },
      { id: 22, text: "Deluxe Ocean View" },
      { id: 23, text: "Premier Balcony" },
      { id: 24, text: "Premier Ocean View" },
    ],
  },
  {
    id: 3,
    text: "DINING",
    subItems: [
      { id: 31, text: "Cake Temptations by Shangri-La Colombo" },
      { id: 32, text: "Shang Palace" },
      { id: 33, text: "Capital Bar & Grill" },
      { id: 34, text: "Central" },
      { id: 35, text: "Central Café" },
    ],
  },
  {
    id: 4,
    text: "EXPERIENCE",
    subItems: [
      { id: 41, text: "Overview" },
      { id: 42, text: "Adventure Zone" },
      { id: 43, text: "Celebrations" },
    ],
  },
  {
    id: 5,
    text: "EVENTS",
    subItems: [
      { id: 51, text: "Overview" },
      { id: 52, text: "Experience It" },
      { id: 53, text: "Coworking Space" },
      { id: 54, text: "Outside Catering" },
      { id: 55, text: "Request For Proposal" },
    ],
  },
  { id: 6, text: "GALLERY", subItems: [] },
  { id: 7, text: "OFFERS", subItems: [] },
  { id: 8, text: "MORE", subItems: [{ id: 81, text: "Learn More" }] },
];

function TopBar(props) {
  const { window } = props;
  // const [mobileOpen, setMobileOpen] = useState(false);

  // const handleDrawerToggle = () => {
  //   setMobileOpen((prevState) => !prevState);
  // };

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleNestedClick = (id) => {
    setOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const drawer = (
    <Box onClick={props.handleDrawerToggle} sx={{ textAlign: "center" }}>
      {/* <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider /> */}
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: { xs: "none", sm: "flex" } }}>
      
      <AppBar component="nav" sx={{...topBarStyle.navBarStyle, top: "unset" }} position="static">
        <Toolbar sx={{mx:'auto'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={props.handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography> */}

          <List sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
            {menuItems.map((menuItem) => (
              <div key={menuItem.id}>
                <ListItem button onClick={() => handleNestedClick(menuItem.id)}>
                  <ListItemText
                    primaryTypographyProps={{
                      sx: { ...topBarStyle.listItemText },
                    }}
                    primary={menuItem.text}
                  />
                  {menuItem.subItems.length > 0 &&
                    (open[menuItem.id] ? <ExpandLess /> : <ExpandMore />)}
                </ListItem>
                <Collapse in={open[menuItem.id]} timeout="auto" unmountOnExit>
                  <List sx={{ display: "flex", flexDirection: "column" }}>
                    {menuItem.subItems.map((subItem) => (
                      <ListItem key={subItem.id}>
                        <ListItemText
                          primaryTypographyProps={{
                            sx: { ...topBarStyle.listItemText },
                          }}
                          primary={subItem.text}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </div>
            ))}
            <Button sx={topBarStyle.findBtn} variant="outlined">
              FIND A HOTEL
            </Button>
          </List>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          anchor="top"
          container={container}
          variant="temporary"
          open={props.mobileOpen}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            // display: { xs: 'block', sm: 'none' },
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box" },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main">
        <Toolbar />
      </Box>
    </Box>
  );
}

TopBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default TopBar;
