import { Box, ThemeProvider, createTheme } from '@mui/material';
import './App.css';
import HeaderContainer from './containers/HeaderContainer';
import SliderContainer from './containers/SliderContainer';
import DestinationsContainer from './containers/DestinationsContainer';
import ExperienceContainer from './containers/ExperienceContainer';
import OffersContainer from './containers/OffersContainer';
import FooterContainer from './containers/FooterContainer';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "'montserrat', sans-serif",
      backgroundColor: "blue !important"
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <HeaderContainer />
        {/* <SliderContainer />
        <DestinationsContainer />
        <ExperienceContainer />
        <OffersContainer />
        <FooterContainer /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
