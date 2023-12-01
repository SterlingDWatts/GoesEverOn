import * as React from "react";
// mui
import Box from "@mui/material/Box";
// components
import SignIn from "../../components/SignIn/SignIn";

function SignInPage() {
  return (
    <Box className="SignInPage" sx={{ paddingTop: { xs: "56px", sm: "64px" } }}>
      <SignIn />
    </Box>
  );
}

export default SignInPage;
