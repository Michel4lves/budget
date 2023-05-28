import styles from './pagesCss/Home.module.css'
import banner from '../../img/calculator.png'
import LinkButton from '../layout/Buttons/LinkButton'

import internaldb from '../../internaldb.json'

export default function Home() {

    
    if (!localStorage.hasOwnProperty('projects')) {
        localStorage.setItem('projects', JSON.stringify(internaldb.projects))
    }


    return (
        <section className={styles.home_container} >
            <h1>Bem vindo ao <span>Budget</span></h1>
            <p>A melhor maneira de gerenciar seus projetos!</p>
            <LinkButton to='/budget/newproject' text='Criar Projeto' />
            <img src={banner} alt="imagem_banner"/>
        </section>
    )
}
