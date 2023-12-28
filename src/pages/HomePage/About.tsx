import * as React from "react";
// mui
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// components
import AboutCopy from "./AboutCopy";
// images
import blueMark from "../../assets/blue_mark.png";
import blueSterling from "../../assets/blue_sterling.png";

export default function About() {
  return (
    <Box id="about">
      <Box sx={{ padding: "48px", display: { lg: "none" } }}>
        <Typography variant="body1">
          <AboutCopy />
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "#577f7e",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "24px 0px 0px",
        }}
      >
        <img className="blue" src={blueMark} alt="Mark" />
        <Box sx={{ width: "35vw", display: { xs: "none", lg: "revert" } }}>
          <Typography variant="body1" sx={{ color: "white", lineHeight: 1.2, textAlign: "center" }}>
            <AboutCopy />
          </Typography>
        </Box>
        <img className="blue" src={blueSterling} alt="Sterling" />
      </Box>
    </Box>
  );
}
