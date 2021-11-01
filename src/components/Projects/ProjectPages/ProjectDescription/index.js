import React from 'react'
import styles from './style.module.scss'

function ProjectDescription({ data }) {
    return (
        <main className={styles.content}>
            <h3>Description</h3>
        <span>
            {data.Description}
        </span>
    </main>
    )
}

export default ProjectDescription
