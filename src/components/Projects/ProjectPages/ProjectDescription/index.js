import React from 'react'
import styles from './style.module.scss'
import { MdOutlineDescription } from "react-icons/md";


function ProjectDescription({ data }) {
    return (
        <main className={styles.content}>
            <h3><MdOutlineDescription/>Description</h3>
        <span>
            {data.Description}
        </span>
    </main>
    )
}

export default ProjectDescription
