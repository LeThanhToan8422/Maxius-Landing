"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button, Menu } from "antd";
import {
  MenuOutlined,
  CloseOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  AppstoreOutlined,
  ContactsOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
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

    // Close mobile menu first
    setIsMenuOpen(false);

    // Use setTimeout to ensure menu is closed before scrolling
    setTimeout(() => {
      scrollToSectionUtil(href, 96);
    }, 100);
  };

  // Keyboard navigation support
  const handleKeyDown = (event: React.KeyboardEvent, href: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleScrollToSection(href);
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (
        isMenuOpen &&
        !target.closest(".mobile-menu-container") &&
        !target.closest(".mobile-menu-button")
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Reset body overflow when component unmounts or screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // md breakpoint
        setIsMenuOpen(false);
        document.body.style.overflow = "unset";
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "unset";
    };
  }, []);

  // Force re-render on screen size change to ensure proper responsive behavior
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial screen size
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Get icon for navigation item
  const getNavigationIcon = (key: string) => {
    switch (key) {
      case "hero":
        return <HomeOutlined className="text-xl" />;
      case "about":
        return <InfoCircleOutlined className="text-xl" />;
      case "features":
        return <AppstoreOutlined className="text-xl" />;
      case "contact":
        return <ContactsOutlined className="text-xl" />;
      case "footer":
        return <FileTextOutlined className="text-xl" />;
      default:
        return <HomeOutlined className="text-xl" />;
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
        tabIndex={0}
        className="w-full text-left py-3 px-4 hover:bg-orange-50 hover:text-orange-600 transition-all duration-200 rounded-lg">
        {t(`navigation.${item.key}`)}
      </button>
    ),
  }));

  return (
    <>
      <header
        key={`header-${screenSize.width >= 768 ? "desktop" : "mobile"}`}
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
              className={`${
                screenSize.width >= 768 ? "flex" : "hidden"
              } md:flex md:items-center`}
              role="navigation"
              aria-label={t("header.aria.navigation")}
              style={{ display: screenSize.width >= 768 ? "flex" : "none" }}>
              <Menu
                mode="horizontal"
                items={menuItems}
                selectedKeys={[activeSection]}
                className="border-0 !bg-transparent !leading-[96px] !flex !items-center"
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
                className={`${
                  screenSize.width >= 768 ? "flex" : "hidden"
                } md:flex md:items-center`}>
                <LanguageSwitcher />
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className={`${
                  screenSize.width >= 768 ? "flex" : "hidden"
                } md:flex md:items-center`}>
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
              <div
                className={`${
                  screenSize.width < 768 ? "flex" : "hidden"
                } md:hidden mobile-menu-button`}>
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
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-white via-gray-50 to-gray-100 shadow-2xl z-50 md:hidden mobile-menu-container"
              id="mobile-menu"
              role="navigation"
              aria-label={t("header.aria.mobileMenu")}>
              {/* Header with close button */}
              <div className="relative p-6 border-b border-gray-200/50 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-2 right-2 w-20 h-20 bg-white rounded-full"></div>
                  <div className="absolute bottom-2 left-2 w-16 h-16 bg-white rounded-full"></div>
                </div>

                <div className="relative z-10 flex items-center justify-between !p-2">
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      {t("header.menu")}
                    </h2>
                    <p className="text-orange-100 text-sm mt-1">
                      {t("header.subtitle")}
                    </p>
                  </div>
                  <Button
                    type="text"
                    icon={<CloseOutlined />}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white hover:text-orange-200 hover:bg-white/20 border-0"
                    size="large"
                    aria-label={t("header.aria.closeMenu")}
                  />
                </div>
              </div>

              {/* Navigation Items */}
              <div className="flex-1 overflow-y-auto py-6">
                <div className="space-y-2 px-4">
                  {navigationItems.map((item) => (
                    <motion.div
                      key={item.key}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: navigationItems.indexOf(item) * 0.1,
                      }}
                      className="group !p-1">
                      <button
                        onClick={() => handleScrollToSection(item.href)}
                        onKeyDown={(e) => handleKeyDown(e, item.href)}
                        aria-label={`${t("header.aria.navigation")} - ${t(
                          `navigation.${item.key}`
                        )}`}
                        aria-current={
                          activeSection === item.key ? "page" : undefined
                        }
                        role="menuitem"
                        tabIndex={0}
                        className={`w-full text-left p-4 rounded-xl transition-all duration-300 group-hover:scale-105 !p-1 ${
                          activeSection === item.key
                            ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg transform scale-105"
                            : "text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-orange-700 hover:shadow-md"
                        }`}>
                        <div className="flex items-center space-x-3">
                          <div
                            className={`p-2 rounded-lg transition-all duration-300 !mr-1 ${
                              activeSection === item.key
                                ? "bg-white/20 text-white"
                                : "bg-orange-100 text-orange-600 group-hover:bg-orange-200"
                            }`}>
                            {getNavigationIcon(item.key)}
                          </div>
                          <span className="text-lg font-semibold">
                            {t(`navigation.${item.key}`)}
                          </span>
                        </div>

                        {/* Active indicator */}
                        {activeSection === item.key && (
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ delay: 0.2 }}
                            className="h-1 bg-white rounded-full mt-3"
                          />
                        )}
                      </button>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile Language & CTA */}
                <div className="px-4 space-y-4">
                  {/* Enhanced Mobile Language Switcher */}
                  <div className="flex items-center justify-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200/50 !p-2">
                    <LanguageSwitcher variant="mobile" />
                  </div>

                  <Button
                    type="primary"
                    size="large"
                    onClick={() => handleScrollToSection("#contact")}
                    className="w-full !bg-gradient-to-r !from-orange-500 !to-orange-600 !border-none !rounded-xl !h-14 !text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                    aria-label={t("header.aria.startUsing")}>
                    {t("header.startNow")}
                  </Button>
                </div>
              </div>

              {/* Footer decoration */}
              <div className="p-4 border-t border-gray-200/50">
                <div className="text-center text-gray-500 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                    <span>MAXIUS</span>
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
