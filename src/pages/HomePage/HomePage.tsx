import * as React from "react";
// mui
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
// components
import About from "./About";
import Breakdowns from "./Breakdowns";
import Hero from "./Hero";
import Links from "./Links";

import "./HomePage.css";

function HomePage() {
  return (
    <Box className="HomePage">
      <Hero />
      <About />
      <Links />
      <Breakdowns />
      <Box id="shorts" textAlign="center" sx={{ padding: "24px" }}>
        <Typography variant="h2">Shorts</Typography>
        <Box sx={{ overflowY: "scroll", margin: "12px 0 0" }}>
          <Stack spacing={4} direction="row">
            <iframe
              width="428"
              height="761"
              src="https://www.youtube.com/embed/ehPlzItg9JY"
              title="Did Insomniac Games Capture Lightning in a Bottle Twice? #spiderman #begreatertogether #spiderman2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <iframe
              width="428"
              height="761"
              src="https://www.youtube.com/embed/l3clMx8Tcno"
              title="Drops of God wine service: Is it Accurate?"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <iframe
              width="428"
              height="761"
              src="https://www.youtube.com/embed/vLnK2E-PSKc"
              title="Severance Teaser"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <iframe
              width="428"
              height="761"
              src="https://www.youtube.com/embed/htJ24Cjfv9w"
              title="One of the best Underrated Actors of our Generation.#Foundation #leepace #marvel #lordoftherings"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default HomePage;
