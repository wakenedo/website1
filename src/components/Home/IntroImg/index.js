import { Link } from 'react-router-dom'
import SkillBar from 'react-skillbars';
import PhotoPessoal from '../../../Assets/photo_pessoal.jpg'
import Intro from './Intro'
import styles from './introImg.module.scss';

const skills = [
    { type: "JavaScript", level: 60 },
    { type: "React.js", level: 60 },
    { type: "TypeScript", level: 55 },
    { type: "Node.js", level: 55 },
    { type: "UI/UX", level: 50 },
];

export default function IntroImg() {
    return (
        <div className={styles.content}>
            <div className={styles.contentTitle}>
                <h3>Alexandre Alvarenga </h3>
                <div className={styles.contentSubTitle}>
                    <span>Frontend Web Developer | JavaScript | React.JS | TypeScript</span>
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.sectionContent}>
                    <div className={styles.sectionColumn}>
                        <img src={PhotoPessoal} alt="" />
                        <>
                            <SkillBar
                                skills={skills}
                                height={25}
                            />
                        </>
                        <Link to='/Projects'>
                            <button className={styles.button}>
                                PROJECTS  
                            </button>
                        </Link>
                    </div>
                    <Intro />
                </div>
            </div>
        </div>
    )
}