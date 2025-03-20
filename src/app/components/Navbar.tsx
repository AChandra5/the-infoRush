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
      <h1 className="text-4xl font-bold text-blue-600">Tailwind is Working!</h1>
      <Typography variant="h6" sx={{ my: 2 }}>
        Family & Minimal Lifestyle
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              {!item.icon && item.label && (
                <ListItemText primary={item.label} sx={{fontSize: '14px'}}/>
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{padding: '0px'}}>
      <CssBaseline />
      <AppBar component="nav" position="sticky" 
      sx={{
        background: "transparent",
        boxShadow: "none", 
        backdropFilter: "blur(10px)",
        "& .MuiBox-root": { padding: "0px" },
      }}>
        <Toolbar
          sx={{
            backgroundColor: "#1B2538",
            width: "100%",
            padding: "0px"
          }}
        >
          <Box
            sx={{
              display: { xs: "flex", sm: "none" },
              justifyContent: "space-between",
              width: "inherit",
            }}
          >
            <MenuIcon  onClick={handleDrawerToggle} />
            <Box sx={{display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center'}}>
              <BedtimeTwoToneIcon sx={{ fill: "#FBAD76", height: '.7em' }} />
              <LanguageButton />
            </Box>
          </Box>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <h1>Family & Minimal Lifestyle</h1>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 5 }}>
            {navItems.map((item) => (
              <Box key={item.label} sx={{ color: "#fff", fontSize: '12px', marginTop: '10px' }}>
                {/* Show icon if available and dont display label for icons */}
                {item.icon && <Box sx={{ color: "#fff" }}>{item.icon}</Box>}
                <Box>{item.icon && item.label ? "" : item.label}</Box>
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
      {/* <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box> */}
    </Box>
  );
}
