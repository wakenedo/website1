import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

import styles from './contact.module.scss'
import { HomeOutlined, KeyboardArrowDownOutlined } from '@material-ui/icons';
//AccountTreeOutlined
function Contact({ isOpen, toggle }) {
    console.log('contact','toggle log', toggle , isOpen)
    return (
        <>
            <main className={styles.contact}>
                <div className={styles.contactMenu}>
                    <a href='https://alexandre-alvarenga-developer.netlify.app/'>
                        <HomeOutlined />
                        <p>
                            Home
                        </p>
                    </a>
                    {/*<a href='https://alexandre-alvarenga-developer.netlify.app/Projects'>
                        <AccountTreeOutlined />
                        <p>
                            Projects
                        </p>
                    </a>*/}
                    <div className={styles.contactMenuNav} >
                        <button onClick={toggle}>
                            <span>
                                Contact
                            </span>
                            <KeyboardArrowDownOutlined />
                        </button>
                    </div>
                            
                </div>
                <section>


                    <p><a href="https://www.linkedin.com/in/alexandre-alvarenga-86841b1b8/"><LinkedInIcon /> <span>LinkedIn : @alexandre-alvarenga</span></a></p>




                    <p><a href="https://outlook.com/"><MailOutlineIcon /> <span>E-mail : a_nuner@outlook.com</span></a></p>




                    <p><a href="https://github.com/wakenedo"><GitHubIcon /> <span>GitHub : @wakenedo</span></a></p>




                    <p><a href="https://www.skype.com/pt-br/"><PhoneAndroidIcon /> <span>+55 (11) 9 6184-8402</span></a></p>

                </section>

            </main>
        </>
    )
}

export default Contact
