import styles from "./styles/problem.module.scss";
import { useLocale } from "../utils/locales/LocaleProvider";

const Problem = () => {
  const { messages } = useLocale();

  return (
    <section className={styles.problemWrapper} id="problem">
      <div className={styles.problemCardsStack}>
        <div className={styles.problemBehind}></div>
        <div className={styles.problemCardsContainer}>
          {messages.problem.cards.map((card) => (
            <div className={styles.problemCard} key={card.title}>
              <p className={styles.cardTitle}>{card.title}</p>
              <p className={styles.cardDescription}>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.problemText}>
        <h2>{messages.problem.summary}</h2>
      </div>
    </section>
  );
};

export default Problem;