import { createTheme } from "@mui/material/styles";

export const Themes = {
  LIGHT: "light",
  DARK: "dark",
};

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#ffffff",
      paper: "#f5f5f5",
      // @ts-ignore: Custom property 'hero' is not part of PaletteBackground
      hero: "#FF8C7C", // Custom key added
    },
    text: {
      primary: "#000000",
      secondary: "#555555",
    },
  },
  typography: {
    fontWeightBold: 700,
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
      paper: "#1e1e1e",
      // @ts-ignore: Custom property 'hero' is not part of PaletteBackground
      hero: "#17191B", // Custom key added
    },
    text: {
      primary: "#ffffff",
      secondary: "#aaaaaa",
    },
  },
  typography: {
    fontWeightBold: 700,
  },
});
