import React from 'react'
import styles from './resume.module.scss';
import { SiBookstack } from 'react-icons/si';
import ResumeItems from './ResumeItems';



export default function Resume() {
       return (
              <main className={styles.content}>
                     <section>
                            <h3><SiBookstack />Education</h3>        
                     </section>
                     <section >
                            <ResumeItems />
                            
                     </section>
              </main>

       )
}