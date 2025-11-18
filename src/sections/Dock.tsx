import React from 'react';
import styles from './styles/dock.module.scss';
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { IoMailUnreadOutline } from "react-icons/io5";
import logo from "../assets/imgs/logo.svg";

const Dock = () => {
    return (
        <div className={styles.dock_wrapper}>
            <div className={styles.dock_item}>
                <a
                    href="https://www.youtube.com/@0xDomenica" // TODO: replace with your real YouTube URL
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="YouTube channel"
                    data-cursor-hover
                >
                    <IoLogoYoutube />
                </a>
            </div>
            <div className={styles.dock_item}>
                <a
                    href="https://www.linkedin.com/company/domenica-cria" // TODO: replace with your real LinkedIn URL
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="LinkedIn profile"
                    data-cursor-hover
                >
                    <FaLinkedinIn />
                </a>
            </div>
            <div className={styles.dock_item}>
                <a
                    href="https://wa.me/+351932209245" // TODO: replace with your WhatsApp number
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="WhatsApp"
                    data-cursor-hover
                >
                    <FaWhatsapp />
                </a>
            </div>
            <div className={styles.dock_item}>
                <a
                    href="mailto:web@domenica.agency" // TODO: replace with your real email
                    aria-label="Send email"
                    data-cursor-hover
                >
                    <IoMailUnreadOutline />
                </a>
            </div>
            <div className={styles.dock_separator} />
            <div className={styles.dock_item}>
                <a
                    href="https://your-portfolio.com" // TODO: replace with your main website
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Main website"
                    data-cursor-hover
                >
                    <img src={logo} alt="logo" />
                </a>
            </div>
        </div>
    );
};

export default Dock;
