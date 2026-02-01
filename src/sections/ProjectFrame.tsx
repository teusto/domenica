import { useState, useRef, useCallback } from "react"
import styles from "./styles/projectframe.module.scss"
import logo from "../assets/imgs/logo.png"
import Slider from "./Slider"
import projects from "../utils/projects.json"

const ProjectFrame = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    const activeProject = projects[activeIndex];

    // Function to get image URL dynamically
    const getImageUrl = (name: string) => {
        return new URL(`../assets/imgs/${name}`, import.meta.url).href;
    };

    const handleScroll = useCallback(() => {
        if (!carouselRef.current) return;
        const { scrollLeft, clientWidth } = carouselRef.current;
        const index = Math.round(scrollLeft / clientWidth);
        if (index !== activeIndex && index >= 0 && index < projects.length) {
            setActiveIndex(index);
        }
    }, [activeIndex]);

    return (
        <div className={styles.project_frame_wrapper}>
            <div className={styles.project_frame_slider}>
                <Slider
                    count={projects.length}
                    activeIndex={activeIndex}
                    carouselRef={carouselRef}
                />
            </div>
            <div
                className={styles.project_frame_content}
                ref={carouselRef}
                onScroll={handleScroll}
            >
                {projects.map((project) => (
                    <div key={project.id} className={styles.project_item}>
                        <img src={getImageUrl(project.image)} alt={project.title} />
                    </div>
                ))}
            </div>
            <div className={styles.project_frame_logo}>
                <img src={logo} alt="logo" />
            </div>
            <a
                href={activeProject.link}
                target="_blank"
                rel="noreferrer"
                className={styles.project_frame_name}
            >
                <h2>{activeProject.title}</h2>
            </a>
        </div>
    )
}

export default ProjectFrame;