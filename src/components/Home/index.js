import React from 'react'
import styles from './home.module.scss';
import Resume from './Resume';
import ProjectsLink from './Resume/ProjectsLink'
import Experience from './Resume/Experience';
import Contact from '../Contact';
import IntroImg from './IntroImg';




export default function Home() {
    return (
        <>
            <main className={styles.contentHome}>
            <IntroImg />
            <ProjectsLink />
            </main>
            <Resume />
            <Experience />

            <>
                <Contact />
            </>
        </>
    )
}


