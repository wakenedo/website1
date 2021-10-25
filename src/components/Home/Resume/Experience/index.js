import React from 'react'
import styles from './experience.module.scss';


export default function Experience() {
    return (
        <main className ={styles.content}>
          <h3>Experience</h3> 
          <div className="intro">
                <br/>
                <h4>Frontend Dev</h4> 
                <>
                <p>Desenvolvimento  de  frontend  web.  Para  diversos  clientes,  desde  ecommerces,  sites  institucionais,
                   individuos  e  empresas. Trabalhando em pequenos grupos ou individualmente</p>
                </>                      
         </div>                                                
          <div className="intro">
                <br/>
                <h4>Dia a dia</h4> 
                <>
                <p>Desenvlvimento  front  end  de  algumas  interfaces  para  web  apps,  atualização  de  conteúdo,  integração  de  api  existente,
                   integração  e  manutenção  de  sistema  de  pagamentos,  debug-ging e pequenos reparos, atualização de linguagem,
                   Desenvolvimento front de interfaces clean e intuitivas.</p>
                </>                      
         </div>
         <div className="intro">
         <br/>
         <h4>Ferramentas & Técnologias</h4>          
         <section className={styles.section}>                                                
                <span>- HTML </span>
                <span>- CSS, Styled-Components & SASS</span>
                <span>- React.js, TypeScript, Next.js</span>
                <span>- Axios, REST API </span>
                <span>- GitHub, BitBucket (Versioning) </span>
                <span>- Figma (Prototyping) </span>
                <span>- Agile, Kanban & Scrum </span>
                <span>- Node.js, Express, MongoDB </span>
         </section>
         <h4>Freelancer | June 2017 until Date</h4>  
         </div>                                                
        </main>
    )
}