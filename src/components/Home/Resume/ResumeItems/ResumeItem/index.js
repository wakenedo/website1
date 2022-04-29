import React from 'react';
import styles from './resumeItem.module.scss'



function ResumeItem({ data, index }) {
    
    return (
        <main>
            <section key={index} className={styles.section}>
                <div className="intro">
                    <h4>{data.name}</h4>
                    <>
                        <p>{data.date}</p>
                    </>
                </div>
                <section>
                    <span> {data.learned.id1}</span>
                    <span> {data.learned.id2}</span>
                    <span> {data.learned.id3}</span>
                    <span> {data.learned.id4}</span>
                    <span> {data.learned.id5}</span>
                    <span> {data.learned.id6}</span>
                    <span> {data.learned.id7}</span>
                </section>
                <div className={styles.resumeLinks}>
                    <a href={data.urls.git1.gitHref}>{data.urls.git1.gitHub}{data.urls.git1.gitName}</a>
                    <a href={data.urls.git2.gitHref}>{data.urls.git2.gitHub}{data.urls.git2.gitName}</a>
                    <a href={data.urls.git3.gitHref}>{data.urls.git3.gitHub}{data.urls.git3.gitName}</a>
                </div>
            </section>
        </main>
    )
}

export default ResumeItem