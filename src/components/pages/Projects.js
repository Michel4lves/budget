import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Message from "../layout/Message";
import Container from "../layout/Container";
import LinkButton from "../layout/Buttons/LinkButton";
import ProjectCard from "../project/ProjectCard";
import Loading from "../layout/Loading";

import internaldb from '../../internaldb.json'

import styles from './pagesCss/Projects.module.css'

export default function Projects() {
    const [removeLoading, setRemoveLoading] = useState(false)
    const [projects, setProjects] = useState([])
    const [projectMessage, setProjectsMessage] = useState('')


    function noProjectsAtInitial() {
        if (!localStorage.hasOwnProperty('projects')) {
            localStorage.setItem('projects', JSON.stringify(internaldb.projects))
        }
    }


    useEffect(() => {
        setTimeout(() => {

            if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {

                fetch('http://localhost:5000/projects', {
                    method: 'GET',
                    headers: {
                        'content-Type': 'application/json'
                    }
                })
                .then((resp) => resp.json())
                .then((data) => {
                    setProjects(data)
                    setRemoveLoading(true)
                })
                .catch((err) => console.log(err))
                
            }else{
                // USING LOCAL STORAGE
                noProjectsAtInitial()
                const localProjects = localStorage.getItem('projects')
                setProjects(JSON.parse(localProjects))
                setRemoveLoading(true)
            }

        }, 500)
    }, [])


    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }


    function removeProject(id) {

        if (window.location.hostname === 'localhostd' || window.location.hostname === '127.0.0.1') {

            fetch(`http://localhost:5000/projects/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-Type': 'application/json'
                }
            })
            .then((resp) => resp.json())
            .then(() => {
                setProjects(projects.filter((project) => project.id !== id))
                setProjectsMessage('Projeto removido com sucesso!')
            })
            .catch((err) => console.log(err))

        }else{
            // USING LOCAL STORAGE
            const localProjects = JSON.parse(localStorage.getItem('projects'))
            const updatedProject = localProjects.filter(project => project.id !== id)
            let updateJsonString = JSON.stringify(updatedProject)
            localStorage.setItem('projects', updateJsonString)
            setProjects(JSON.parse(localStorage.getItem('projects')))
        }
    }


    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to='/budget/newproject' text='Criar Projeto' />
            </div>
            {message && <Message type="success" msg={message} />}
            {projectMessage && <Message type="success" msg={projectMessage} />}
            <Container customClass="start">
                {projects.length > 0 &&
                    projects.map((project) => (<ProjectCard
                        id={project.id}
                        name={project.name}
                        budget={project.budget}
                        category={project.category.name}
                        key={project.id}
                        handleRemove={removeProject}
                    />))
                }
                {!removeLoading && <Loading />}
                {!removeLoading && projects.length === 0 && (
                    <p>Não há projetos cadastrados!</p>
                )}
            </Container>
        </div>
    )
}