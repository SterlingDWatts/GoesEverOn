import * as React from "react";
// mui
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
// components
import About from "./About";
import Hero from "./Hero";
import Links from "./Links";

import "./HomePage.css";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function HomePage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  let width = 300;
  const isFourHundred = useMediaQuery("(min-width:400px)");
  const isFiveHundred = useMediaQuery("(min-width:500px)");
  const isSixHundred = useMediaQuery("(min-width:600px)");
  const isSevenHundred = useMediaQuery("(min-width:700px)");
  if (isSevenHundred) {
    width = 676;
  } else if (isSixHundred) {
    width = 600;
  } else if (isFiveHundred) {
    width = 500;
  } else if (isFourHundred) {
    width = 400;
  }

  const videoLinks = [
    [
      "https://www.youtube.com/embed/k3RuBe4HwpM?si=FZJVsoMPeLnOzyfi",
      "https://www.youtube.com/embed/tTUII4-SUX4?si=EEH_P4Wea2QZBpiu",
      "https://www.youtube.com/embed/6N_Vu8bEXPw?si=7YlRBw4uVfML0MK4",
    ],
    [
      "https://www.youtube.com/embed/E79Uba0R1js?si=hutkBvakh9AN4LGw",
      "https://www.youtube.com/embed/v4xZAbORNRI?si=xep_pheiB7swUZCL",
      "https://www.youtube.com/embed/NXlN4qOv_1c?si=QDgZHZDMcVDfUf6s",
      "https://www.youtube.com/embed/0DoHrEka2-A?si=P2R_PBsIMCGGcGCz",
      "https://www.youtube.com/embed/yMKtecU4wPw?si=sznOLdDvO21qcfg2",
      "https://www.youtube.com/embed/DbYOtepjz40?si=YzXPUjJEeSO4zyQL",
      "https://www.youtube.com/embed/rVoSFnAVskE?si=tgRYRsVIvHEqrUbI",
      "https://www.youtube.com/embed/gcvAkxayv0c?si=XrXi4cPs7oLTAP5-",
    ],
    [
      "https://www.youtube.com/embed/Q5r9tt-HYsM?si=isY8E_OgaLfaGrgo",
      "https://www.youtube.com/embed/-FvBQSXmQx0?si=3RY8tIyG7-ksMO_s",
      "https://www.youtube.com/embed/uuAjnK34HUk?si=OaenBiCFIfww_HXh",
      "https://www.youtube.com/embed/PtTUBHzvHek?si=Px_dCaObTHFLuBeW",
      "https://www.youtube.com/embed/MiYIH_pJe3c?si=1EeBZJcF8L18_XGJ",
      "https://www.youtube.com/embed/oHTTbzsiAQk?si=mk-60Ld9pcItyk7K",
      "https://www.youtube.com/embed/oXvtfOIg-ME?si=DvuMdFxx8JQZ96Dx",
      "https://www.youtube.com/embed/H7BnkGs31vQ?si=nqJfhQuSCXigxEAU",
    ],
  ];

  return (
    <Box className="HomePage">
      <Hero />
      <About />
      <Links />
      <Box id="breakdowns" sx={{ padding: "24px 0 48px" }}>
        <Box sx={{ maxWidth: "676px", margin: "0 auto" }}>
          <Typography variant="h2" sx={{ textAlign: "center" }}>
            Breakdowns
          </Typography>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="breakdowns by show"
          >
            <Tab label="Foundation" {...a11yProps(0)} />
            <Tab label="Severance" {...a11yProps(1)} />
            <Tab label="Drops of God" {...a11yProps(2)} />
            {/* <Tab label="Utopia" {...a11yProps(3)} /> */}
          </Tabs>
          <Stack spacing={4} alignItems="center" sx={{ padding: "12px 0 0" }}>
            {videoLinks[value].map((link) => (
              <iframe
                key={link}
                width={width}
                height={width * 0.5625}
                src={link}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default HomePage;
