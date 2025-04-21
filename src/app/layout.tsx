"use client";

import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { useContext } from "react";
import ThemeContextProvider, {
  ThemeContext,
} from "./context/ThemeContextProvider";
import { darkTheme, lightTheme, Themes } from "../utils/constants";
import Navbar from "./components/Navbar";
import CssBaseline from "@mui/material/CssBaseline";
import Script from "next/script";
import { Toolbar } from "@mui/material";
import ScrollTracker from "@/events/gtagEvents/ScrollTracker";
import { GA_MEASUREMENT_ID } from "../utils/constants";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

function AppWithTheme({ children }: { children: React.ReactNode }) {
  const { currentTheme } = useContext(ThemeContext);
  const theme = currentTheme === Themes.DARK ? darkTheme : lightTheme;

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Toolbar />
      <main>{children}</main>
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "The InfoRush",
              url: "https://www.theinforush.com",
              logo: "https://www.theinforush.com/assets/logo.png",
            }),
          }}
        />

        {/* Google Analytics Script */}
        <link rel="icon" href="/assets/favico.png"></link>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}', {                page_path: window.location.pathname
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
      <body
        className={inter.className}
        suppressHydrationWarning
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ThemeContextProvider>
          <ScrollTracker />
          <AppWithTheme>{children}</AppWithTheme>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
