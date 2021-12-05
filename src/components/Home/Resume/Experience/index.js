import React from 'react'
import styles from './experience.module.scss';
import { GiDiploma } from 'react-icons/gi';


export default function Experience() {
    return (
        <main className={styles.sectionExperience}>
            <section className={styles.contentExperience}>
                <h3><GiDiploma />Experience</h3>
                <div className="intro">
                    <br />
                    <h4>Frontend Web Developer</h4>
                    <>
                        <p>
                            Desenvolvimento web frontend, utilizando JavaScript / ReactJS / TypeS-cript criando interfaces
                            intuitivas, a partir de protótipos elaborados pelos designers.
                            Projetos responsivos, código estático e dinâmico. Código limpo, CSS hierárquico, busca e
                            roteamento de API. Consertando rotas, adicionando novos ou consertando componentes antigos,
                            testes automatizados, análise de desempenho.
                        </p>
                    </>
                </div>
                <div className="intro">
                    <h4>Ferramentas & Tecnologias</h4>
                    <section className={styles.section}>
                        <span>- Figma (Prototipação) </span>
                        <span>- Agile</span>
                        <span>- Kanban e Scrum</span>
                        <span>- GitHub(Versionamento)</span>
                    </section>
                    <h4>Frontend</h4>
                    <section className={styles.section}>
                        <span>- HTML </span>
                        <span>- React.js</span>
                        <span>- Redux</span>
                        <span>- Socket.io</span>
                        <span>- Axios</span>
                        <span>- TypeScript</span>
                        <span>- CSS</span>
                        <span>- Styled-Components</span>
                        <span>- SASS</span>
                    </section>
                    <h4>Backend</h4>
                    <section className={styles.section}>
                        <span>- Node.js </span>
                        <span>- Express </span>
                        <span>- MongoDb </span>
                        <span>- Firestore </span>
                    </section>
                    <h4>Freelancer | June 2017 until Date</h4>
                </div>

            </section>

        </main>
    )
}