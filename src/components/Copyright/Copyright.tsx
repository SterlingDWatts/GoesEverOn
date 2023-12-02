import * as React from "react";
import Link from "@mui/material/Link";
import Typography, { TypographyProps } from "@mui/material/Typography";

export default function Copyright(props: TypographyProps) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="https://goeseveron.com/">
        Road Goes Ever On And On
      </Link>
      {" 2023."}
    </Typography>
  );
}
