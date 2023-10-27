import * as React from "react";
// mui
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Shorts() {
  const videos = [
    { src: "https://www.youtube.com/embed/MlkYMbKPeLo", title: "I Will Remember You" },
    {
      src: "https://www.youtube.com/embed/ehPlzItg9JY",
      title: "Did Insomniac Games Capture Lightning in a Bottle Twice? #spiderman #begreatertogether #spiderman2",
    },
    { src: "https://www.youtube.com/embed/l3clMx8Tcno", title: "Drops of God wine service: Is it Accurate?" },
    { src: "https://www.youtube.com/embed/vLnK2E-PSKc", title: "Severance Teaser" },
    {
      src: "https://www.youtube.com/embed/htJ24Cjfv9w",
      title: "One of the best Underrated Actors of our Generation.#Foundation #leepace #marvel #lordoftherings",
    },
  ];
  return (
    <Box id="shorts" textAlign="center" sx={{ padding: "24px" }}>
      <Typography variant="h2" sx={{ fontWeight: 600 }}>
        Shorts
      </Typography>

      <Typography variant="body1" textAlign="center">
        Here is a little taste of some of our most recent shorts, if you want more click{" "}
        <Link href="https://www.youtube.com/@GoesEverOn/shorts">here</Link>
      </Typography>
      <Box sx={{ overflowY: "scroll", margin: "12px 0 0" }}>
        <Stack spacing={4} direction="row">
          {videos.map((video) => (
            <iframe
              key={video.src}
              width="428"
              height="761"
              src={video.src}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
