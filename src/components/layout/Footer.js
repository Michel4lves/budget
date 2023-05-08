import { FaLinkedin, FaGithubSquare, FaWhatsappSquare, FaAt } from 'react-icons/fa'

import styles from './layoutCss/Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer_tag}>
            <ul className={styles.social_list}>
                <li>
                    <FaGithubSquare />
                </li>
                <li>
                    <FaLinkedin />
                </li>
                <li>
                    <FaWhatsappSquare />
                </li>
                <li>
                    <FaAt />
                </li>
            </ul>
            <p className={styles.copy_right}><span>Budget</span> &copy; 2023</p>
        </footer>
    )
}
