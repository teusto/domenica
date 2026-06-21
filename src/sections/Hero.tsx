import styles from "./styles/hero.module.scss";
import DomenicaLogo from "../assets/imgs/logo.png"
import HeroImage from "../assets/imgs/t2.png"
import CallToAction from "../micro/CallToAction";
import { useLocale } from "../utils/locales/LocaleProvider";
import { Dither, Glitch, ImageTexture, ReflectivePlane, Shader } from "shaders/react";

const Hero = () => {
    const { messages } = useLocale();

    return (
        <section className={styles.heroWrapper} id="init">
            <div className={styles.heroBars}>
                <Shader style={{ width: '100%', height: '130%'}}>
                    <ReflectivePlane blur={1} edges="mirror">
                    <Glitch colorBarIntensity={0.5} scanlineIntensity={0.3} intensity={0.4}>
                    <Dither colorA="#F9F6EA" colorB="#E83B3A" spread={0.65} pixelSize={1} pattern="bayer2">
                        <ImageTexture url={HeroImage} />
                    </Dither>
                    </Glitch>
                    </ReflectivePlane>
                </Shader>
            </div>
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