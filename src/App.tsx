import Hero from "./sections/Hero";
import Text from "./sections/Text";
import Retro from "./sections/Retro";
import styles from "./sections/app.module.scss";

const App = () => {
    return (
        <div className={styles.app_wrapper}>
            <Hero />
            <Text />
            <Retro />
        </div>
    )
}

export default App;