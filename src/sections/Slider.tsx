import { useRef, useCallback, type RefObject, type PointerEvent } from "react"
import styles from "./styles/slider.module.scss"

interface SliderProps {
    count: number;
    activeIndex: number;
    carouselRef: RefObject<HTMLDivElement | null>;
}

const Slider = ({ count, activeIndex, carouselRef }: SliderProps) => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);

    const handleScrub = useCallback((e: PointerEvent) => {
        if (!sliderRef.current || !carouselRef.current) return;

        const rect = sliderRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
        const percentage = x / rect.width;

        const carousel = carouselRef.current;
        const maxScroll = carousel.scrollWidth - carousel.clientWidth;

        carousel.scrollTo({
            left: percentage * maxScroll,
            behavior: "auto"
        });
    }, [carouselRef]);

    const handlePointerDown = (e: PointerEvent) => {
        isDragging.current = true;
        (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
        handleScrub(e);
    };

    const handlePointerMove = (e: PointerEvent) => {
        if (isDragging.current) {
            handleScrub(e);
        }
    };

    const handlePointerUp = () => {
        isDragging.current = false;
        if (carouselRef.current) {
            const { scrollLeft, clientWidth } = carouselRef.current;
            const index = Math.round(scrollLeft / clientWidth);
            carouselRef.current.scrollTo({
                left: index * clientWidth,
                behavior: "smooth"
            });
        }
    };

    const handleClick = (index: number) => {
        if (!isDragging.current && carouselRef.current) {
            carouselRef.current.scrollTo({
                left: index * carouselRef.current.clientWidth,
                behavior: "smooth"
            });
        }
    }

    return (
        <div
            className={styles.slider_wrapper}
            ref={sliderRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            style={{ touchAction: 'none' }}
        >
            {Array.from({ length: count }).map((_, index) => (
                <div
                    key={index}
                    className={`${styles.slider_ball} ${index === activeIndex ? styles.active : ""}`}
                    onClick={() => handleClick(index)}
                />
            ))}
        </div>
    )
}

export default Slider;