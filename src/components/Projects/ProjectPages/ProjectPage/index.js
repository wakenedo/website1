import React from 'react'
import ProjectDayToDay from '../ProjectDayToDay'
import ProjectDescription from '../ProjectDescription'
import ProjectImage from '../ProjectImage'
import ProjectLearn from '../ProjectLearn'
import ProjectMyRole from '../ProjectMyRole'
import ProjectTechnologies from '../ProjectTechnologies'
import styles from './projectpage.module.scss'

function ProjectPage({ data }) {
    return (
        <main className={styles.main}>
            <section className={styles.content}>
                <ProjectImage key={data.Id} data={data}/>                       
                <section  className={styles.section}>                                        
                    <ProjectDescription key={data.Id} data={data}/>                    
                    <ProjectMyRole/>  
                </section>                
            </section>
            <section className={styles.section2}>
                <ProjectDayToDay />
                <ProjectLearn /> 
            </section>
            <section className={styles.section3}>
                <ProjectTechnologies />
            </section>
                                            
        </main>
    )
}

export default ProjectPage
