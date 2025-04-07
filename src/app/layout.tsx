"use client";

import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { useContext } from "react";
import ThemeContextProvider, {
  ThemeContext,
} from "./context/ThemeContextProvider";
import { darkTheme, lightTheme, Themes } from "../utils/constants";
import i18n from "../Locales/i18n";
import { I18nextProvider } from "react-i18next";
import Navbar from "./components/Navbar";
import CssBaseline from "@mui/material/CssBaseline";
import Script from "next/script";
import { Toolbar } from "@mui/material";

function AppWithTheme({ children }: { children: React.ReactNode }) {
  const { currentTheme } = useContext(ThemeContext);
  const theme = currentTheme === Themes.DARK ? darkTheme : lightTheme;

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <I18nextProvider i18n={i18n}>
        <Navbar />
        <Toolbar />
        <main>{children}</main>
      </I18nextProvider>
    </MuiThemeProvider>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8HE80531NJ"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8HE80531NJ', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  const theme = localStorage.getItem("theme") || "light";
                  document.documentElement.classList.remove("light", "dark");
                  document.documentElement.classList.add(theme);
                  document.body.style.backgroundColor = theme === "dark" ? "#121212" : "#ffffff";
                  document.body.style.color = theme === "dark" ? "#ededed" : "#171717";
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeContextProvider>
          <AppWithTheme>{children}</AppWithTheme>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
