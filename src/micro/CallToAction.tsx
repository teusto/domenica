import styles from './styles/callToAction.module.scss';
import { RiArrowRightBoxFill } from "react-icons/ri";
import CallToActionVideo from '../assets/imgs/veneza.mp4';


/**
 * Call to action component
 * When hovered, the background it will expand vertically, a icon will show up and the background will transform in a video playing
 * @param text - Text to display
 * @returns Call to action component
 */

interface CallToActionProps {
    text: string;
    href?: string;
}

const CallToAction = ({ text, href }: CallToActionProps) => {
    return (
        <div className={styles.callToActionWrapper} onClick={() => href && window.open(href, '_blank')}>
            <div className={styles.callToActionContainer}>
                <span>{text}</span>
                <RiArrowRightBoxFill />
            </div>
            <div className={styles.callToActionVideo}>
                <video src={CallToActionVideo} autoPlay loop muted />
            </div>
        </div>
    );
};

export default CallToAction;