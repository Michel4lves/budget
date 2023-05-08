import styles from './pagesCss/Home.module.css'
import banner from '../../img/calculator.png'
import LinkButton from '../layout/Buttons/LinkButton'

export default function Home() {
    return (
        <section className={styles.home_container} >
            <h1>Bem vindo ao <span>Budget</span></h1>
            <p>A melhor maneira de gerenciar seus projetos!</p>
            <LinkButton to='/newproject' text='Criar Projeto' />
            <img src={banner} alt="imagem_banner"/>
        </section>
    )
}
