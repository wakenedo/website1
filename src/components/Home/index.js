import React, { useState } from 'react'
import styles from './home.module.scss';
import Resume from './Resume';
import Experience from './Experience';
import Contact from '../Contact';
import IntroImg from './IntroImg';




export default function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <main className={styles.content}>
                <IntroImg />
            </main>
            <Experience />
            <Resume />
            <Contact isOpen={isOpen} toggle={toggle}/>
        </>
    )
}


