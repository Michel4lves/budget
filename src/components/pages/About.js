import styles from './pagesCss/About.module.css'

export default function About() {
    return (
        <div className={styles.about_container}>
            <h1>Sobre este sistema:</h1>
            <p><span>Budget</span> é um sistema de custos, desenvolvido em um curso sobre o framework <span>React</span>.</p>
            <p>Este sistema possui algumas adições ao original, como a adição de responsividade, para torná-lo acessível em dispositivos móveis.</p>

        </div>
    )
}
