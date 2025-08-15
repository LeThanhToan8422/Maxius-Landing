"use client";

import { motion } from "framer-motion";
import { GlobalOutlined } from "@ant-design/icons";
import { useLanguage } from "@/hooks";
import { useTranslation } from "react-i18next";

interface LanguageSwitcherProps {
  variant?: "default" | "mobile";
  className?: string;
}

const LANGUAGES = [
  { code: "vi", label: "VI", ariaKey: "header.aria.vietnamese" },
  { code: "en", label: "EN", ariaKey: "header.aria.english" },
];

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = () => {
  const { currentLanguage, changeLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
    <div
      className="flex justify-between items-center bg-white/70 backdrop-blur-sm rounded-full p-1 shadow-inner border border-gray-200 w-[80px] !mr-2"
      role="group"
      aria-label={t("header.aria.languageSelector")}>
      {LANGUAGES.map(({ code, label, ariaKey }) => {
        const isActive = currentLanguage === code;
        return (
          <motion.button
            key={code}
            whileHover={{ scale: 1.1, y: -1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => changeLanguage(code as "vi" | "en")}
            className={`relative flex items-center justify-center px-3 py-1.5 rounded-full font-medium text-sm transition-all duration-300 !p-1
              ${
                isActive
                  ? "text-white shadow-lg shadow-orange-500/40"
                  : "text-gray-500 hover:text-orange-600"
              }`}
            aria-label={t(ariaKey)}
            aria-pressed={isActive}>
            {/* Background glow when active */}
            {isActive && (
              <motion.span
                layoutId="langActive"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-orange-600"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}

            {/* Icon + Text */}
            <span className="relative flex items-center space-x-1 z-10">
              <motion.span
                animate={isActive ? { rotate: 360 } : { rotate: 0 }}
                transition={{ duration: 0.6 }}>
                <GlobalOutlined className="text-xs" />
              </motion.span>
              <span>{label}</span>
            </span>
          </motion.button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
