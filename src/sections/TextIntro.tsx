import { useState, useEffect } from "react"
import styles from "./styles/textintro.module.scss"

const TextIntro = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');

    return (
        <div className={styles.text_intro_wrapper}>
            <p className={styles.text_intro_text}><span className={styles.text_intro_text_effect}>Web studio</span> focused in creativity and digital experiences. For any idea, if its online, we can <span className={styles.text_intro_text_effect}>do it</span>.</p>
            <p className={styles.text_intro_time}>
                {hours}<span className={styles.separator}>:</span>{minutes} <span>Lisbon, PT</span>
            </p>
            <p className={styles.text_intro_text}>We create real <span className={styles.text_intro_text_effect}>business impact</span>. Consulting. Design. Development. Maintenance. From <span className={styles.text_intro_text_effect}>AI</span> to <span className={styles.text_intro_text_effect}>Blockchain</span>. We know it all. <span className={styles.text_intro_text_effect}>We do it all.</span></p>
        </div>
    )
}

export default TextIntro