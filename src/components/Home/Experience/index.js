import React from 'react'
import styles from './experience.module.scss';
import { GiDiploma } from 'react-icons/gi';


export default function Experience() {
    return (
        <main className={styles.content}>
            <section className={styles.section}>
                <h3><GiDiploma />Experience</h3>
                <div>
                    <br />
                    <h4>Frontend Web Dev.</h4>
                    <>
                        <span>
                            Frontend web development, working with JScript and ReactJS with typing using TypeScript.  
                            Developing intuitive and responsive interfaces, using modern ReactJS syntax and patterns.
                            Developed projects from prototypes made by the designers(Figma & AdobeXD), and sometimes myself when needed mainly using Figma.
                            Hierarchical CSS,SASS and Styled-Components CMS(Prismic.io), declarative interfaces, depending on the project rules of business and goals,
                            or my role in the project. State-management using Redux and or Context API, for more complex applications.
                            Working sometimes in an agile environment where tasks are solicited as a chain of tasks or a single in a timeline accordingly to each developer
                            role and responsibilities in the project. 
                        </span>
                    </>
                </div>
                <div>
                    <h4>Tools & Techs</h4>
                    <section >
                        <span> Figma (Prototyping) </span>
                        <span> Agile</span>
                        <span> Kanban and Scrum</span>
                        <span> GitHub(Versioning)</span>
                    </section>
                    <h4>Frontend</h4>
                    <section >
                        <span> HTML </span>
                        <span> React.js</span>
                        <span> Redux</span>
                        <span> Socket.io</span>
                        <span> Axios</span>
                        <span> TypeScript</span>
                        <span> CSS</span>
                        <span> Styled-Components</span>
                        <span> SASS</span>
                    </section>
                    <h4>Backend</h4>
                    <section >
                        <span> Node.js </span>
                        <span> Express </span>
                        <span> MongoDb </span>
                        <span> Firestore </span>
                    </section>
                    <h4>Freelancer | May 2019 until Date</h4>
                </div>

            </section>

        </main>
    )
}