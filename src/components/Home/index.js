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
                  <br/>
                    Auto didata, dedicado e apaixonado por técnologias,
                    desde 2017 trabalho como desenvolvedor frontend, freelancer. Começei trabalhando
                    com JavaScript, CSS e HTML puro e com o tempo migrei para a biblioteca React me especializado
                    cada vez mais nas stacks, técnologias e ferramen-tas que contemplam a biblioteca.
                  <br/>
                    Com o passar do tempo desenvolvi uma curuosidade sobre os processos, ferramentas e técnologias
                    do backend, principalmente no Node.js, Express e Mongo. O que me fez estudar, apliando meu entendimento
                    e visão do processo de desenvolvimento.
                  <br/>
                    Já tive a oprotunidade de trabalhar com diversos clientes de diferentes países e com demandas diversificadas. 
                    Focado no desenvolvimento web frontend, compus algumas pequenas equipes adquirindo experiência com a metodôlogia
                    ágil e versionamento.
                  <br/>
                    Atualmente busco oportunidades em desenvolvimento web, utilizando técnologias como React.js, Node.js,  
                    MERN Stack, TypeScript, Next.js, SASS, Styled-Components para ampliar minhas experiências e conhecimentos 
                    e conhecer projetos incríveis e equipes excepcionais.                  
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


