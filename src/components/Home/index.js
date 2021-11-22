import React from 'react'
import styles from './home.module.scss';
import SkillBar from 'react-skillbars';
import PhotoPessoal from '../../Assets/photo_pessoal.jpg'
import Resume from './Resume';
import Courses from './Resume/Courses';
import ProjectsLink from './Resume/ProjectsLink'
import Experience from './Resume/Experience';
import Contact from '../Contact';

const skills = [
    {type: "JavaScript", level: 65},
    {type: "React.js", level: 60},
    {type: "TypeScript", level: 55},
    {type: "Node.js", level: 55},
    {type: "UI/UX", level: 50},
];


export default function Home() {
    return (
        <>
        <main className ={styles.content}>
          <div className="intro">
                <img src={PhotoPessoal} alt=""/>
                
                <SkillBar 
                skills={skills} 
                height={15}
                />
                                      
         </div>
         
         <section className={styles.intro}>                                                
                <h3>Alexandre Alvarenga </h3>
                <span>Frontend Developer</span>
                <p> 
                Programador autodidata, pai dedicado e apaixonado por tecnologia. 
                Sempre aberto para aprender e me aprimorar. 
                Comecei a programar em 2017, principalmente com JS vanilla, CSS puro e HTML, 
                fazendo pequenas mudanças, páginas estáticas, landing pages. 
                Depois de um tempo trabalhando com JavaScript, conheci o ReactJS através da comunidade 
                e como os projetos maiores usavam algum tipo de biblioteca em geral, comecei a aprender o 
                ReactJS devido às análises e recursos da ferramenta. Após alguns meses de estudo e prática. 
                Entrei em pequenos projetos ReactJS, participando de ambientes de desenvolvimento mais dinâmicos. 
                Nesses projetos, aprendi a trabalhar como membro da equipe lado a lado com outros desenvolvedores, 
                marketing, QAs, PMOs. Lá eu tive contato com agile como Scrum e Kanban e Git para versio-ning. 
                Já trabalhei em mais alguns projetos, com clientes locais e estrangeiros como desenvolvedor 
                front end com foco em web. Onde consolidei o que aprendi com meus primeiros projetos, 
                e comecei a aprender TypeScript, Redux, Axios e junto com outras das principais tecnologias 
                do ecossistema ReactJS. De 2017 até agora, tenho aprendido cada vez mais sobre minha pilha 
                escolhida anteriormente, com o objetivo de aprender mais sobre a linguagem e tecnologia, 
                bem como aprender mais sobre o processo de back-end e processo de desenvolvimento completo.                
                </p>
         </section>
                                                                           
        </main>
        <section className={styles.section2}>
        <Resume />
        <Courses /> 
        </section>
        <Experience />
        <ProjectsLink />
        <>
        <Contact />
        </>
        </>
    )
}


