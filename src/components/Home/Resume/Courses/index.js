import React from 'react'
import styles from './courses.module.scss';


export default function Courses() {
    return (
        <main className ={styles.content}>
          <h3>Courses</h3> 
          <div className="intro">
                <br/>
                <h4>Faculdade Impacta  
                    <br/>Photoshop 100 hr - Basic</h4> 
                <>
                <p>07/2011-08/2011</p>
                </>                      
         </div>
         
         <section className={styles.section}>                                                
                <span>-Basics & Binds</span>
         </section>                                                          
          <div className="intro">
                
                <h4>Faculdade Impacta  
                    <br/>Photoshop 100 hr - Intermediary</h4> 
                <>
                <p>01/2012-02/2012</p>
                </>                      
         </div>
         
         <section className={styles.section}>                                                
                <span>-Brushes & Selections</span>
                <span>-Tools & Advanced Binds</span>
                
         </section>                                                          
          <div className="intro">
                
                <h4>Faculdade Impacta  
                    <br/>Illustrator 100 hr- Basic</h4> 
                <>
                <p>04/2012-05/2012</p>
                </>                      
         </div>
         <section className={styles.section}>                                                
                <span>-Basics & Binds</span>

         </section>                                                          
          <div className="intro">
                
                <h4>Faculdade Impacta   
                    <br/>Illustrator 100 hr - intermediary</h4> 
                <>
                <p>05/2012-06/2012</p>
                </>                      
         </div>
         <section className={styles.section}>                                                
                <span>-Brushes & Selection</span>
                <span>-Advanced Binds & Tools</span>
         </section>                                                          
        </main>

    )
}