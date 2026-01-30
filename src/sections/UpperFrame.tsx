import TextIntro from "./TextIntro";
import BookButton from "./BookButton";
import styles from "./styles/upperframe.module.scss"

const UpperFrame = () => {
    return (
        <div className={styles.upper_frame_wrapper}>
            <h1 className={styles.upper_frame_title}>Domenica Cria</h1>
            <TextIntro />
            <BookButton />
        </div>
    )
}

export default UpperFrame;