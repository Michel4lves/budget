import {useEffect, useState} from "react"

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './projectCss/ProjectForm.module.css'

import internaldb from '../../internaldb.json'


export default function ProjectForm({btnText, handleSubmit, projectData}) {

    const [categories, setCategories] = useState([])

    const [project, setProject] = useState(projectData || {})


    function noCategoriesInitial() {
        if (!localStorage.hasOwnProperty('categories')) {
            localStorage.setItem('categories', JSON.stringify(internaldb.categories))
        }
    }


    useEffect(() => {

        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
                
            fetch('http://localhost:5000/categories', {
                method: 'GET',
                headers: {
                    'content-Type': 'application/json'
                }
            })
                .then((resp) => resp.json())
                .then((data) => setCategories(data))
                .catch((err) => console.log(err))

        }else{
            // USING LOCAL STORAGE
            noCategoriesInitial()
            const localDBCategories = localStorage.getItem('categories')
            setCategories(JSON.parse(localDBCategories))
        }

    }, [])


    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value })
    }

    function handleCategory(e) {
        setProject({ ...project, category:{
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text
        }})
    }

    return (
        <form className={styles.form} onSubmit={submit}>
            <Input 
                name="name" 
                text="Nome do projeto" 
                type="text" 
                placeholder="Insira o nome do projeto"
                handleOnChange={handleChange}
                value={project.name ? project.name : ''}
                />
            <Input 
                name="budget" 
                text="Orçamento do projeto" 
                type="number" 
                placeholder="Insira o orçamento total"
                handleOnChange={handleChange}
                value={project.budget ? project.budget : ''}
                />
            <Select 
                name="category_id" 
                text="Selecione a categoria"
                options={categories}
                handleOnChange={handleCategory}
                value={project.category ? project.category.id : ''}
            />
            <SubmitButton text={btnText}/>
        </form>
    )
}