import { FaLinkedin, FaGithubSquare } from 'react-icons/fa'

import styles from './layoutCss/Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer_tag}>
            <ul className={styles.social_list}>
                <li>
                    <a href="https://github.com/Michel4lves" target="_blank" rel="noopener noreferrer">
                        <FaGithubSquare />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/michel-alves-892457232/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </li>
            </ul>
            <p className={styles.copy_right}><span>Budget</span> &copy; 2023</p>
        </footer>
    )
}
