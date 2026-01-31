import { useState } from "react"
import styles from "./styles/projectframe.module.scss"
import logo from "../assets/imgs/logo.png"
import Slider from "./Slider"
import projects from "../utils/projects.json"

const ProjectFrame = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeProject = projects[activeIndex];

    // Function to get image URL dynamically
    const getImageUrl = (name: string) => {
        return new URL(`../assets/imgs/${name}`, import.meta.url).href;
    };

    return (
        <div className={styles.project_frame_wrapper}>
            <div className={styles.project_frame_slider}>
                <Slider
                    count={projects.length}
                    activeIndex={activeIndex}
                    onChange={setActiveIndex}
                />
            </div>
            <div className={styles.project_frame_content}>
                <img src={getImageUrl(activeProject.image)} alt={activeProject.title} />
            </div>
            <div className={styles.project_frame_logo}>
                <img src={logo} alt="logo" />
            </div>
            <div className={styles.project_frame_name}>
                <h2>{activeProject.title}</h2>
            </div>
        </div>
    )
}

export default ProjectFrame;