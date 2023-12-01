import * as React from "react";
// mui
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
// components
import Copyright from "../Copyright/Copyright";
import DrawerAppBar from "../DrawerAppBar/DrawerAppBar";

interface PageProps {
  children: React.ReactNode;
  className: string;
  noTopPadding?: boolean;
}

export default function Page({ children, className, noTopPadding }: PageProps) {
  return (
    <Stack
      className={className}
      direction="column"
      justifyContent="space-between"
      component={Box}
      sx={{ minHeight: "100svh" }}
    >
      <Box sx={{ paddingTop: !noTopPadding ? { xs: "56px", sm: "64px" } : "0px" }}>
        <DrawerAppBar />
        {children}
      </Box>
      <Copyright />
    </Stack>
  );
}
