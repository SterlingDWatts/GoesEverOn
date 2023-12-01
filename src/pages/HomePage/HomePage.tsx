import * as React from "react";
// components
import About from "./About";
import Breakdowns from "./Breakdowns";
import Hero from "./Hero";
import Links from "./Links";
import Page from "../../components/Page/Page";
import Shorts from "./Shorts";

import "./HomePage.css";

function HomePage() {
  return (
    <Page className="HomePage" noTopPadding>
      <Hero />
      <About />
      <Links />
      <Breakdowns />
      <Shorts />
    </Page>
  );
}

export default HomePage;
