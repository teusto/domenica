import styles from "./styles/hero.module.scss";
import DomenicaLogo from "../assets/imgs/logo.png"
import CallToAction from "../micro/CallToAction";
import { useLocale } from "../utils/locales/LocaleProvider";

const Hero = () => {
    const { messages } = useLocale();

    return (
        <section className={styles.heroWrapper} id="init">
            <div className={styles.heroHeader}>
                <img src={DomenicaLogo} alt={messages.hero.logoAlt} />
            </div>
            <div className={styles.heroContent}>
                <div className={styles.heroText1}>
                    <h1>{messages.hero.lineOne}</h1>
                </div>
                <div className={styles.heroButtonContainer}>
                    <div className={styles.heroButton}>
                        <CallToAction text={messages.hero.cta} href="https://cal.eu/matheus-toscano-scpbb8/introductory-call-w-dom" />
                    </div>
                </div>
                <div className={styles.heroText2}>
                    <h1>{messages.hero.lineTwo}</h1>
                </div>
            </div>
            <div className={styles.subtitleContainer}>
                <h2>{messages.hero.subtitle}</h2>
            </div>
        </section>
    )
}

export default Hero