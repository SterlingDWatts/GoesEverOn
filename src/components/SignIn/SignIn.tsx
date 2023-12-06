import * as React from "react";
import { Navigate } from "react-router-dom";
// mui
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
// google auth
import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import useUser from "../../hooks/useUser";
import { decodeUserToken } from "../../utils/utils";

export default function SignIn() {
  const { setUser, user } = useUser();

  const handleResponse = ({ credential = "" }: CredentialResponse) => {
    const user = decodeUserToken(credential);
    if (user) setUser(user);
  };

  return (
    <Container component="main" maxWidth="xs">
      {user && <Navigate to="/" replace />}
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box sx={{ mt: 1 }}>
          <GoogleLogin
            onSuccess={handleResponse}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </Box>
      </Box>
    </Container>
  );
}
