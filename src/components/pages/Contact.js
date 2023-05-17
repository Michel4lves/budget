import styles from './pagesCss/Contact.module.css'

export default function Contact() {
    return (
        <div className={styles.contact_container}>
            <h1>Gostou?</h1>
            <h1>Têm alguma ideia?</h1>
            <h1>Vamos fazer juntos!</h1>
            <p>Se você gostou deste sistema... <br/>
            entre em contato! <br/>
            Traga suas ideias para que possamos juntos dar vida a mais um projeto.</p>
            <p>Se quiser ver mais, veja meus repositórios no <span>Github</span> ou visite meu perfil no <span>Linkedin</span> através dos links no rodapé desta página.</p>
            <p>Obrigado por apreciar meu trabalho!</p>
        </div>
    )
}
