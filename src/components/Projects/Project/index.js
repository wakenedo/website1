import React from 'react'
import styles from './project.module.scss'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import DateRangeIcon from '@material-ui/icons/DateRange';
import { Link } from 'react-router-dom';



function Project({data}) {
    return (
        <main className={styles.content}>
            <img src={data.Image} alt='No Input' />
            <div>
                
            </div>
            <div >
                <section  className={styles.section}>                     
                    <h3>
                        {data.Name} | 
                        <Link to={'./Project_Page'} key={data.Id}>
                            <LibraryBooksIcon /> Read More  
                        </Link> 
                    </h3>
                    <p>{data.Date} <DateRangeIcon/></p>
                    <p>
                        {data.Description}                       
                    </p>                    
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
                    <h4 key={data.Id}>
                        {data.projectTech.tech3}
                        <br/>
                        {data.projectTech.tech2}
                        <br/>
                        {data.projectTech.tech1}
                    </h4>
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