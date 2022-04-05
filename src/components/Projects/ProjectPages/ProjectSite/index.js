import React from 'react';
import styles from './projectsite.module.scss';
import projects from '../../../../constants/projects'
import {AiOutlineDeploymentUnit} from 'react-icons/ai'


function ProjectDeploy({ index }) {
    return (
        <main className={styles.content}>
            <h3 className={styles.h3}><AiOutlineDeploymentUnit />Deploy</h3>
            <section className={styles.section}>
                <div>
                    <a href={projects[index].projectDeploy}><AiOutlineDeploymentUnit />{projects[index].projectDeploy} </a>
                </div>
            </section>
        </main>
    )
}

export default ProjectDeploy