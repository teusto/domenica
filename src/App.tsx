import styles from "./sections/app.module.scss";
import Cursor from "./sections/Cursor";
import UpperFrame from "./sections/UpperFrame";
import ProjectFrame from "./sections/ProjectFrame";

const App = () => {
    return (
        <div className={styles.app_wrapper}>
            <Cursor />
            <UpperFrame />
            <ProjectFrame />
        </div>
    )
}

export default App;