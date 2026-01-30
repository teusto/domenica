import styles from "./styles/projectframe.module.scss"
import logo from "../assets/imgs/logo.png"
import ProjectCover from "../assets/imgs/t1.png"
import Slider from "./Slider"

const ProjectFrame = () => {
    return (
        <div className={styles.project_frame_wrapper}>
            <div className={styles.project_frame_slider}>
                <Slider />
            </div>
            <div className={styles.project_frame_content}>
                <img src={ProjectCover} alt="" />
            </div>
            <div className={styles.project_frame_logo}>
                <img src={logo} alt="" />
            </div>
            <div className={styles.project_frame_name}>
                <h2>Project Name</h2>
            </div>
        </div>
    )
}

export default ProjectFrame;