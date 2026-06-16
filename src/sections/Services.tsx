import { useState, type CSSProperties } from "react";
import styles from "./styles/services.module.scss";
import CallToAction from "../micro/CallToAction";
import { useLocale } from "../utils/locales/LocaleProvider";

const QUESTION_COLORS = ["#0c4691", "#ec7a10", "#ec1d5f"];

const Services = () => {
  const { messages } = useLocale();
  const mappedQA = messages.services.mappedQA.map((item, index) => ({
    ...item,
    color: QUESTION_COLORS[index] ?? QUESTION_COLORS[QUESTION_COLORS.length - 1],
  }));

  const [hoveredQuestionIndex, setHoveredQuestionIndex] = useState<number | null>(
    null,
  );

  const allAnswers = mappedQA.flatMap((item, questionIndex) =>
    item.answers.map((answer) => ({
      answer,
      questionIndex,
    })),
  );

  return (
    <section className={styles.servicesWrapper} id="services">
      <div className={styles.servicesTitle}>
        <h2>{messages.services.title}</h2>
      </div>
      <div className={styles.servicesContainer}>
        <div className={styles.serviceListQuestions}>
          {mappedQA.map((item, questionIndex) => {
            const isHovered = hoveredQuestionIndex === questionIndex;
            const isDimmed =
              hoveredQuestionIndex !== null && hoveredQuestionIndex !== questionIndex;

            return (
              <div
                className={`${styles.serviceListQuestion} ${
                  isHovered ? styles.serviceListQuestionActive : ""
                } ${isDimmed ? styles.serviceListQuestionDimmed : ""}`}
                key={item.question}
                onMouseEnter={() => setHoveredQuestionIndex(questionIndex)}
                onMouseLeave={() => setHoveredQuestionIndex(null)}
              >
                <h3>{item.question}</h3>
              </div>
            );
          })}
        </div>
        <div className={styles.serviceListAnswers}>
          {allAnswers.map(({ answer, questionIndex }) => {
            const isMappedToHoveredQuestion = hoveredQuestionIndex === questionIndex;
            const isUnmappedToHoveredQuestion =
              hoveredQuestionIndex !== null && hoveredQuestionIndex !== questionIndex;
            const mappedColorStyle = isMappedToHoveredQuestion
              ? ({
                  "--mapped-color": mappedQA[questionIndex].color,
                } as CSSProperties)
              : undefined;

            return (
              <div
                className={`${styles.serviceListAnswer} ${
                  isMappedToHoveredQuestion ? styles.serviceListAnswerMapped : ""
                } ${
                  isUnmappedToHoveredQuestion ? styles.serviceListAnswerDimmed : ""
                }`}
                key={`${questionIndex}-${answer}`}
                style={mappedColorStyle}
              >
                <div className={styles.serviceListAnswerIcon} />
                <h3>{answer}</h3>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.servicesDecisionHelperCTA}>
        <p>{messages.services.decisionHelper}</p>
        <div className={styles.servicesDecisionHelperCTAButton}>
            <CallToAction text={messages.services.cta} href="https://cal.eu/matheus-toscano-scpbb8/introductory-call-w-dom"/>
        </div>
      </div>
    </section>
  );
};

export default Services;