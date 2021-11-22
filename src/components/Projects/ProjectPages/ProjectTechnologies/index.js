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
                    <a href={projects[index].Technologies.tool1.Link}>
                        {projects[index].Technologies.tool1.Badge}
                        <p>{projects[index].Technologies.tool1.Text} </p>
                    </a>
                </div>
                <div>
                    <a href={projects[index].Technologies.tool2.Link}>
                        {projects[index].Technologies.tool2.Badge}
                        <p>{projects[index].Technologies.tool2.Text} </p>
                    </a>
                </div>
                <div>
                    <a href={projects[index].Technologies.tool3.Link}>
                        {projects[index].Technologies.tool3.Badge}
                        <p>{projects[index].Technologies.tool3.Text} </p>
                    </a>
                </div>
                <div>
                    <a href={projects[index].Technologies.tool4.Link}>
                        {projects[index].Technologies.tool4.Badge}
                        <p>{projects[index].Technologies.tool4.Text} </p>
                    </a>
                </div>
                <div>
                    <a href={projects[index].Technologies.tool5.Link}>
                        {projects[index].Technologies.tool5.Badge}
                        <p>{projects[index].Technologies.tool5.Text} </p>
                    </a>
                </div>
                <div>
                    <a href={projects[index].Technologies.tool6.Link}>
                        {projects[index].Technologies.tool6.Badge}
                        <p>{projects[index].Technologies.tool6.Text} </p>
                    </a>
                </div>
            </section>
        </main>
    )
}

export default ProjectTechnologies