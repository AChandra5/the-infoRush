"use client";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { useContext, useEffect } from "react";
import ThemeContextProvider, { ThemeContext } from "../../public/context/ThemeContextProvider";
import { darkTheme, lightTheme, Themes } from "../../public/utils/constants";
import i18n from "../../public/Locales/i18n";
import { I18nextProvider } from "react-i18next";
import Navbar from "./components/Navbar";
import CssBaseline from "@mui/material/CssBaseline";

function AppWithTheme({ children }: { children: React.ReactNode }) {
  const { currentTheme } = useContext(ThemeContext);
  const theme = currentTheme === Themes.DARK ? darkTheme : lightTheme;
  useEffect(() => {
    i18n.changeLanguage("en");
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline /> {/* Ensures Material UI styles are correctly applied */}
      <I18nextProvider i18n={i18n}>
        <html lang="en">
          <body>
            <Navbar />
            <div>{children}</div>
          </body>
        </html>
      </I18nextProvider>
    </MuiThemeProvider>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeContextProvider>
      <AppWithTheme>{children}</AppWithTheme>
    </ThemeContextProvider>
  );
}
