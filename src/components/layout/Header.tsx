"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button, Menu } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { NAVIGATION_ITEMS } from "@/constants";
import { useScrollPosition } from "@/hooks";
import { scrollToSection as scrollToSectionUtil } from "@/utils";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navigationItems = NAVIGATION_ITEMS;

  const scrollPosition = useScrollPosition();

  // Track active section based on scroll position
  useEffect(() => {
    const headerHeight = 96;
    const adjustedScrollPosition = scrollPosition + headerHeight + 100;

    let currentSection = "hero";

    for (let i = navigationItems.length - 1; i >= 0; i--) {
      const section = document.getElementById(navigationItems[i].key);
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          adjustedScrollPosition >= sectionTop &&
          adjustedScrollPosition < sectionTop + sectionHeight
        ) {
          currentSection = navigationItems[i].key as string;
          break;
        }
      }
    }

    if (currentSection !== activeSection) {
      setActiveSection(currentSection);
    }
  }, [scrollPosition, navigationItems, activeSection]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleScrollToSection = (href: string) => {
    const sectionKey = href.replace("#", "");
    setActiveSection(sectionKey);
    scrollToSectionUtil(href, 96);
    setIsMenuOpen(false);
  };

  // Keyboard navigation support
  const handleKeyDown = (event: React.KeyboardEvent, href: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleScrollToSection(href);
    }
  };

  const menuItems = navigationItems.map((item) => ({
    key: item.key,
    label: (
      <button
        onClick={() => handleScrollToSection(item.href)}
        onKeyDown={(e) => handleKeyDown(e, item.href)}
        aria-label={`${t("header.aria.navigation")} - ${t(
          `navigation.${item.key}`
        )}`}
        aria-current={activeSection === item.key ? "page" : undefined}
        role="menuitem"
        tabIndex={0}>
        {t(`navigation.${item.key}`)}
      </button>
    ),
  }));

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-lg"
      role="banner"
      aria-label="Header chính của trang web MAXIUS">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0">
            <Link
              href="#hero"
              className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent hover:from-orange-500 hover:to-orange-600 transition-all duration-300"
              aria-label={t("header.aria.logo")}>
              {t("header.title")}
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:block"
            role="navigation"
            aria-label={t("header.aria.navigation")}>
            <Menu
              mode="horizontal"
              items={menuItems}
              selectedKeys={[activeSection]}
              className="border-0 !bg-transparent !leading-[96px]"
              role="menubar"
            />
          </nav>

          {/* Right Section - Language & CTA */}
          <div className="flex items-center space-x-6">
            {/* Enhanced Language Selector */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:block">
              <LanguageSwitcher />
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="hidden md:block">
              <Button
                type="primary"
                size="large"
                onClick={() => handleScrollToSection("#contact")}
                className="shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 !bg-gradient-to-r !from-orange-500 !to-orange-600 !border-none !rounded-lg !h-12 !px-6"
                aria-label={t("header.aria.startUsing")}>
                {t("header.startNow")}
              </Button>
            </motion.div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                type="text"
                icon={isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
                onClick={toggleMenu}
                className="text-gray-700 hover:text-orange-500 transition-colors duration-200"
                size="large"
                aria-label={
                  isMenuOpen
                    ? t("header.aria.closeMenu")
                    : t("header.aria.openMenu")
                }
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              />
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-md"
                id="mobile-menu"
                role="navigation"
                aria-label={t("header.aria.mobileMenu")}>
                <div className="py-6">
                  <Menu
                    mode="vertical"
                    items={menuItems}
                    className="border-0 bg-transparent !px-4"
                    role="menu"
                  />

                  {/* Mobile Language & CTA */}
                  <div className="px-4 pt-6 space-y-4">
                    {/* Enhanced Mobile Language Switcher */}
                    <div className="flex items-center justify-center">
                      <LanguageSwitcher variant="mobile" />
                    </div>

                    <Button
                      type="primary"
                      size="large"
                      onClick={() => handleScrollToSection("#contact")}
                      className="w-full !bg-gradient-to-r !from-orange-500 !to-orange-600 !border-none !rounded-lg"
                      aria-label={t("header.aria.startUsing")}>
                      {t("header.startNow")}
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default Header;
