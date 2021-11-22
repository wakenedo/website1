import React from 'react';
import styles from './projectrepo.module.scss';
import { BiGitRepoForked } from "react-icons/bi";
import { BsGithub } from 'react-icons/bs';
import projects from '../../../../constants/projects'


function ProjectRepo({ index }) {
    return (
        <main className={styles.content}>
            <h3><BiGitRepoForked />Repositories</h3>
            <section className={styles.section}>
                <div>
                    <a href={projects[index].projectRepo}><BsGithub />{projects[index].projectRepo} </a>
                </div>
            </section>
        </main>
    )
}

export default ProjectRepo