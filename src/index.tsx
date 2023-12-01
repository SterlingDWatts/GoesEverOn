import * as React from "react";
import ReactDOM from "react-dom/client";
import { Link as RouterLink, LinkProps as RouterLinkProps, BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { LinkProps } from "@mui/material/Link";
import App from "./App";
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

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
