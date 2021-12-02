import React from 'react'
import { Link } from 'react-router-dom'
import image1 from '../../../../Assets/projects.png'
import styles from './projectslink.module.scss'

function ProjectsLink() {
    return (
        <main className={styles.projectsContainer}>
            <section className={styles.projectsButton}>
                <Link to='/Projects'>
                    <img src={image1} alt="" />
                </Link>
            </section>
        </main>
    )
}

export default ProjectsLink
