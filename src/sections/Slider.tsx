import styles from "./styles/slider.module.scss"

const Slider = () => {
    return (
        <div className={styles.slider_wrapper}>
            {/* The number of projects to show */}
            <div className={styles.slider_ball} />
            <div className={styles.slider_ball} />
        </div>
    )
}

export default Slider;