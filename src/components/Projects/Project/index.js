import React from 'react'
import styles from './project.module.scss'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import DateRangeIcon from '@material-ui/icons/DateRange';
import { Link } from 'react-router-dom';



function Project({ data, index }) {
    return (
        <main className={styles.content}>
            <img src={data.Image} alt='No Input' />
            <div >
                <section className={styles.section}>
                    <h3>
                        {data.Name} |
                        <Link to={`./${index}/Project_Page`} key={data.Id}>
                            <span><LibraryBooksIcon /> Read More </span>
                        </Link>
                    </h3>
                    <p>{data.Date} <DateRangeIcon /></p>
                    <p>
                        {data.shortDescription}
                    </p>

                    <span >
                        <span >{data.projectTools.tool1}</span>
                        <span >{data.projectTools.tool2}</span>
                        <span >{data.projectTools.tool3}</span>
                        <span >{data.projectTools.tool4}</span>
                        <span >{data.projectTools.tool5}</span>
                        <span >{data.projectTools.tool6}</span>
                    </span>

                    <h4 key={data.Id}>
                        {data.projectTech.tech3}
                        <br />
                        {data.projectTech.tech2}
                        <br />
                        {data.projectTech.tech1}
                    </h4>
                </section>
            </div>
        </main>
    )
}

export default Project