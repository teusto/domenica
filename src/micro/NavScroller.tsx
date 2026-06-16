import { useEffect, useState, type CSSProperties } from "react";
import styles from "./styles/navScroller.module.scss";
import { useLocale } from "../utils/locales/LocaleProvider";
import type { SectionId } from "../utils/locales";

const SECTIONS: SectionId[] = [
  "init",
  "problem",
  "solution",
  "services",
  "ship-safe",
];
const MIN_SCALE = 0.85;
const MAX_SCALE = 1.2;

const buildInitialScales = () =>
  Object.fromEntries(SECTIONS.map((section) => [section, 1])) as Record<
    string,
    number
  >;

const NavScroller = () => {
  const { messages } = useLocale();
  const [activeSection, setActiveSection] = useState(SECTIONS[0]);
  const [sectionScales, setSectionScales] = useState<Record<string, number>>(
    buildInitialScales,
  );

  useEffect(() => {
    let rafId: number | null = null;

    const measureSections = () => {
      const viewportCenter = window.innerHeight * 0.5;
      let closestSection = SECTIONS[0];
      let closestDistance = Number.POSITIVE_INFINITY;
      const nextScales = buildInitialScales();

      SECTIONS.forEach((sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        if (!sectionElement) return;

        const rect = sectionElement.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distanceToCenter = Math.abs(viewportCenter - sectionCenter);

        const normalizedProximity = Math.max(
          0,
          1 - distanceToCenter / (window.innerHeight * 0.75),
        );

        nextScales[sectionId] =
          MIN_SCALE + normalizedProximity * (MAX_SCALE - MIN_SCALE);

        if (distanceToCenter < closestDistance) {
          closestDistance = distanceToCenter;
          closestSection = sectionId;
        }
      });

      setActiveSection((prev) =>
        prev === closestSection ? prev : closestSection,
      );

      setSectionScales((prev) => {
        const hasChanges = SECTIONS.some(
          (section) => Math.abs(prev[section] - nextScales[section]) > 0.01,
        );

        return hasChanges ? nextScales : prev;
      });

      rafId = null;
    };

    const scheduleMeasure = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(measureSections);
    };

    scheduleMeasure();

    window.addEventListener("scroll", scheduleMeasure, { passive: true });
    window.addEventListener("resize", scheduleMeasure);

    return () => {
      window.removeEventListener("scroll", scheduleMeasure);
      window.removeEventListener("resize", scheduleMeasure);

      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <div className={styles.navScrollerWrapper}>
      <div className={styles.navScrollerContainer}>
        {SECTIONS.map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={`${styles.navScrollerItem} ${
              activeSection === section ? styles.navScrollerItemActive : ""
            }`}
            style={
              {
                "--item-scale": sectionScales[section],
              } as CSSProperties
            }
          >
            <span>{messages.navScroller.labels[section]}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default NavScroller;