import React from 'react'
import ProjectDayToDay from '../ProjectDayToDay'
import ProjectDescription from '../ProjectDescription'
import ProjectImage from '../ProjectImage'
import ProjectLearn from '../ProjectLearn'
import ProjectMyRole from '../ProjectMyRole'
import ProjectTechnologies from '../ProjectTechnologies'
import styles from './projectpage.module.scss'

function ProjectPage({ data, index }) {
    return (
        <main className={styles.main}>
            <section className={styles.content}>
                <ProjectImage key={data.Id} data={data} index={index} />
                <section className={styles.section}>
                    <ProjectDescription index={index} />
                    <ProjectMyRole index={index} />
                </section>
            </section>
            <section className={styles.section2}>
                <ProjectDayToDay index={index} />
                <ProjectLearn index={index} />
            </section>
            <section className={styles.section3}>
                <ProjectTechnologies index={index} />
            </section>

        </main>
    )
}

export default ProjectPage
