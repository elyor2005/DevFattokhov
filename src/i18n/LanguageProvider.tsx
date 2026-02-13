"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { NextIntlClientProvider, AbstractIntlMessages } from "next-intl";
import { Locale, defaultLocale, locales } from "./config";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [messages, setMessages] = useState<AbstractIntlMessages | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load saved locale from localStorage on mount
  useEffect(() => {
    const savedLocale = localStorage.getItem("locale") as Locale | null;
    if (savedLocale && locales.includes(savedLocale)) {
      setLocaleState(savedLocale);
    }
  }, []);

  // Load messages when locale changes
  useEffect(() => {
    async function loadMessages() {
      try {
        const loadedMessages = (await import(`../../messages/${locale}.json`))
          .default;
        setMessages(loadedMessages);
        setIsLoaded(true);
      } catch (error) {
        console.error("Failed to load messages:", error);
      }
    }
    loadMessages();
  }, [locale]);

  // Save locale to localStorage when changed
  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
    // Update document lang attribute
    document.documentElement.lang = newLocale;
  };

  // Update document lang on mount and locale change
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  // Prevent hydration mismatch or empty provider by showing nothing until loaded
  if (!isLoaded || !messages) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
