import React from 'react'
import Contact from '../../Contact'
import styles from './projectpages.module.scss'

import projects from '../../../constants/projects'
import ProjectPage from './ProjectPage'
import { useParams } from 'react-router'


function ProjectPages(data) {
    const {project} = useParams()

    const renderProject = () => {
        let arr = []
        var projectsArr = projects

        projectsArr.forEach(
            p => {
                arr.push(
                    <ProjectPage
                        key={p.Id}
                        data={p}
                        index={project}
                    />
                )
            }
        )
        return arr[project]
    }
    return (
        <>
            <main className={styles.content}>
                <section className={styles.section}>
                    <h3>{projects[project].Icon}{projects[project].Name}</h3>
                </section>

            </main>
            <div key={projects.Id}>
                {renderProject(data)}
            </div>
            <Contact />
        </>
    )
}

export default ProjectPages

