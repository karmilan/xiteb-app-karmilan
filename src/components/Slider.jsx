import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { sliderStyle } from "../styles/SliderStyle";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

// function SwipeableTextMobileStepper() {
const Slider = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ flexGrow: 1 }} position="relative">
      {/* <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper> */}
      {/* <AutoPlaySwipeableViews */}
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  //   height: 255,
                  display: "block",
                  //   maxWidth: 400,
                  overflow: "hidden",
                  width: "100%",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </SwipeableViews>
      {/* </AutoPlaySwipeableViews> */}
      <MobileStepper
        steps={maxSteps}
        // position="static"
        sx={{
          position: "absolute",
          bottom: "50%",
          backgroundColor: "transparent",
        }}
        activeStep={activeStep}
        nextButton={
          <Button
            sx={{ color: "white" }}
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {/* Next */}
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft sx={sliderStyle.arrowIcon} />
            ) : (
              <KeyboardArrowRight sx={sliderStyle.arrowIcon} />
            )}
          </Button>
        }
        backButton={
          <Button
            sx={{ color: "white", fontSize: "30px" }}
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight sx={sliderStyle.arrowIcon} />
            ) : (
              <KeyboardArrowLeft sx={sliderStyle.arrowIcon} />
            )}
            {/* Back */}
          </Button>
        }
      />
      {
        <Box
          position="absolute"
          bottom="40%"
          display="flex"
          justifyContent="center"
          width="100%"
        >
          <Typography component="h1" sx={{ color: "white", fontSize: {xs:15, md:40}, fontWeight:'900' }}>
            {images[activeStep].label}
          </Typography>
        </Box>
      }
    </Box>
  );
};

export default Slider;
