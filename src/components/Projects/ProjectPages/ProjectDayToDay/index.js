import React from 'react'
import styles from './style.module.scss'
import { MdOutlineToday } from "react-icons/md";
import projects from '../../../../constants/projects';

function ProjectDayToDay({ index }) {
    return (
        <main className={styles.content}>
            <h3><MdOutlineToday />Day To Day </h3>
            <span>
                {projects[index].projectDayToDay}
            </span>
        </main>
    )
}

export default ProjectDayToDay