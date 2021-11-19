import React from 'react'
import styles from './style.module.scss'
import { FiHardDrive } from "react-icons/fi";
import projects from '../../../../constants/projects'

function ProjectTechnologies({ index }) {
    return (
        <main className={styles.content}>
            <h3><FiHardDrive />Technologies Used</h3>
            <section className={styles.section}>
                <div>
                {projects[index].Technologies.tool1.Badge}
                <p>{projects[index].Technologies.tool1.Text} </p>
                </div>
                <div>
                {projects[index].Technologies.tool2.Badge}
                {projects[index].Technologies.tool2.Text}
                </div>
                <div>
                {projects[index].Technologies.tool3.Badge}
                {projects[index].Technologies.tool3.Text}
                </div>
                <div>
                {projects[index].Technologies.tool4.Badge}
                {projects[index].Technologies.tool4.Text}
                </div>
                <div>
                {projects[index].Technologies.tool5.Badge}
                {projects[index].Technologies.tool5.Text}
                </div>
                <div>
                {projects[index].Technologies.tool6.Badge}
                {projects[index].Technologies.tool6.Text}
                </div>
                
               
            </section>
        </main>
    )
}

export default ProjectTechnologies