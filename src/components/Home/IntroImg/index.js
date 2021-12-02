import SkillBar from 'react-skillbars';
import PhotoPessoal from '../../../Assets/photo_pessoal.jpg'
import Intro from './Intro'
import styles from './introImg.module.scss';

const skills = [
    { type: "JavaScript", level: 65 },
    { type: "React.js", level: 60 },
    { type: "TypeScript", level: 55 },
    { type: "Node.js", level: 55 },
    { type: "UI/UX", level: 50 },
];

export default function IntroImg() {
    return (
        <div className={styles.contentImage}>
            <div className={styles.contentRow}>
                <img src={PhotoPessoal} alt="" />
                <Intro />
            </div>
            


            <SkillBar
                skills={skills}
                height={15}
            />
        </div>
    )
}