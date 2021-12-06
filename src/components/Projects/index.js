import React from 'react'
import Contact from '../Contact'
import Project from './Project'
import styles from './projects.module.scss'
import projects from '../../constants/projects'
import { FaProjectDiagram } from 'react-icons/fa';



function ProjectsPage() {
    const renderProjects = () => {
        let arr = []
        let projectsArr = projects

        projectsArr.forEach(
            (project, index) => {
                arr.push(<Project key={project.Id} data={project} index={index} />)
            }
        )
        return arr
    }

    return (
        <>
            <main className={styles.content}>
                <section className={styles.section}>
                    <div className={styles.title}>
                        <FaProjectDiagram />
                        <h3>Projects :</h3>
                    </div>
                    <span>
                        Aqui estão alguns dos meus projetos com mais detalhes
                        listando as tecnologias e ferramentas usadas, descrevendo minha participação
                        nos projetos e minhas conclusões sobre os aprendizados que adquiri
                        no curso de cada um.
                    </span>
                </section>

            </main>
            <div key={projects.Id}>
                {renderProjects()}
            </div>
            <Contact />
        </>
    )
}

export default ProjectsPage
