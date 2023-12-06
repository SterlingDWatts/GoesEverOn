import * as React from "react";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import {
  createBrowserRouter,
  Link as RouterLink,
  LinkProps as RouterLinkProps,
  RouterProvider,
} from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { LinkProps } from "@mui/material/Link";
import UserProvider from "./contexts/userContext";
import App from "./App";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import "./index.css";

const LinkBehavior = React.forwardRef<HTMLAnchorElement, Omit<RouterLinkProps, "to"> & { href: RouterLinkProps["to"] }>(
  function LinkBehavior({ href, ...other }, ref) {
    return <RouterLink data-testid="custom-link" ref={ref} to={href} {...other} />;
  },
);

const theme = createTheme({
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      } as LinkProps,
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
  palette: {
    primary: {
      main: "#587F7E",
    },
    secondary: {
      main: "#8D7165",
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/*",
    element: <App />,
    children: [
      { path: "signin", element: <SignInPage /> },
      { path: "", element: <HomePage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ""}>
      <ThemeProvider theme={theme}>
        <UserProvider>
          <RouterProvider router={router} />
        </UserProvider>
      </ThemeProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>,
);
