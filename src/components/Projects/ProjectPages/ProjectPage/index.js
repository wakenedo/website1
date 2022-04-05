import React from 'react'
import ProjectDayToDay from '../ProjectDayToDay'
import ProjectDescription from '../ProjectDescription'
import ProjectImage from '../ProjectImage'
import ProjectLearn from '../ProjectLearn'
import ProjectMyRole from '../ProjectMyRole'
import ProjectRepo from '../ProjectRepo'
import ProjectDeploy from '../ProjectSite'
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
                <section className={styles.section2}>
                    <ProjectLearn index={index} />
                    <ProjectDayToDay index={index} />
                </section>
                <section className={styles.section3}>
                    <ProjectTechnologies index={index} />
                </section>
                <section className={styles.section4}>
                    <ProjectRepo index={index} />
                </section>
                <section className={styles.section5}>
                    <ProjectDeploy index={index} />
                </section>
            </section>

        </main>
    )
}

export default ProjectPage
