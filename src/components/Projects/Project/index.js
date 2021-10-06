import React from 'react'
import styles from './project.module.scss'



function Project({data}) {
    return (
        <main className={styles.content}>
            <img src={data.Image} alt='No Input' />
            <div>
                
            </div>
            <div >
                <section  className={styles.section}>                     
                    <h3>{data.Name}</h3>
                    <p>{data.Date}</p>
                    <p>
                        {data.Description}                       
                    </p>
                    <h4 key={data.Id}>
                        {data.projectTech.tech1}
                        <br/>
                        {data.projectTech.tech2}
                        <br/>
                        {data.projectTech.tech3}
                    </h4>
                    <p >
                        {data.projectTools.tool1}
                        <br/>
                        {data.projectTools.tool2}
                        <br/>
                        {data.projectTools.tool3}
                        <br/>
                        {data.projectTools.tool4}
                        <br/>
                        {data.projectTools.tool5}
                        <br/>
                        {data.projectTools.tool6}
                        <br/>
                    </p>
                    {/*<h3 >
                        What I've learned?
                    </h3>
                    <p>
                        {data.projectLearn}
                    </p>
                    <h3>
                        Daily Routines & Challenges
                    </h3>
                    <p>
                        {data.projectRoutine}
                    </p>*/}
                </section>
            </div>            
        </main>
    )
}

export default Project