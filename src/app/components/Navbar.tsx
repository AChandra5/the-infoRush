/* eslint-disable @next/next/no-img-element */
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
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/navigation";
import { trackClickEvent } from "@/events/gtagEvents/CTATracker";
import { usePathname } from "next/navigation";
import { Slide } from "@mui/material";


const drawerWidth = 240;

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const router = useRouter();
  const theme = useTheme();
  const { currentTheme, toggleTheme } = useContext(ThemeContext);
  const pathname = usePathname();

  const navItems = [
    { label: "Tech & Gadgets", path: "/categories/tech-gadgets" },
    { label: "Sports & Fitness", path: "/categories/sports-fitness" },
    { label: "Finance & Insurance", path: "/categories/finance-insurance" },
    { label: "About", path: "" },
    {
      label: "mode",
      icon: {
        dark: (
          <BedtimeTwoToneIcon
            sx={{ color: "#000000", fill: "#121212", cursor: "pointer" }}
          />
        ),
        light: (
          <LightModeIcon
            sx={{ color: "#FFFFFF", fill: "#FFFFFF", cursor: "pointer" }}
          />
        ),
      },
      toggler: true,
    },
  ];

  const handleDrawerToggle = () => {
    trackClickEvent({
      action: "click",
      category: "navigation",
      label: "menu_opened_mobile",
    });
    setMobileOpen((prevState) => !prevState);
  };

  const webNavBar = () => (
    <AppBar
      component="nav"
      position="fixed" // 👈 Makes it overlay the content
      elevation={0}
      sx={{
        backgroundColor:
          theme.palette.mode === "dark"
            ? "rgba(30,30,30,0.6)"
            : "rgba(255,255,255,0.6)",
        backdropFilter: "blur(12px)", // 👈 This creates the glass effect
        WebkitBackdropFilter: "blur(12px)", // ✅ Safari support
        boxShadow: "none",
        color: theme.palette.mode === "dark" ? "#fff" : "#0D3483",
        zIndex: 1201, // above drawers and content
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          backgroundColor:
            theme.palette.mode === "dark" ? "#1E1E1E" : "#ffffff",
          opacity: 0.9,
          width: "100%",
          pr: 3,
          pl: 2,
          color: theme.palette.mode === "dark" ? "#fff" : "#0D3483",
          minHeight: '65px'
        }}
      >
        {/* mobile navbars*/}
        <Box
          sx={{
            display: { xs: "flex", sm: "none" },
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            px: 2,
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
            style={{ height: "40px", objectFit: "contain", cursor: "pointer" }}
            alt="logo"
            onClick={() => {
              trackClickEvent({
                action: "click",
                category: "navigation",
                label: "home_logo_clicked_mobile",
              });
              setTimeout(() => {
                router.push("/");
              }, 1000);
            }}
          />
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              alignItems: "left",
              justifyContent: "center",
            }}
          >
            {currentTheme === "dark" ? (
              <LightModeIcon
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  trackClickEvent({
                    action: "click",
                    category: "theme_usage",
                    label: `theme toggled from ${currentTheme}`,
                  });
                  toggleTheme();
                }}
              />
            ) : (
              <BedtimeTwoToneIcon
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  trackClickEvent({
                    action: "click",
                    category: "theme_usage",
                    label: `theme toggled from ${currentTheme}`,
                  });
                  toggleTheme();
                }}
              />
            )}
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
          <Box style={{ marginTop: "7px" }}>
            <img
              src={`/assets/inforush-${currentTheme}-logo.svg`}
              width="200px"
              height="60px"
              alt="logo"
              style={{ cursor: "pointer" }}
              onClick={() => {
                trackClickEvent({
                  action: "click",
                  category: "navigation",
                  label: `home_logo_clicked_web`,
                });
                router.push("/");
              }}
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
                  transition: "box-shadow 0.5s ease-in-out",
                  borderBottom:
                  item.path && pathname.includes(item.path)
                    ? "2px solid #31cccc"
                    : "none",                  
                    ":hover": {
                    boxShadow:
                      theme.palette.mode === "dark"
                        ? "0px 2px 6px rgba(255, 255, 255, 0.9)"
                        : "0px 2px 6px #0D3483",
                    fontSize: "20px",
    transition: "transform 0.5s ease",
                    transform: "scale(1.05)",
                    padding: "5px",
                    borderRadius: "10px",
                  },
                }}
                onClick={() => {
                  trackClickEvent({
                    action: "click",
                    category: "navigation_from_nav_bar_to_gist",
                    label: item.label,
                  });

                  if (!item.toggler && item.label === "About") {
                    window.scrollTo({
                      top: document.body.scrollHeight,
                      behavior: "smooth",
                    });
                  } else if (!item.toggler && item.path) {
                    router.push(item.path);
                  }
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
          },
          transition: "transform 1s ease-in-out, opacity 0.3s ease-in-out",        }}
      >
        <Slide direction="right" in={mobileOpen} mountOnEnter unmountOnExit>
        <Box
          onClick={handleDrawerToggle}
          sx={{ textAlign: "center", cursor: "pointer" }}
        >
          <img
            src={`/assets/inforush-${currentTheme}-logo.svg`}
            style={{ height: "60px", objectFit: "contain" }}
            alt="logo"
          />
          {/* <Divider /> */}
          <List>
            {navItems.map((item) => (
              <React.Fragment key={item.label}>
                <ListItem key={item.label} disablePadding>
                  <ListItemButton
                    key={item.label}
                    sx={{ textAlign: "left" }}
                    onClick={() => {
                      if (item.toggler) toggleTheme();
                      else if (item.path) router.push(item.path);
                      else if (!item.toggler && item.label === "About") {
                        window.scrollTo({
                          top: document.body.scrollHeight,
                          behavior: "smooth",
                        });
                      }
                    }}
                  >
                    {item.label !== "mode" && (
                      <ListItemText
                        key={item.label}
                        primary={item.label}
                        sx={{ fontSize: "14px", 
                          color:
                          item.path && pathname.includes(item.path)
                            ? " #31cccc"
                            : "none", }}
                      />
                    )}
                  </ListItemButton>
                </ListItem>
                {item.label !== "mode" && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </Box>
        </Slide>
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
