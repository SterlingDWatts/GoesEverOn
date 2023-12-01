import * as React from "react";
// mui
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Slide from "@mui/material/Slide";
// images
import roadCircle from "../../assets/Road_circle.png";
import roadJustWordsClearBackground from "../../assets/roadJustWordsClearBackground.png";

import "./DrawerAppBar.css";

const drawerWidth = 240;
const navItems = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Links", href: "#links" },
  { title: "Breakdowns", href: "#breakdowns" },
  { title: "Shorts", href: "#shorts" },
];

export default function DrawerAppBar() {
  const theme = useTheme();
  const isSmallOrLarger = useMediaQuery(theme.breakpoints.up("sm"));

  const isNotAtTop = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const scrollTrigger = useScrollTrigger({});

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box className="DrawerAppBar" onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <img className="words-logo" alt="road goes ever on and on" src={roadJustWordsClearBackground} />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton href={item.href} sx={{ textAlign: "center" }}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Slide appear={false} direction="down" in={isSmallOrLarger || !scrollTrigger}>
        <AppBar component="nav" color={isNotAtTop ? "default" : "transparent"} elevation={isNotAtTop ? 4 : 0}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon sx={{ color: isNotAtTop ? "default" : "white" }} />
            </IconButton>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
              }}
            >
              <img className="circle-logo" src={roadCircle} alt="Logo" height="36px" />
            </Box>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button key={item.title} href={item.href} sx={{ color: isNotAtTop ? "#000" : "#fff" }}>
                  {item.title}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </Slide>

      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
