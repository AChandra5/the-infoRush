"use client";
import React, { useState, useEffect, createContext, ReactNode } from "react";
import { Themes } from "../utils/constants";

interface ThemeContextType {
  currentTheme: string;
  toggleTheme: () => void;
}

// Create the context
export const ThemeContext = createContext({
  currentTheme: Themes.LIGHT,
  toggleTheme: () => {},
});

const ThemeContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

  const [currentTheme, setCurrentTheme] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || Themes.LIGHT;
    }
    return Themes.LIGHT;
  });

  useEffect(() => {
    localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  const toggleTheme = () => {
    setCurrentTheme((prev) => prev === Themes.LIGHT ? Themes.DARK : Themes.LIGHT);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
