import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Message from "../layout/Message";
import Container from "../layout/Container";
import LinkButton from "../layout/Buttons/LinkButton";
import ProjectCard from "../project/ProjectCard";
import Loading from "../layout/Loading";

import dbStatic from '../../dbStatic.json'

import styles from './pagesCss/Projects.module.css'

export default function Projects() {
    const [removeLoading, setRemoveLoading] = useState(false)
    const [projects, setProjects] = useState([])
    const [projectMessage, setProjectsMessage] = useState('')

    // FOR STATIC GITHUB PAGES
    useEffect(() => {
        setTimeout(() => {
            setProjects(dbStatic.projects)
            setRemoveLoading(true)
        }, 500)
    }, []);

    // FOR JSON HTTP
    // useEffect(() => {
    //     setTimeout(() => {
    //         fetch('http://localhost:5000/projects', {
    //             method: 'GET',
    //             headers: {
    //                 'content-Type': 'application/json'
    //             }
    //         })
    //         .then((resp) => resp.json())
    //         .then((data) => {
    //             setProjects(data)
    //             setRemoveLoading(true)
    //         })
    //         .catch((err) => console.log(err))
    //     }, 500)
    // }, [])

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    function removeProject(id) {
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