import React from 'react'
import { Link } from 'react-router-dom'
import image1 from '../../../../Assets/projects.png'
import styles from './projectslink.module.scss'

function ProjectsLink() {
    return (
        <section className={styles.projects}>
        <Link to='/Projects'>
           <img src ={image1} alt="" />                                  
        </Link>              
        </section> 
    )
}

export default ProjectsLink
