import { ToggleButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import i18n from "../../../Locales/i18n";

const LanguageButton = () => {
  const [language, setLanguage] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("language") || "en";
    }
    return "en";
  });
  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") || "en";
    setLanguage(storedLanguage);
    i18n.changeLanguage(storedLanguage);
  }, []);

  const toggleLanguage = async () => {
    const newLanguage = language === "en" ? "hi" : "en";
    localStorage.setItem("language", newLanguage);
    setLanguage(newLanguage);
    await i18n.changeLanguage(newLanguage);
  };
  return (
    <ToggleButton
      value="check"
      onClick={toggleLanguage}
      sx={{ borderRadius: "25px", background: "red", padding: "0px 10px" }}
    >
      {language == "en" ? "हिन्दी" : "en"}
    </ToggleButton>
  );
};

export default LanguageButton;
