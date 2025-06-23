import styles from "./styles/retro.module.scss";
import akira from "../assets/imgs/akira.gif";

const Retro = () => {
    return (
        <section className={styles.retro_wrapper}>
                <div className={styles.img_container}>
                    <img src={akira} alt="akira" />
                </div>
        </section>
    )
}

export default Retro;
