import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export const useLanguage = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  useEffect(() => {
    setCurrentLanguage(i18n.language);
  }, [i18n.language]);

  const toggleLanguage = () => {
    const newLang = currentLanguage === "vi" ? "en" : "vi";
    i18n.changeLanguage(newLang);
    setCurrentLanguage(newLang);
  };

  const changeLanguage = (lang: "vi" | "en") => {
    i18n.changeLanguage(lang);
    setCurrentLanguage(lang);
  };

  return {
    currentLanguage,
    toggleLanguage,
    changeLanguage,
    isVietnamese: currentLanguage === "vi",
    isEnglish: currentLanguage === "en",
  };
};
