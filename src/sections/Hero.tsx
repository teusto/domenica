import styles from "./styles/hero.module.scss";
import logo from "../assets/imgs/logo.png";

const Hero = () => {
    return (
        <section className={styles.hero_wrapper}>

            <div className={styles.hero_logo}>
                <img src={logo} alt="logo" />
            </div>

            <div className={styles.hero_title}>
                <h1>Domenica.cria</h1>
            </div>

            <div className={styles.hero_image}>
                <img src="" alt="" />
                <div className={styles.hero_content}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A quis, reiciendis odit recusandae perferendis vero, quo deleniti mollitia minima quas ad autem accusamus similique officiis? Maiores voluptatum illo hic deleniti.</p>
            </div>
            </div>

           
        </section>
    )
}

export default Hero;