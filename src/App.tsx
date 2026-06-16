import styles from "./sections/app.module.scss";
import Cursor from "./sections/Cursor";
import Hero from "./sections/Hero";
import Problem from "./sections/Problem";
import Services from "./sections/Services";
import LeadMagnet from "./sections/LeadMagnet";
import NavScroller from "./micro/NavScroller";
import LanguageSelector from "./micro/LanguageSelector";
import Solution from "./sections/Solution";

const App = () => {
    return (
        <div className={styles.app_wrapper}>
            <Cursor />
            <NavScroller />
            <LanguageSelector />
            <Hero />
            <Problem />
            <Solution />
            <Services />
            <LeadMagnet />
        </div>
    )
}

export default App;