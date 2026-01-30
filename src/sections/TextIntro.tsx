import styles from "./styles/textintro.module.scss"

const TextIntro = () => {
    return (
        <div className={styles.text_intro_wrapper}>
            <p className={styles.text_intro_text}>Nullam eget diam metus. Praesent pulvinar sit amet magna sed faucibus. Mauris at nisl consectetur.</p>
            <p className={styles.text_intro_time}>16:55 <span>Lisbon, PT</span></p>
        </div>
    )
}

export default TextIntro