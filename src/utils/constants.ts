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
      // hero: "#FF8C7C", // Custom key added
    },
    text: {
      primary: "#0D3483",
      secondary: "#555555",
    },
  },
  typography: {
    fontWeightBold: 700,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
          transition: "background-color 0.2s ease, color 0.2s ease",
        },
      },
    },
  },
});


export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    text: {
      primary: "#ffffff",
      secondary: "#aaaaaa",
    },
    background: {
            default: "#121212",
            // paper: "#1e1e1e",
            // hero: "#17191B", // Custom key added
          },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
          transition: "background-color 0.2s ease, color 0.2s ease",
        },
      },
    },
  },
});


export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
console.log("GA_MEASUREMENT_ID", GA_MEASUREMENT_ID)