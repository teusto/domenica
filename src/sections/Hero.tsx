import styles from "./styles/hero.module.scss";
import whyStyles from "./styles/whyus.module.scss";
import logoBox from "../assets/imgs/logobox.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState, useEffect } from "react";
import t1 from "../assets/imgs/t2.png";
import Testimonials from "./Testimonials";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WhyUsBox1, WhyUsBox2, WhyUsBox3, WhyUsBox4, WhyUsBox5 } from "./WhyUsContent";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
    showWhyUs: boolean;
    onToggleWhyUs: () => void;
}

const Hero = ({ showWhyUs, onToggleWhyUs }: HeroProps) => {
    const heroRef = useRef<HTMLElement | null>(null);
    const box1 = useRef<HTMLDivElement>(null);
    const box2 = useRef<HTMLDivElement>(null);
    const box3 = useRef<HTMLDivElement>(null);
    const box4 = useRef<HTMLDivElement>(null);
    const box5 = useRef<HTMLDivElement>(null);
    const box6 = useRef<HTMLDivElement>(null);
    const wordRef = useRef<HTMLParagraphElement>(null);
    const testimonialsRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    
    // Services data
    const services = ["AI", "MKT", "UI/UX", "DEV", "BLOCKCHAIN", "APP"];

    // ScrollTrigger config for pinning hero and driving inner animations
    const scrollConfig = {
        start: "top top",
        end: "+=2000", // scroll distance controlling the animation
        scrub: 0.6, // smooth linkage between scroll and animation
        pin: true,
        pinSpacing: true,
        markers: false, // set to true while debugging
    } as const;
    
    useGSAP(() => {
        const ctx = gsap.context(() => {
            // Initial entrance animations
            gsap.from(box1.current, { duration: 1, y: 30, opacity: 0, stagger: .2 });
            gsap.from(box2.current, { duration: 1, y: -30, opacity: 0, stagger: .2 });
            gsap.from(box3.current, { duration: 1, x: 30, opacity: 0, stagger: .2 });
            gsap.from(box4.current, { duration: 1, y: -30, opacity: 0, stagger: .2 });
            gsap.from(box5.current, { duration: 1, x: -30, opacity: 0, stagger: .2 });
            gsap.from(box6.current, { duration: 1, x: -30, opacity: 0, stagger: .2 });
            gsap.from(imgRef.current, { duration: 2, x: -60, scale: 1.5, stagger: .2 });

            // Pin the whole hero and make testimonials scroll in stepped jumps
            if (heroRef.current && testimonialsRef.current && titleRef.current) {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: heroRef.current,
            ...scrollConfig, // includes pin, scrub, etc.
            snap: {
                snapTo: [0, 0.5, 1],
                duration: 0.5,
                ease: "power1.out",
            },
        },
    });

    tl.to(testimonialsRef.current, {
        yPercent: -200, // 3 testimonials stacked vertically -> 0, -100, -200
        ease: "none",
    })
    .to(
        titleRef.current,
        {
            width: "200%",
            ease: "none",
        },
        0, // start at the same time as testimonials animation
    );
}
        
            // Infinite fade in/fade out word animation for box4
            if (wordRef.current) {
                let currentIndex = 0;
                
                // Set initial state
                gsap.set(wordRef.current, { opacity: 0 });
                
                // Create infinite timeline
                const tl = gsap.timeline({ repeat: -1 });
                
                services.forEach((service) => {
                    tl.call(() => {
                        if (wordRef.current) {
                            wordRef.current.textContent = service;
                        }
                    })
                    .to(wordRef.current, {
                        opacity: 1,
                        duration: 0.6,
                        ease: "power2.inOut"
                    })
                    .to(wordRef.current, {
                        opacity: 1,
                        duration: 4 // Stay visible for 4 seconds
                    })
                    .to(wordRef.current, {
                        opacity: 0,
                        duration: 0.6,
                        ease: "power2.inOut"
                    });
                });
            }
        }, heroRef);

        return () => ctx.revert();
    }, []);
    
    return (
        <section className={styles.hero_wrapper} ref={heroRef}>
            <section className={styles.content_wrapper}>
                <div className={styles.hero_content_box} ref={box1}>
                    {showWhyUs ? <WhyUsBox1 /> : <img src={logoBox} alt="Domenica Logo" />}
                </div>
                <div className={showWhyUs ? styles.whyus_box_2 : styles.hero_content_box} ref={box2}>
                    {showWhyUs ? (
                        <WhyUsBox2 />
                    ) : (
                        <>
                            <h1 ref={titleRef}>We think outside the box</h1>
                            <p>and whatever more your business needs.</p>
                        </>
                    )}
                </div>
                <div className={styles.hero_content_box} ref={box3}>
                    {showWhyUs ? (
                        <WhyUsBox3 />
                    ) : (
                        <div className={styles.testimonials_wrapper} ref={testimonialsRef}>
                            <Testimonials text="They built a frontend that looks like a million dollars… at indie-friendly prices."/>
                            <Testimonials text="The team at Domenica Agency delivered a project that exceeded our expectations. Finally — devs that understand both product and code. Present, engaged, and fast. Highly recommend for any project."/>
                            <Testimonials text="Domenica Agency provided exceptional service. Their team was professional, responsive, and delivered a project that met our expectations. Highly recommend for any project."/>
                        </div>
                    )}
                </div>
                <div className={showWhyUs ? styles.whyus_box_4 : styles.hero_content_box}  ref={box4}>
                    {showWhyUs ? <WhyUsBox4 /> : <p ref={wordRef}></p>}
                </div>
                <div className={styles.hero_content_box} ref={box5} onClick={() => console.log("clicked")}>
                    {showWhyUs ? <WhyUsBox5 /> : <img src={t1} alt="" ref={imgRef} />}
                </div>
                <div className={styles.hero_content_box} style={{ backgroundColor: showWhyUs ? "#E83B3A" : "#F9F6EA", color: showWhyUs ? "#F9F6EA" : "#E83B3A" }} ref={box6} data-cursor-hover onClick={onToggleWhyUs}>
                    <p>we did</p>
                </div>
            </section>
        </section>
    )
}

export default Hero;