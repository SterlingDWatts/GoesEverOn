import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
// components
import About from "./About";
import Breakdowns from "./Breakdowns";
import Hero from "./Hero";
import Links from "./Links";
import Page from "../../components/Page/Page";
import Shorts from "./Shorts";

import "./HomePage.css";

function HomePage() {
  const navigate = useNavigate();
  const location = useLocation();
  React.useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      if (id === "home") {
        navigate("/", { replace: true });
      }
    }
  }, [location]);
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
