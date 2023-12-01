import * as React from "react";
// mui
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
// components
import Page from "../../components/Page/Page";
// images
import goofy from "../../assets/GoofySmall.png";

function NotFoundPage() {
  const theme = useTheme();
  return (
    <Page className="NotFoundPage">
      <Box
        sx={{
          height: "100svh",
          backgroundColor: "#d8ddd6",
          backgroundImage: `url("${goofy}")`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
        }}
      >
        <Stack
          alignItems="center"
          sx={{ padding: "30px", backgroundColor: "rgba(216, 221, 214, 0.5)", height: "100%", width: "100%" }}
        >
          <Typography variant="h1" sx={{ fontSize: "120px", fontWeight: "600" }}>
            Oops!
          </Typography>
          <Typography variant="h6">We can&rsquo;t seem to find the page you are looking for.</Typography>
          <Link href="/#home" color={theme.palette.info.main} sx={{ fontWeight: "600" }}>
            Go back home
          </Link>
        </Stack>
      </Box>
    </Page>
  );
}

export default NotFoundPage;
