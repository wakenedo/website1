import styles from './intro.module.scss'

export default function Intro() {
    return (
        <section className={styles.intro}>
            <section className={styles.section}>
                <section className={styles.container}>
                    <p>
                        Hello, I'm Alexandre Alvarenga Frontend, Full Stack Developer, I've always had a soft spot for this job, I was passionate about video games from a very young age, it totally changed my life and sharpened my curiosity, that's how I decided to become a programmer, a choice that was obvious to me. My skills and abilities are based on 4 pillars
                        <br />
                        The first pillar is my ability to analyze the needs in a project, i.e. to carry out a study of the existing situation in order to highlight the important and necessary information for understanding the project, detecting problems and proposing solutions.
                        <br />
                        The second pillar is my ability to design new solutions adapted to predefined needs through my skills in data modeling using MERISE / UML tools or through the UX design methodology in order to transform needs into user interfaces or systems.
                        <br />
                        The third pillar is my ability to implement the new solution designed with adapted technologies such as frameworks and specific programming languages.
                        <br />
                        And my last strength lies in my ability to adapt to all work environments, to work under pressure and with short deadlines, my ease of integration into a dynamic team, respect for my hierarchy and my colleagues, punctuality , the rigor in the work, my good humor and the love for my neighbour.
                    </p>
                </section>
            </section>
        </section>

    )

}