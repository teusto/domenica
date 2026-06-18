import {
  FilmGrain,
  FlowField,
  LinearGradient,
  Shader,
} from "shaders/react";
import styles from "./styles/leadMagnet.module.scss";
import { useLocale } from "../utils/locales/LocaleProvider";
import { HiExternalLink } from "react-icons/hi";


const LeadMagnet = () => {
  const { messages } = useLocale();

  return (
    <section className={styles.leadMagnetWrapper} id="ship-safe">
      <div className={styles.leadMagnetContainer}>
        <div className={styles.leadMagnetLeft}>
          <h2>{messages.leadMagnet.title}</h2>
          <div>
            <p>{messages.leadMagnet.description}</p>
            <code onClick={() => window.open("https://tally.so/r/ODrQ5p", "_blank")}>
              {messages.leadMagnet.meta} <HiExternalLink />
            </code>
          </div>
        </div>
        <div className={styles.leadMagnetRight}>
          <Shader className={styles.leadMagnetShader}>
            <LinearGradient colorA="#f20000ff" colorB="#272727" />
            <FlowField speed={6} evolutionSpeed={1} />
            <FilmGrain />
          </Shader>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
