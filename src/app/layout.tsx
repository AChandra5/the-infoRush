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
        <link rel="shortcut icon" href="/assets/favico.png" type="image/x-icon" />
        <meta name="google-adsense-account" content="ca-pub-7725273560791505"></meta>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7725273560791505"
     crossOrigin="anonymous"></script>
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
        {/* <title>The InfoRush</title>
        <meta property="og:title" content="The InfoRush" />
        <meta
          property="og:description"
          content="InfoRush brings you quick, needful knowledge pills on tech, finance, fitness, and cricket — all in one place. We provide you real and bias-free recommendations."
        />
        <meta
          property="og:image"
          content="https://www.theinforush.com/assets/logo.png"
        />
        <meta property="og:url" content="https://www.theinforush.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The InfoRush" />
        <meta
          name="twitter:description"
          content="InfoRush brings you quick, needful knowledge pills on tech, finance, fitness, and cricket — all in one place."
        />
        <meta
          name="twitter:image"
          content="https://www.theinforush.com/assets/logo.png"
        />
        <meta name="keywords" content="gadgets, tech, technology, smartphones, cricket, fitness, finance, insurance, money saving" /> */}
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
