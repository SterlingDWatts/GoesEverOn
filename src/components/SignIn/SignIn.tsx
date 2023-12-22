import * as React from "react";
import { Navigate } from "react-router-dom";
// mui
import { useTheme } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
// google auth
import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import useUser from "../../hooks/useUser";
import useToast from "../../hooks/useToast";
import authApiService from "../../services/auth-api-service";
import tokenService from "../../services/token-service";
import { User } from "../../contexts/userContext";

export default function SignIn() {
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const { setUser, user } = useUser();
  const { setToast } = useToast();
  const theme = useTheme();

  const handleResponse = async ({ credential = "" }: CredentialResponse) => {
    setError("");
    setLoading(true);

    const payload = tokenService.parseJwt<User>(credential);
    if (!payload) {
      setToast({ message: "Failed to login", severity: "error" });
      return setError("Failed to login");
    }

    try {
      const response = await authApiService.postLogin({
        user_email: (payload as User).email,
        user_sub: (payload as User).sub,
      });
      setUser({ ...payload, ...response }, credential);
      setToast({ message: "Successfully logged in", severity: "success" });
    } catch (error) {
      console.error(error);
      setToast({ message: "Failed to login", severity: "error" });
      setError("Failed to login");
    }
    setLoading(false);
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
              setToast({ message: "Failed to login", severity: "error" });
              setError("Failed to login");
            }}
          />
        </Box>
        {error && (
          <Typography component="h1" variant="h5" color={theme.palette.error.main}>
            {error}
          </Typography>
        )}
        {loading && (
          <Typography component="h1" variant="h5">
            Loading...
          </Typography>
        )}
      </Box>
    </Container>
  );
}
