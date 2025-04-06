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
import LightModeIcon from "@mui/icons-material/LightMode";
// import LanguageButton from "./Buttons/LanguageButton";
// import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";
import { useTheme } from "@mui/material/styles";

const drawerWidth = 240;

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // const { t } = useTranslation();
  const theme = useTheme();
  console.log("theme", theme);
  const { currentTheme, toggleTheme } = useContext(ThemeContext);
  console.log(currentTheme);
  const navItems = [
    { label: "Tech & Gadgets" },
    { label: "Sports & Fitness" },
    { label: "Finance & Insurance" },
    { label: "About" },
    {
      label: "mode",
      icon: {
        dark: <BedtimeTwoToneIcon sx={{ color: "#000000", fill: "#121212", cursor: "pointer" }} />,
        light: <LightModeIcon sx={{ color: "#FFFFFF", fill: "#FFFFFF", cursor: "pointer" }} />,
      },
      toggler: true,
    },
    // { label: t("language"), icon: <LanguageButton /> },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const webNavBar = () => (
    <AppBar
      component="nav"
      // position="fixed"
      sx={{
        boxShadow: "none",
        backdropFilter: "blur(10px)",
        "& .MuiBox-root": { padding: "0px" },
        color: theme.palette.mode === "dark" ? "#fff" : "#0D3483",
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          backgroundColor:
            theme.palette.mode === "dark" ? "#1E1E1E" : "#ffffff",
          width: "100%",
          pr: 3,
          pl: 2,
          color: theme.palette.mode === "dark" ? "#fff" : "#0D3483",
          borderBottom: ".5px solid #121212"
        }}
      >
        {/* mobile navbar */}
        <Box
          sx={{
            display: { xs: "flex", sm: "none" },
            justifyContent: "space-between",
            width: "100%",
            px: 2,
            // height: '70px',
            // margin: '20px'
          }}
        >
          <MenuIcon
            fontSize="large"
            sx={{
              cursor: "pointer",
              width: "24px",
              height: "24px",
              marginTop: "10px",
            }}
            onClick={handleDrawerToggle}
          />
          <img
            src={`/assets/inforush-${currentTheme}-logo.svg`}
            style={{ height: "40px", objectFit: "contain" }}
            alt="logo"
          />
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {currentTheme === "dark" ? (
              <LightModeIcon sx={{ cursor: "pointer" }} onClick={toggleTheme} />
            ) : (
              <BedtimeTwoToneIcon
                sx={{ cursor: "pointer" }}
                onClick={toggleTheme}
              />
            )}
            {/* <LanguageButton /> */}
          </Box>
        </Box>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            display: { xs: "none", sm: "block" },
            padding: "0px",
          }}
        >
          {/* <h1>InfoRush</h1> */}
          <Box style={{ marginTop: "7px" }}>
            <img
              src={`/assets/inforush-${currentTheme}-logo.svg`}
              width="200px"
              height="60px"
              alt="logo"
            />
          </Box>
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 5 }}>
          {navItems.map((item) => (
            <Box
              key={item.label}
              sx={{
                color: theme.palette.mode === "dark" ? "#fff" : "#0D3483",
                fontSize: "12px",
                marginTop: "10px",
              }}
            >
              {/* Show icon if available and dont display label for icons */}
              {item.icon && (
                <Box
                  sx={{
                    color: theme.palette.mode === "dark" ? "#fff" : "#0D3483",
                  }}
                  onClick={item.icon && item.toggler ? toggleTheme : undefined}
                >
                  {currentTheme === "dark" ? item.icon.light : item.icon.dark}
                </Box>
              )}
              <Box
                sx={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  transition: "box-shadow 0.3s ease-in-out",
                  ":hover": {
                    boxShadow:
                      theme.palette.mode === "dark"
                        ? "0px 2px 6px rgba(255, 255, 255, 0.9)"
                        : "0px 2px 6px #0D3483",
                    fontSize: "20px",
                    transform: "scale(1.05)",
                    padding: "5px",
                  },
                }}
              >
                {item.icon && item.label ? "" : item.label}
              </Box>
            </Box>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );

  const mobileNavBar = () => (
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
            // position: "fixed",
          },
        }}
      >
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
          <img
            src={`/assets/inforush-${currentTheme}-logo.svg`}
            style={{ height: "60px", objectFit: "contain" }}
            alt="logo"
          />
          <Divider />
          <List>
            {navItems.map((item) => (
              <React.Fragment key={item.label}>
                <ListItem key={item.label} disablePadding>
                  <ListItemButton
                    key={item.label}
                    sx={{ textAlign: "center" }}
                    onClick={item.toggler ? toggleTheme : undefined}
                  >
                    {item.label !== "mode" && (
                      <ListItemText
                        key={item.label}
                        primary={item.label}
                        sx={{ fontSize: "14px" }}
                      />
                    )}
                  </ListItemButton>
                </ListItem>
                {item.label !== "mode" && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </Box>{" "}
      </Drawer>
    </nav>
  );

  return (
    <Box sx={{ padding: "0px" }}>
      <CssBaseline />
      {webNavBar()}
      {mobileNavBar()}
    </Box>
  );
}
