"use client";
import React, { useState, useEffect, createContext, ReactNode } from "react";
import { Themes } from "../../utils/constants";

export const ThemeContext = createContext({
  currentTheme: Themes.LIGHT,
  toggleTheme: () => {},
});

const ThemeContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<string>(Themes.LIGHT);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === Themes.DARK) {
      setCurrentTheme(Themes.DARK);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.add("light");
    }
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("theme", currentTheme);

      const root = document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(currentTheme);

      root.style.setProperty("--background", currentTheme === Themes.DARK ? "#121212" : "#ffffff");
      root.style.setProperty("--foreground", currentTheme === Themes.DARK ? "#ededed" : "#171717");
      document.body.style.backgroundColor = currentTheme === Themes.DARK ? "#121212" : "#ffffff";
      document.body.style.color = currentTheme === Themes.DARK ? "#ededed" : "#171717";
    }
  }, [currentTheme, isMounted]);

  const toggleTheme = () => {
    setCurrentTheme(prev => (prev === Themes.LIGHT ? Themes.DARK : Themes.LIGHT));
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
