import type { CSSProperties } from "react";
import styles from "./styles/solution.module.scss";
import { useLocale } from "../utils/locales/LocaleProvider";

const CAROUSEL_DELAYS = [0, 0.5] as const;

const Solution = () => {
  const { messages } = useLocale();
  const wordCarousels = messages.solution.wordCarousels.map((words, index) => ({
    words,
    isAccent: index === 1,
    delay: CAROUSEL_DELAYS[index] ?? 0,
  }));

  return (
    <section className={styles.solutionWrapper} id="solution">
      <div className={styles.solutionTop}>
        <div className={styles.textContainer}>
          <h2>{messages.solution.titleLeft}</h2>
        </div>
        {wordCarousels.map(({ words, isAccent, delay }, index) => {
          const loopWords = [...words, words[0]];

          return (
            <div className={styles.box} key={`carousel-${index}`}>
              <div
                className={`${styles.solutionContainerBorder} ${
                  isAccent ? styles.solutionContainerBorderAccent : ""
                }`}
              >
                <div
                  className={styles.solutionWordTrack}
                  style={
                    {
                      "--carousel-delay": `${delay}s`,
                    } as CSSProperties
                  }
                >
                  {loopWords.map((word, wordIndex) => (
                    <p className={styles.solutionWord} key={`${word}-${wordIndex}`}>
                      {word}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
        <div className={styles.textContainer}>
          <h2>{messages.solution.titleRight}</h2>
        </div>
      </div>
      <div className={styles.solutionBottom}>
        {messages.solution.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
};

export default Solution;
