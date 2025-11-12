import Hero from "./sections/Hero";
import Title from "./sections/Title";
import styles from "./sections/app.module.scss";
import Cursor from "./sections/Cursor";

const App = () => {
    return (
        <div className={styles.app_wrapper}>
            {/*<Title />*/}
            <Cursor />
            <Hero />
        </div>
    )
}

export default App;