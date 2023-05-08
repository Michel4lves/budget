import styles from './layoutCss/Navbar.module.css'
import logo from '../../img/BudgetLogo.png'

import { Link } from 'react-router-dom'
import Container from './Container'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt='Budget_logo' className={styles.logo}/>
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">HOME</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/projects">PROJETOS</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/company">EMPRESA</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/contact">CONTATO</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}
