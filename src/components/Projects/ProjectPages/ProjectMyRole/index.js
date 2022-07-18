import React from 'react'
import styles from './style.module.scss'
import { ImUser } from "react-icons/im";
import projects from '../../../../constants/projects';




function ProjectMyRole({ index }) {
    return (
        <main className={styles.content}>
            <h3><ImUser />My Role</h3>
            <div>
                <span>
                    {projects[index].projectMyRole}
                </span>

            </div>
        </main>
    )
}

export default ProjectMyRole
