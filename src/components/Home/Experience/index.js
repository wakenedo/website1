import React from 'react'
import styles from './experience.module.scss';
import { GiDiploma } from 'react-icons/gi';


export default function Experience() {
    return (
        <main className={styles.content}>
            <section className={styles.section}>

                <h3><div><GiDiploma /></div>Experience</h3>

                <section className={styles.resumeItems}>
                    <section className={styles.resumeItem}>
                        <div>
                            <h4>Freelancer | Jan. 2017 until Mar. 2018</h4>
                            <br />
                            <h4>HTML Dev.</h4>
                            <section className={styles.resumeItemPosition}>
                                <span>
                                    Developing, maintaining, updating and deploying static HTML pages, landing pages, web design using HTML5 fixing tags, adding styles  or interface issues, bugs and developing interfaces from the clients design, or re-working already existing ones.
                                </span>
                            </section>
                        </div>
                        <h4>Tools & Techs</h4>
                        <section className={styles.resumeItemTools}>
                            <p> GitHub(Versioning)</p>
                        </section>
                        <h4>Frontend</h4>
                        <section className={styles.resumeItemFront}>
                            <p> HTML </p>
                        </section>
                        <div />
                    </section >
                    <section className={styles.resumeItem}>
                        <div>
                            <h4>Freelancer | May 2018 until May of 2019</h4>
                            <br />
                            <h4>JavaScript Web Dev.</h4>
                            <section className={styles.resumeItemPosition}>
                                <span>
                                    Frontend web development, working with pure JavaScript, HTML and CSS.
                                    Developing, maintaining and updating web sites, web apps and web services, with pure JavaScript. Implementing new features to already existing projects, improving performance working with other developers. 
                                    
                                </span>
                            </section>
                        </div>
                        <h4>Tools & Techs</h4>
                        <section className={styles.resumeItemTools}>
                            <p> GitHub(Versioning)</p>
                        </section>
                        <h4>Frontend</h4>
                        <section className={styles.resumeItemFront}>
                            <p> HTML, </p>
                            <p> JavaScript, </p>
                            <p> React.js,</p>
                            <p> CSS</p>
                        </section>
                        <div />
                    </section >
                    <section className={styles.resumeItem}>
                        <div>
                            <h4>Freelancer | May 2019 until Jan. of 2022</h4>
                            <br />
                            <h4>Frontend Web Dev.</h4>
                            <section className={styles.resumeItemPosition}>
                                <span>
                                    Frontend web development, working with JavaScript and ReactJS with typing using TypeScript.
                                    Developing intuitive and responsive interfaces, using modern ReactJS syntax and patterns.
                                    Developed projects from prototypes made by designers(Figma & AdobeXD), and sometimes myself when needed mainly using Figma.
                                    Hierarchical CSS,SASS and Styled-Components CMS(Prismic.io), declarative interfaces, depending on the project rules of business and goals,
                                    or my role in the project. State-management using Redux and or Context API, for more complex applications.
                                    Working sometimes in an agile environment where tasks are solicited as a chain of tasks or a single in a timeline accordingly to each developer
                                    role and responsibilities in the project.
                                </span>
                            </section>
                        </div>
                        <h4>Tools & Techs</h4>
                        <section className={styles.resumeItemTools}>
                            <p> Figma (Prototyping), </p>
                            <p> Agile,</p>
                            <p> Kanban and Scrum,</p>
                            <p> GitHub(Versioning)</p>
                        </section>
                        <h4>Frontend</h4>
                        <section className={styles.resumeItemFront}>
                            <p> HTML, </p>
                            <p> React.js,</p>
                            <p> Redux,</p>
                            <p> Socket.io,</p>
                            <p> Axios,</p>
                            <p> TypeScript,</p>
                            <p> CSS,</p>
                            <p> Styled-Components,</p>
                            <p> SASS </p>
                        </section>
                        <h4>Backend</h4>
                        <section className={styles.resumeItemBack}>
                            <p> Node.js, </p>
                            <p> Express, </p>
                            <p> MongoDb, </p>
                            <p> Firestore </p>
                        </section>
                        <div />
                    </section >
                    <section className={styles.resumeItem}>
                        <div>
                            <h4>BunniesHole | Jan. 2022 until Date</h4>
                            <br />
                            <h4>Frontend Jr. Web Dev.</h4>
                            <section className={styles.resumeItemPosition}>
                                <span>
                                    Frontend web development, working with JavaScript and ReactJS using TypeScript.
                                    Developing intuitive and responsive interfaces, using modern ReactJS syntax and patterns.
                                    Developed interfaces, e-mail and components from prototypes made by designers(Figma).
                                    State-management using Redux , Axios for API fetching and consumption. Static and dynamic
                                    code.

                                </span>
                            </section>
                        </div>
                        <h4>Tools & Techs</h4>
                        <section className={styles.resumeItemTools}>
                            <p> Figma (Prototyping), </p>
                            <p> Agile,</p>
                            <p> GitHub(Versioning)</p>
                        </section>
                        <h4>Frontend</h4>
                        <section className={styles.resumeItemFront}>
                            <p> HTML, </p>
                            <p> React.js,</p>
                            <p> Redux,</p>
                            <p> Socket.io,</p>
                            <p> Axios,</p>
                            <p> TypeScript,</p>
                            <p> Styled-Components</p>
                        </section>
                        <h4>Backend</h4>
                        <section className={styles.resumeItemBack}>
                            <p> Node.js, </p>
                            <p> Express </p>
                        </section>
                        <div />
                    </section>
                </section>
            </section>
        </main >
    )
}