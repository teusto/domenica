import { useState } from "react";
import Hero from "./sections/Hero";
import Title from "./sections/Title";
import styles from "./sections/app.module.scss";
import Cursor from "./sections/Cursor";
import Dock from "./sections/Dock";

const App = () => {
    // Toggle between default content and "why us" content
    const [showWhyUs, setShowWhyUs] = useState(false);

    const toggleWhyUs = () => {
        setShowWhyUs(prev => !prev);
    };

    return (
        <div className={styles.app_wrapper}>
            {showWhyUs && <Title />}
            <Cursor />
            <Hero showWhyUs={showWhyUs} onToggleWhyUs={toggleWhyUs} />
            <Dock />
        </div>
    )
}

export default App;