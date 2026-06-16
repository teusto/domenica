import styles from "./styles/bookbutton.module.scss";
import { useLocale } from "../utils/locales/LocaleProvider";

const BookButton = () => {
    const { messages } = useLocale();

    return (
        <a className={styles.book_button_wrapper} href="https://cal.eu/matheus-toscano-scpbb8/introductory-call-w-dom" target="_blank">{messages.bookButton.label}</a>
    )
}

export default BookButton