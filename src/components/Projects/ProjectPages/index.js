import React from 'react'
import Contact from '../../Contact'
import styles from './projectpages.module.scss'

import projects from '../../../constants/projects'
import ProjectPage from './ProjectPage'


function ProjectPages( data ) {
    const renderProject = () => {
    let arr = []
    var projectsArr = projects

    projectsArr.forEach(
        project => {
            arr.push(
            <ProjectPage 
            key={project.Id} 
            data={project}
            />
            )
        }          
    )
    return arr[0]
}
    return (
        <>
        <main className={styles.content}>
            <section className={styles.section}>                     
                    <h3>{projects[0].Icon}{projects[0].Name}</h3>                                
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

