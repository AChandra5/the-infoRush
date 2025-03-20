"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import BedtimeTwoToneIcon from "@mui/icons-material/BedtimeTwoTone";
import LanguageButton from "./Buttons/LanguageButton";
import { useTranslation } from "react-i18next";

const drawerWidth = 240;

export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { t } = useTranslation();

  const navItems = [
    { label: t("home") },
    { label: t("categories") },
    { label: t("about") },
    { label: t("mode"), icon: <BedtimeTwoToneIcon /> },
    { label: t("language"), icon: <LanguageButton /> },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Family & Minimal Lifestyle
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              {item.icon && (
                <Box sx={{ color: "#fff", mr: 1 }}>{item.icon}</Box>
              )}
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ background: "transparent" }}>
        <Toolbar
          sx={{
            backgroundColor: "#1B2538",
            borderRadius: "0 0px 5px 5px",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: { xs: "flex", sm: "none" },
              justifyContent: "space-between",
              width: "inherit",
            }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
            <BedtimeTwoToneIcon sx={{ fill: "#FBAD76" }} />
          </Box>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Family & Minimal Lifestyle
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
            {navItems.map((item) => (
              <Box key={item.label} sx={{ color: "#fff" }}>
                {/* Show icon if available and dont display label for icons */}
                {item.icon && <Box sx={{ color: "#fff" }}>{item.icon}</Box>}
                {item.icon && item.label ? "" : item.label}
              </Box>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
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
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

