import styles from "./styles/testimonials.module.scss";

const Testimonials = ({text}: {text: string}) => {
    return (
        <div className={styles.testimonials_wrapper}>
            <p>"{text}"</p>
        </div>
    );
};

export default Testimonials;