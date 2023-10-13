import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import dest from "../assets/destination-img.png";
import map from "../assets/srilanka.png";
import { globalColors } from "../constants/GlobalColors";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Destinations = () => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        my={{ xs: "20px", sm: "80px" }}
      >
        <Typography
          sx={{ color: "#77328b" }}
          fontSize={{ xs: "40px", md: "70px" }}
        >
          Our Destinations
        </Typography>

        <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
          <Select
            multiple
            displayEmpty
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput />}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <em>Placeholder</em>;
              }

              return selected.join(", ");
            }}
            MenuProps={MenuProps}
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem disabled value="">
              <em>Placeholder</em>
            </MenuItem>
            {names.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, personName, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Box position={{ md: "relative" }}>
          <Box position="relative">
            {/* <img src={dest} /> */}
            <Box component="img" src={dest} width="100%" />
            {/* <img src={map} style={{position:'absolute'}}/> */}
            <Box
              component="img"
              src={map}
              position="absolute"
              top={{ xs: "12em", md: "5%" }}
              right={{ xs: "0", md: "88.5%" }}
              width={{ xs: "30%", md: "unset" }}
            />
          </Box>

          <Card
            sx={{
              minWidth: 275,
              position: { md: "absolute" },
              left: "84%",
              bottom: "40%",
              m: { xs: "50px 40px", md: "unset" },
            }}
          >
            <CardContent>
              <Typography
                color={globalColors.themeA.color}
                variant="h4"
                component="div"
              >
                Cinnamon Life
              </Typography>

              <Typography variant="body2">
                Feel an irrepressible wave of excitement as you have the best
                surfing experience, set to the backdrop of serenity, and
                pristine blue waters.
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" size="small" sx={{ m: "10px auto" }}>
                Discover More
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default Destinations;
