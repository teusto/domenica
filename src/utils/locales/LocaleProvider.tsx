import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  DEFAULT_LOCALE,
  MESSAGES_BY_LOCALE,
  type Locale,
  type LocaleMessages,
} from "./index";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (nextLocale: Locale) => void;
  messages: LocaleMessages;
}

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

interface LocaleProviderProps {
  children: ReactNode;
}

export const LocaleProvider = ({ children }: LocaleProviderProps) => {
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE);

  const contextValue = useMemo(
    () => ({
      locale,
      setLocale,
      messages: MESSAGES_BY_LOCALE[locale],
    }),
    [locale],
  );

  return (
    <LocaleContext.Provider value={contextValue}>{children}</LocaleContext.Provider>
  );
};

export const useLocale = () => {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("useLocale must be used inside LocaleProvider");
  }

  return context;
};
