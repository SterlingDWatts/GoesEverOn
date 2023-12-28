import * as React from "react";
// mui
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
// svgs
import Facebook from "../../svgs/Facebook";
import Instagram from "../../svgs/Instagram";
import Spotify from "../../svgs/Spotify";
import TikTok from "../../svgs/TikTok";
import Twitter from "../../svgs/Twitter";
import YouTube from "../../svgs/YouTube";

interface LinkProps {
  icon: React.ReactNode;
  title: string;
  href?: string;
  target?: string;
  onClick?: () => void;
}

function Link({ icon, title, ...props }: LinkProps) {
  return (
    <Button variant="contained" size="large" color="secondary" {...props} startIcon={<SvgIcon>{icon}</SvgIcon>}>
      {title}
    </Button>
  );
}

export default function Links() {
  const links = [
    {
      title: "youtube",
      href: "https://www.youtube.com/@GoesEverOn",
      target: "_blank",
      icon: <YouTube fill="white" />,
    },
    {
      title: "TikTok",
      href: "https://www.tiktok.com/@goeseveron?_t=8gqLnTebFpT&_r=1",
      target: "_blank",
      icon: <TikTok fill="white" />,
    },
    { title: "Twitter", href: "https://twitter.com/GoesEverOn", target: "_blank", icon: <Twitter fill="white" /> },
    {
      title: "Instagram",
      href: "https://www.instagram.com/GoesEverOn",
      target: "_blank",
      icon: <Instagram fill="white" />,
    },
    {
      title: "Facebook",
      href: "https://www.facebook.com/GoesEverOnAndOn",
      target: "_blank",
      icon: <Facebook fill="white" />,
    },
    {
      title: "Spotify",
      href: "https://open.spotify.com/show/3Bop2xzIH9wK4yZfva2CAw",
      target: "_blank",
      icon: <Spotify fill="white" />,
    },
  ];
  return (
    <Box id="links" sx={{ padding: "48px" }}>
      <Stack
        spacing={4}
        sx={{
          maxWidth: "676px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Typography variant="h2" sx={{ textAlign: "center", fontWeight: 600 }}>
          Connect with us!
        </Typography>
        {links.map((link) => (
          <Link key={link.title} {...link} />
        ))}
      </Stack>
    </Box>
  );
}
