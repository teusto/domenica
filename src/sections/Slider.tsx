import styles from "./styles/slider.module.scss"

interface SliderProps {
    count: number;
    activeIndex: number;
    onChange: (index: number) => void;
}

const Slider = ({ count, activeIndex, onChange }: SliderProps) => {
    return (
        <div className={styles.slider_wrapper}>
            {Array.from({ length: count }).map((_, index) => (
                <div
                    key={index}
                    className={`${styles.slider_ball} ${index === activeIndex ? styles.active : ""}`}
                    onClick={() => onChange(index)}
                />
            ))}
        </div>
    )
}

export default Slider;