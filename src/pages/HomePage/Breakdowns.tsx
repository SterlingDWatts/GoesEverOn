import * as React from "react";
// mui
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Breakdowns() {
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
      "https://www.youtube.com/embed/k3RuBe4HwpM?si=FZJVsoMPeLnOzyfi", // 1
      "https://www.youtube.com/embed/tTUII4-SUX4?si=EEH_P4Wea2QZBpiu", // 2
      "https://www.youtube.com/embed/6N_Vu8bEXPw?si=7YlRBw4uVfML0MK4", // 3
      "https://www.youtube.com/embed/uk3JpkkrkgE?si=3i7B47hARTtOtnr6", // 4
      "https://www.youtube.com/embed/m55jjwHwF4M?si=iucazK7NlKQcD7wr", // 5
      "https://www.youtube.com/embed/EcsPzGkUUfY?si=bcoex1-tCi09kOE1", // 6
      "https://www.youtube.com/embed/tKMLXHeKgcc?si=SOXwKaxKTY8zeBqk", // 7
      "https://www.youtube.com/embed/AZIjDjfDIaw?si=1rAQpxFG7dyTlPKE", // 8
      "https://www.youtube.com/embed/C-SrjaYz1T4?si=qviHB2H9qZicFCOY", // 9
    ],
    [
      "https://www.youtube.com/embed/E79Uba0R1js?si=hutkBvakh9AN4LGw", // 1
      "https://www.youtube.com/embed/v4xZAbORNRI?si=xep_pheiB7swUZCL", // 2
      "https://www.youtube.com/embed/NXlN4qOv_1c?si=QDgZHZDMcVDfUf6s", // 3
      "https://www.youtube.com/embed/0DoHrEka2-A?si=P2R_PBsIMCGGcGCz", // 4
      "https://www.youtube.com/embed/yMKtecU4wPw?si=sznOLdDvO21qcfg2", // 5
      "https://www.youtube.com/embed/DbYOtepjz40?si=YzXPUjJEeSO4zyQL", // 6
      "https://www.youtube.com/embed/rVoSFnAVskE?si=tgRYRsVIvHEqrUbI", // 7
      "https://www.youtube.com/embed/gcvAkxayv0c?si=XrXi4cPs7oLTAP5-", // 8
      "https://www.youtube.com/embed/BWN-lz07ZVg?si=fMAJrdmHS5g21BEd", // 9
    ],
    [
      "https://www.youtube.com/embed/Q5r9tt-HYsM?si=isY8E_OgaLfaGrgo", // 1
      "https://www.youtube.com/embed/-FvBQSXmQx0?si=3RY8tIyG7-ksMO_s", // 2
      "https://www.youtube.com/embed/uuAjnK34HUk?si=OaenBiCFIfww_HXh", // 3
      "https://www.youtube.com/embed/PtTUBHzvHek?si=Px_dCaObTHFLuBeW", // 4
      "https://www.youtube.com/embed/MiYIH_pJe3c?si=1EeBZJcF8L18_XGJ", // 5
      "https://www.youtube.com/embed/oHTTbzsiAQk?si=mk-60Ld9pcItyk7K", // 6
      "https://www.youtube.com/embed/oXvtfOIg-ME?si=DvuMdFxx8JQZ96Dx", // 7
      "https://www.youtube.com/embed/H7BnkGs31vQ?si=nqJfhQuSCXigxEAU", // 8
    ],
    [
      "https://www.youtube.com/embed/yMLCZCzIQK0?si=g1odZV52CLoD-MLI", // 1
      "https://www.youtube.com/embed/OmsFpIRxhtQ?si=CVMOysiS3FWVogz_", // 2
      "https://www.youtube.com/embed/_5z5tUzo63Q?si=vfA-p0uM5LinOFPU", // 3
      "https://www.youtube.com/embed/LgvPzZjXBqA?si=_ySetFUmn_VLfiXq", // 4
      "https://www.youtube.com/embed/n2FeVDd_sJU?si=xHEoP5oC1SArztP5", // 5
      "https://www.youtube.com/embed/dUcDP_IFaDA?si=x5sekKs9sZ1nufqJ", // 6
    ],
  ];
  return (
    <Box id="breakdowns" sx={{ padding: "24px 8px 48px", backgroundColor: "#D8DDD6" }}>
      <Box sx={{ maxWidth: "676px", margin: "0 auto" }}>
        <Typography variant="h2" sx={{ textAlign: "center", fontWeight: 600 }}>
          Breakdowns
        </Typography>
        <Typography variant="body1" textAlign="center">
          Mark and Sterling dive deep into an episode once a week on Mondays.
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
          <Tab label="Utopia" {...a11yProps(3)} />
        </Tabs>
        <Stack spacing={4} alignItems="center" sx={{ padding: "12px 0 0" }}>
          <Typography variant="body1">
            {
              [
                "A complex saga of humans scattered on planets throughout the galaxy all living under the rule of the Galactic Empire.",
                "Mark leads a team of office workers whose memories have been surgically divided between their work and personal lives. When a mysterious colleague appears outside of work, it begins a journey to discover the truth about their jobs.",
                "A woman discovers the world's greatest wine collection that's left by her estranged father and competes against his protege to claim her inheritance.",
                "After a group of people, who meet online, discover a bizarre graphic novel which seems to hold mysterious answers, they find themselves being tracked down by a merciless organization known merely as 'The Network'.",
              ][value]
            }
          </Typography>
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
  );
}
