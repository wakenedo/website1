import React from 'react'
import Contact from '../Contact'
import Project from './Project'
import styles from './projects.module.scss'
import projects from '../../constants/projects'



function ProjectsPage() {
    const renderProjects = /*async*/ () => {
    let arr = []

    let projectsArr = projects
    //let catalogoArr = await getCatalgo() : 
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
                    <h3>Projects</h3>
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
