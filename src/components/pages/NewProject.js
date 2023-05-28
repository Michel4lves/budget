import ProjectForm from '../project/ProjectForm'
import styles from './pagesCss/NewProject.module.css'

import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'


export default function NewProject() {

    const navigate = useNavigate()

    function createPost(project) {

        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {

            // initialize costs and services
            project.cost = 0
            project.services = []

            fetch('http://localhost:5000/projects', {
                method: 'POST',
                headers: {
                    'content-Type': 'application/json'
                },
                body: JSON.stringify(project) 
            })
                .then((resp) => resp.json())
                .then((data) => {
                    console.log(data)
                    // redirect
                    navigate('/budget/projects', {state:{message: 'Projeto criado com sucesso!'}})
                })
                .catch((err) => console.log(err))

        }else{
            // USING LOCAL STORAGE
            const localExistProjects = JSON.parse(localStorage.getItem('projects'))
            project.cost = 0
            project.services = []
            project.id = uuidv4()
            localExistProjects.push(project)
            let newJsonString = JSON.stringify(localExistProjects)
            localStorage.setItem('projects', newJsonString)
            navigate('/budget/projects', {state:{message: 'Projeto criado com sucesso!'}})
        }

    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm btnText="Criar Projeto" handleSubmit={createPost} />
        </div>
    )
}
