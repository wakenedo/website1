import React from 'react'
import styles from './home.module.scss';
import Resume from './Resume';
import Experience from './Experience';
import Contact from '../Contact';
import IntroImg from './IntroImg';




export default function Home() {
    
    return (
        <>
            <main className={styles.content}>
                <IntroImg />
            </main>
            <Resume />
            <Experience />
            <Contact/>
        </>
    )
}


