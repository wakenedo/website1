import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

import styles from './contact.module.scss'
import { AccountTreeOutlined, HomeOutlined, KeyboardArrowDownOutlined } from '@material-ui/icons';

function Contact({isOpen,toggle}) {

    return (
        <>
            <main className={styles.contact} isOpen={isOpen} style={{
                bottom: ({ isOpen }) => (isOpen ? '0' : '-1000px')     
            }}>
                <div className={styles.contactMenu}>
                    <a href='https://alexandre-alvarenga-developer.netlify.app/'>
                        <HomeOutlined />
                        <p>
                            Home
                        </p>
                    </a>
                    <a href='https://alexandre-alvarenga-developer.netlify.app/Projects'>
                        <AccountTreeOutlined />
                        <p>
                            Projects
                        </p>
                    </a>
                    <div className={styles.contactMenuNav} >
                        <a  onClick={toggle}>
                            <span>
                                Contact
                            </span>
                            <KeyboardArrowDownOutlined />
                        </a>
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
