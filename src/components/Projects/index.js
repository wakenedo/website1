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
        project => {
            arr.push(<Project key={project.Id} data={project}/>)  
        }
    )
    return arr 
}
  
    return (
    <>
        <main className={styles.content}>
            <section className={styles.section}>                     
                    <h3><FaProjectDiagram/> Projects</h3>
                    <span>Let's check some of my projects.
                    What technology and tools, were used and why.
                    Plus description of the projects and my role as a 
                    developer.</span>                                  
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
