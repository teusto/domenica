import styles from "./styles/testimonials.module.scss"
import { useLocale } from "../utils/locales/LocaleProvider";

const Testimonials = () => {
    const { messages } = useLocale();

    return (
        <div className={styles.testimonials_wrapper} id="testimonials">
            <h2 className={styles.testimonials_title}>{messages.testimonials.title}</h2>
            <div className={styles.testimonials_grid}>
            {messages.testimonials.items.map((testimonial) => (
                <div key={testimonial.name} className={styles.testimonial_card}>
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.text}</p>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Testimonials