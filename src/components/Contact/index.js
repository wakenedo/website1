import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import styles from './contact.module.scss'

function Contact() {
    return (
        <>
           <section className={styles.contact}>            
                <div className="contactlink">
                    <a href="https://www.linkedin.com/in/alexandre-alvarenga-86841b1b8/">
                        <p><LinkedInIcon /> <span>LinkedIn : @alexandre-alvarenga</span></p>
                    </a>
                </div>
                <div className="contactlink">
                    <a href ="https://outlook.com/">
                        <p><MailOutlineIcon/> <span>E-mail : a_nuner@outlook.com</span></p>
                    </a>
                </div>                      
                <div className="contactlink">
                    <a href="https://github.com/wakenedo">
                        <p><GitHubIcon/> <span>GitHub : @wakenedo</span></p>
                    </a>
                </div>                      
                <div className="contactlink">
                    <a href="https://www.skype.com/pt-br/">
                        <p><PhoneAndroidIcon/> <span>+55 (11) 9 6184-8402</span></p>
                    </a>          
                </div>                            
            </section>                                     
        </>
    )
}

export default Contact
