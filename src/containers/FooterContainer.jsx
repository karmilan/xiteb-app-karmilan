import React from "react";
import Footer from "../components/Footer";
import { Box } from "@mui/material";
import footerBg from "../assets/footer-bg.png";

const FooterContainer = () => {
  return (
    <>
      <footer>
        <Box position="relative">
          <Footer />
          <Box component="img" src={footerBg} width="100%"  position='absolute' top={{md:'60%'}} />
        </Box>
      </footer>
    </>
  );
};

export default FooterContainer;
