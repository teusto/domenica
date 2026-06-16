import styles from "./styles/languageSelector.module.scss";
import { useLocale } from "../utils/locales/LocaleProvider";

const LanguageSelector = () => {
  const { locale, setLocale, messages } = useLocale();

  return (
    <div className={styles.languageSelectorWrapper}>
      {messages.languageSelector.options.map((option) => (
        <span
          key={option.locale}
          onClick={() => setLocale(option.locale)}
          className={locale === option.locale ? styles.selected : ""}
        >
          {option.label}
        </span>
      ))}
    </div>
  );
};

export default LanguageSelector;
