import styles from "./styles/hero.module.scss";
import logoBox from "../assets/imgs/logobox.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import t1 from "../assets/imgs/t1.png";

gsap.registerPlugin(useGSAP);

const Hero = () => {
    const box1 = useRef<HTMLDivElement>(null);
    const box2 = useRef<HTMLDivElement>(null);
    const box3 = useRef<HTMLDivElement>(null);
    const box4 = useRef<HTMLDivElement>(null);
    const box5 = useRef<HTMLDivElement>(null);
    
    useGSAP(() => {
        gsap.from(box1.current, { duration: 1, y: 30, opacity: 0, stagger: .2 });
        gsap.from(box2.current, { duration: 1, y: -30, opacity: 0, stagger: .2 });
        gsap.from(box3.current, { duration: 1, x: 30, opacity: 0, stagger: .2 });
        gsap.from(box4.current, { duration: 1, y: -30, opacity: 0, stagger: .2 });
        gsap.from(box5.current, { duration: 1, x: -30, opacity: 0, stagger: .2 });
    });

    return (
        <section className={styles.hero_wrapper}>
            <section className={styles.content_wrapper}>
                <div className={styles.hero_content_box} ref={box1}>
                    <img src={logoBox} alt="Domenica Logo" />
                </div>
                <div className={styles.hero_content_box} ref={box2} />
                <div className={styles.hero_content_box} ref={box3} />
                <div className={styles.hero_content_box} ref={box4}>
                    <h1>AI</h1>
                </div>
                <div className={styles.hero_content_box} ref={box5}>
                    <img src={t1} alt="" />
                </div>    
            </section>
        </section>
    )
}

export default Hero;