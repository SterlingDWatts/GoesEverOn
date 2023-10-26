import * as React from "react";
// mui
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
// components
import AboutCopy from "./AboutCopy";
// svgs
import Facebook from "../../svgs/Facebook";
import Instagram from "../../svgs/Instagram";
import Spotify from "../../svgs/Spotify";
import TikTok from "../../svgs/TikTok";
import Twitter from "../../svgs/Twitter";
import YouTube from "../../svgs/YouTube";
// images
import roadJustWordsClearBackground from "../../assets/roadJustWordsClearBackground.png";
import markSterlingWedding from "./markSterlingWedding.png";
import blueMark from "./blue_mark.png";
import blueSterling from "./blue_sterling.png";

import "./HomePage.css";

function HomePage() {
  return (
    <Box className="HomePage">
      <Box id="home">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background:
              "radial-gradient(circle, rgba(75,75,75,1) 0%, rgba(44,44,44,1) 100%)",
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
            <img
              className="img__box"
              src={markSterlingWedding}
              alt="Mark and Sterling"
              width="100%"
            />

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
              <img
                className="logo"
                src={roadJustWordsClearBackground}
                alt="Logo"
              />
              <Box sx={{ maxWidth: "40%", paddingTop: "24px" }}>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "white", lineHeight: 1 }}
                >
                  Journey through great TV, movies, music, and more with us!
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        id="about"
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
          <Typography
            variant="body1"
            sx={{ color: "white", lineHeight: 1.2, textAlign: "center" }}
          >
            <AboutCopy />
          </Typography>
        </Box>
        <img className="blue" src={blueSterling} alt="Sterling" />
      </Box>
      <Box sx={{ padding: "48px", display: { lg: "none" } }}>
        <Typography variant="body1">
          <AboutCopy />
        </Typography>
      </Box>
      <Box
        id="links"
        sx={{
          padding: "48px",
          backgroundColor: "#D8DDD6",
        }}
      >
        <Stack
          spacing={4}
          sx={{
            maxWidth: "676px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Typography
            variant="h2"
            sx={{ textAlign: "center", fontWeight: 600 }}
          >
            Connect with us!
          </Typography>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            href="https://www.youtube.com/@GoesEverOn"
            startIcon={
              <SvgIcon>
                <YouTube fill="white" />
              </SvgIcon>
            }
          >
            youtube
          </Button>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            href="https://www.tiktok.com/@GoesEverOn"
            startIcon={
              <SvgIcon>
                <TikTok fill="white" />
              </SvgIcon>
            }
          >
            TikTok
          </Button>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            href="https://twitter.com/GoesEverOn"
            startIcon={
              <SvgIcon>
                <Twitter fill="white" />
              </SvgIcon>
            }
          >
            Twitter
          </Button>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            href="https://www.instagram.com/GoesEverOn"
            startIcon={
              <SvgIcon>
                <Instagram fill="white" />
              </SvgIcon>
            }
          >
            Instagram
          </Button>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            href="https://www.facebook.com/GoesEverOnAndOn"
            startIcon={
              <SvgIcon>
                <Facebook fill="white" />
              </SvgIcon>
            }
          >
            Facebook
          </Button>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            href="https://open.spotify.com/show/3Bop2xzIH9wK4yZfva2CAw"
            startIcon={
              <SvgIcon>
                <Spotify fill="white" />
              </SvgIcon>
            }
          >
            Spotify
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default HomePage;
