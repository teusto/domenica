import styles from "./styles/text.module.scss";
import statue from "../assets/imgs/statue.jpg";

const Text = () => {
    return (
        <section className={styles.text_wrapper}>
            <div className={styles.text_container}>
                <p className={styles.text_p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque tenetur, saepe obcaecati ratione eum impedit repellat explicabo illo perferendis officiis quas modi ipsum, perspiciatis aliquam. Nam ad vero ducimus iusto.</p>
                <h2 className={styles.title}>Die Domina</h2>
                <p className={styles.text_p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque tenetur, saepe obcaecati ratione eum impedit repellat explicabo illo perferendis officiis quas modi ipsum, perspiciatis aliquam. Nam ad vero ducimus iusto.</p>
            </div>
            <div className={styles.image_container}>
                <img src={statue} alt="statue" />
            </div>
        </section>
    )
}

export default Text;