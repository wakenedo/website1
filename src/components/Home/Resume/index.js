import React from 'react'
import styles from './resume.module.scss';
import GitHubIcon from '@material-ui/icons/GitHub';
import { SiBookstack } from 'react-icons/si';


export default function Resume() {
    return (
        <main className ={styles.content}>        
          <h3><SiBookstack/>Education</h3>                    
          <div className="intro">
                <br/>
                <h4>Microcamp | Web Design</h4> 
                <>
                <p>01/2012 to 01/2013</p>
                </>                      
         </div>
         
         <section className={styles.section}>                                                
                <span>- HTML Fundamentals</span>
                <span>- Web Design Fundamentals</span>
         </section> 

          <div className="intro">
                
                <h4>RocketSeat | Bootcamp - MERN stack</h4> 
                <>
                <p>03/2019 to 05/2019</p>
                </>                      
         </div>
         
         <section className={styles.section}>                                                
                <span>- Web & Mobile</span>
                <span>- Frontend: React</span>
                <span>- Backend: Mongodb</span>
                <span>- Node.js: Express</span>
                <span>- Versioning: GitHub</span>
         </section>

          <div className="intro">
                
                <h4>Harvard University | CS50 - 
                <br/>Introduction to 
                Computing Science</h4> 
                <>
                <p>04/2021 to 01/2022</p>
                </>                      
         </div>
         
         <section className={styles.section}>                                                
                <span>- Scratch</span>
                <span>- C</span>
                <span>- Arrays</span>
                <span>- Algorithims</span>
                <span>- Data Structures</span>
         </section> 
         <div className="intro">                
                <h4>Udemy | Node.js Complete, Basic to Advanced </h4> 
                <>
                <p>04/2021 to 06/2021</p>
                </>                      
         </div>
         <section className={styles.section}>                                                
                <span>- Node.js (Native, Modules)</span>
                <span>- Express</span>
                <span>- Upload system</span>
                <span>- CLI Development - IoT - controlling DJI Tello drone </span>
                <span>- REST API with Node,js & MongoDB</span>
                <span>- Postman</span>
                <span>- Video Codification & Compress with FFMPE</span>
         </section>           

          <div className="intro">
                
                <h4>Udemy | TypeScript, Styled-Components,<br/> 
                    SASS, Next.js & Automated Tests </h4> 
                <>
                <p>09/2021 to 10/2021</p>
                </>                      
         </div>
         <section className={styles.section}>                                                
                <span>- React</span>
                <span>- Next.js</span>
                <span>- TypeScript</span>
                <span>- SASS & Styled-Components</span>
                <span>- Node.js: Express</span>
                <span>- Axios, Prismic, testing-library</span>
                <span>- Vercel & Netlify</span>
         </section>

         <div className="resume__Links">
              <a href='https://github.com/wakenedo/Githubcollection'> <GitHubIcon/> wakenedo/Githubcollection</a>
              <a href='https://github.com/wakenedo/nextjs-blog'><GitHubIcon/> wakenedo/nextjs-blog</a>
         </div>                  
                                                          
          <div className="intro">                
                <h4>RocketSeat | NLW - HEAT - Impulse Track </h4> 
                <>
                <p>10/2021 to 10/2021</p>
                </>                      
         </div>
         <section className={styles.section}>                                                
                <span>- Prisma</span>
                <span>- Node.js</span>
                <span>- Express</span>
                <span>- Public API (Github)</span>
                <span>- Authentication System (Github)</span>
                <span>- Vite/React.js (FrontendWeb) </span>
                <span>- Expo/ReactNative (FrontendMobile)</span>
                <span>- TypeScript</span>         
         </section>
         <div className="resume__Links">
              <a href='https://github.com/wakenedo/NLW_HEAT_NODE'><GitHubIcon/>wakenedo/NLW_HEAT_NODE</a>
              <a href='https://github.com/wakenedo/NLW_HEAT_REACT'><GitHubIcon/>wakenedo/NLW_HEAT_REACT</a>                                                         
              <a href='https://github.com/wakenedo/NLW_HEAT_MOBILE'><GitHubIcon/>wakenedo/NLW_HEAT_MOBILE</a>        
         </div>                                                                  
        </main>

    )
}