import * as React from "react";
// mui
import Box from "@mui/material/Box";
// components
import About from "./About";
import Breakdowns from "./Breakdowns";
import Copyright from "../../components/Copyright/Copyright";
import Hero from "./Hero";
import Links from "./Links";
import Shorts from "./Shorts";

import "./HomePage.css";

function HomePage() {
  return (
    <Box className="HomePage">
      <Hero />
      <About />
      <Links />
      <Breakdowns />
      <Shorts />
      <Copyright />
    </Box>
  );
}

export default HomePage;
