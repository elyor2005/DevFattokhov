"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Menu, Globe, Check } from "lucide-react";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/src/i18n/LanguageProvider";
import { locales, localeNames, localeFlags, Locale } from "@/src/i18n/config";

// ============================================================================
// Types & Constants
// ============================================================================

interface NavItem {
  key: string;
  href: string;
  hash: string;
}

const NAV_ITEMS: NavItem[] = [
  { key: "home", href: "/", hash: "#" },
  { key: "works", href: "/works", hash: "#works" },
  // { key: "about", href: "/about", hash: "#about" },
  { key: "resume", href: "/resume", hash: "#resume" },
  { key: "contact", href: "/contact", hash: "#contact" },
] as const;

const SCROLL_THRESHOLD = 50;
const SCROLL_OFFSET = 100;

// ============================================================================
// Utility Functions
// ============================================================================

const getHashFromPathname = (pathname: string): string => {
  const route = NAV_ITEMS.find((item) => item.href === pathname);
  return route?.hash ?? "#";
};

// ============================================================================
// Sub-Components
// ============================================================================

interface NavLinkProps {
  item: NavItem;
  isActive: boolean;
  label: string;
}

const NavLink = ({ item, isActive, label }: NavLinkProps) => (
  <Link
    href={item.href}
    className={`text-sm font-medium transition-colors relative ${
      isActive ? "text-[#007AFF]" : "text-[#6E6E73] hover:text-[#1D1D1F]"
    }`}
  >
    {label}
    {isActive && <ActiveIndicator />}
  </Link>
);

const ActiveIndicator = () => (
  <motion.div
    className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[#007AFF] via-[#00C7FF] to-transparent rounded-full"
    initial={{ opacity: 0, scaleX: 0 }}
    animate={{ opacity: 1, scaleX: 1 }}
    exit={{ opacity: 0, scaleX: 0 }}
    transition={{ duration: 0.2 }}
    style={{ originX: 0 }}
  />
);

const MobileMenuButton = () => (
  <button
    className="md:hidden p-2 rounded-lg hover:bg-black/5 transition-colors"
    aria-label="Open mobile menu"
  >
    <Menu className="w-6 h-6 text-[#1D1D1F]" />
  </button>
);

const Logo = () => {
  const t = useTranslations("common");
  return (
    <Link
      href="/"
      className="text-2xl font-bold text-[#1D1D1F] hover:text-[#007AFF] transition-colors font-syne tracking-tight"
    >
      {t("logo")}
    </Link>
  );
};

// Language Switcher Component
const LanguageSwitcher = () => {
  const { locale, setLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg glass-card hover:bg-white/90 transition-all duration-300"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Globe className="w-4 h-4 text-[#007AFF]" />
        <span className="text-sm font-medium text-[#1D1D1F]">
          {localeFlags[locale]} {locale.toUpperCase()}
        </span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Dropdown */}
            <motion.div
              className="absolute right-0 top-full mt-2 py-2 bg-white/95 backdrop-blur-xl rounded-xl shadow-premium border border-[#E5E5E7] z-50 min-w-[160px]"
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {locales.map((loc) => (
                <button
                  key={loc}
                  onClick={() => {
                    setLocale(loc as Locale);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-[#F5F5F7] transition-colors ${
                    locale === loc ? "text-[#007AFF]" : "text-[#1D1D1F]"
                  }`}
                >
                  <span className="text-lg">{localeFlags[loc as Locale]}</span>
                  <span className="text-sm font-medium flex-1">
                    {localeNames[loc as Locale]}
                  </span>
                  {locale === loc && (
                    <Check className="w-4 h-4 text-[#007AFF]" />
                  )}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

// ============================================================================
// Custom Hooks
// ============================================================================

interface ScrollState {
  isScrolled: boolean;
  isVisible: boolean;
}

const useSmartScroll = (): ScrollState => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    return scrollY.on("change", (currentY) => {
      setIsScrolled(currentY > SCROLL_THRESHOLD);

      const scrollDelta = currentY - lastScrollY;
      const isScrollingDown = scrollDelta > 0;
      const isScrollingUp = scrollDelta < 0;
      const isPastHideThreshold = currentY > SCROLL_THRESHOLD * 2;

      if (isScrollingDown && isPastHideThreshold) {
        setIsVisible(false);
      } else if (isScrollingUp || currentY < SCROLL_THRESHOLD) {
        setIsVisible(true);
      }

      setLastScrollY(currentY);
    });
  }, [scrollY, lastScrollY]);

  return { isScrolled, isVisible };
};

const useActiveSection = (pathname: string) => {
  const [activeSection, setActiveSection] = useState(() =>
    getHashFromPathname(pathname),
  );

  useEffect(() => {
    setActiveSection(getHashFromPathname(pathname));
  }, [pathname]);

  const handleScroll = useCallback(() => {
    if (pathname !== "/") return;

    const scrollPosition = window.scrollY + SCROLL_OFFSET;

    for (const item of NAV_ITEMS) {
      const element = document.querySelector(item.hash);
      if (!element) continue;

      const { offsetTop, offsetHeight } = element as HTMLElement;
      const isInSection =
        scrollPosition >= offsetTop &&
        scrollPosition < offsetTop + offsetHeight;

      if (isInSection) {
        setActiveSection(item.hash);
        break;
      }
    }
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") return;

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname, handleScroll]);

  return activeSection;
};

// ============================================================================
// Main Component
// ============================================================================

const Navbar = () => {
  const pathname = usePathname();
  const { isScrolled, isVisible } = useSmartScroll();
  const activeSection = useActiveSection(pathname);
  const t = useTranslations("nav");

  const navClassName = useMemo(
    () =>
      `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-nav shadow-sm-premium" : "bg-transparent"
      }`,
    [isScrolled],
  );

  return (
    <motion.nav
      className={navClassName}
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" role="navigation">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.key}
                item={item}
                isActive={activeSection === item.hash}
                label={t(item.key)}
              />
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <MobileMenuButton />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
