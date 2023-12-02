import * as React from "react";
import { useNavigate } from "react-router-dom";
// mui
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
// google auth
import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { decodeToken } from "react-jwt";
import { Context, User } from "../../contexts/userContext";

export default function SignIn() {
  const navigate = useNavigate();
  const context = React.useContext(Context);

  if (!context?.setUser) {
    throw new Error("UserContext is cannot be used outside of UserProvider");
  }

  React.useEffect(() => {
    if (context.user?.name) {
      navigate("/");
    }
  }, [context]);

  const handleResponse = (response: CredentialResponse) => {
    if (response.credential) {
      const token = decodeToken(response.credential || "");

      context.setUser(token as User);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
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
