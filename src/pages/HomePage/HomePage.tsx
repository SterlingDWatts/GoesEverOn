import * as React from "react";
// mui
import Box from "@mui/material/Box";
// components
import About from "./About";
import Hero from "./Hero";
import Links from "./Links";

import "./HomePage.css";

function HomePage() {
  return (
    <Box className="HomePage">
      <Hero />
      <About />
      <Links />
    </Box>
  );
}

export default HomePage;
