import styles from './layoutCss/Navbar.module.css'
import logo from '../../img/BudgetLogo.png'

import { Link } from 'react-router-dom'
import Container from './Container'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/budget/">
                    <img src={logo} alt='Budget_logo' className={styles.logo}/>
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/budget/">HOME</Link>
                        {/* <Link to="/">HOME</Link> */}
                    </li>
                    <li className={styles.item}>
                        <Link to="/budget/projects">PROJETOS</Link>
                        {/* <Link to="/projects">PROJETOS</Link> */}
                    </li>
                    <li className={styles.item}>
                        <Link to="/budget/company">EMPRESA</Link>
                        {/* <Link to="/company">EMPRESA</Link> */}
                    </li>
                    <li className={styles.item}>
                        <Link to="/budget/contact">CONTATO</Link>
                        {/* <Link to="/contact">CONTATO</Link> */}
                    </li>
                </ul>
            </Container>
        </nav>
    )
}
