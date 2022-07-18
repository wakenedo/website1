import React from 'react'
import styles from './style.module.scss'
import { MdOutlineDescription } from "react-icons/md";
import projects from '../../../../constants/projects';


function ProjectDescription({ index }) {
    return (
        <main className={styles.content}>
            <h3><MdOutlineDescription />Description</h3>
            <div>
                <span>
                    {projects[index].Description}
                </span>
            </div>
        </main>
    )
}

export default ProjectDescription
