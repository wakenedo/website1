import React from 'react'
import styles from './style.module.scss'
import { GiBookshelf } from "react-icons/gi";
import projects from '../../../../constants/projects'

function ProjectLearn( {index} ) {
    return (
        <main className={styles.content}>
            <h3><GiBookshelf/>What I've Learned ?</h3>
            <span>
                {projects[index].projectLearn}                 
            </span>
        </main>
    )
}

export default ProjectLearn