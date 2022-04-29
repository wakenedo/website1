import styles from './ResumeItem/resumeItem.module.scss'

import education from '../../../../constants/education';
import ResumeItem from './ResumeItem';

function ResumeItems() {
    

    const renderResumeItems = () => {
        let arr = [];
        let resumeItemsArr = education

        resumeItemsArr.forEach(
            (resumeItem, index) => {
                arr.push(<ResumeItem key={resumeItem.Id} data={resumeItem} index={index} />);
            }
        )
        return arr
    }
    return (
        <section >
            <div  className={styles.items} key={education.Id}>
                {renderResumeItems()}
            </div>
        </section>
    )
}

export default ResumeItems