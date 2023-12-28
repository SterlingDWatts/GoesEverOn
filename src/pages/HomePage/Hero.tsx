import * as React from "react";
// mui
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import roadJustWordsClearBackground from "../../assets/roadJustWordsClearBackground.png";
import markSterlingWedding from "../../assets/markSterlingWedding.png";

export default function Hero() {
  return (
    <Box id="home">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "radial-gradient(circle, rgba(75,75,75,1) 0%, rgba(44,44,44,1) 100%)",
        }}
      >
        <Box
          sx={{
            height: "fit-content",
            maxHeight: "100vh",
            maxWidth: "1090px",
            overflow: "hidden",
            position: "relative",
            marginLeft: "24px",
          }}
        >
          <img className="img__box" src={markSterlingWedding} alt="Mark and Sterling" width="100%" />

          <Box
            sx={{
              position: "absolute",
              top: "0",
              left: "0",
              bottom: "0",
              right: "0",
              display: "flex",
              flexDirection: "column",
              paddingTop: { xs: "16vw", md: "152px" },
              alignItems: "start",
            }}
          >
            <img className="logo" src={roadJustWordsClearBackground} alt="Logo" />
            <Box sx={{ maxWidth: "40%", paddingTop: "24px" }}>
              <Typography variant="subtitle1" sx={{ color: "white", lineHeight: 1 }}>
                Journey through great TV, movies, music, and more with us!
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
