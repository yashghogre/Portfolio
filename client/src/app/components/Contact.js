import React, { useEffect } from 'react'
import styles from '@/styles/Contact.module.css'
import Image from 'next/image'
import Link from 'next/link'
import ContactCard from './ContactCard'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div id='contact' className={styles.mainDiv}>
            <div className={styles.titleDiv}>
                <h1 className={styles.title}>Contact Me</h1>
            </div>
            <div className={styles.semiMainDiv} data-aos="fade-up">
                <div className={styles.formDiv}>
                    <form action='mailto:yashghogre100@gmail.com' method='POST' encType='text/plain' className={styles.form}>
                        <input placeholder='Name' type='text' name='name' className={styles.input} />
                        <input placeholder='Subject' type='text' name='subject' className={styles.input} />
                        <input placeholder='Message' type='message' name='message' className={styles.input} />
                        <input placeholder='Submit' type='submit' name='submit' className={styles.inputButton} />
                    </form>
                </div>

                <div className={styles.connectionDiv}>
                    <ContactCard link='https://wa.me/+918767821407' image='https://freepngimg.com/save/75404-test-apk-whatsapp-android-logo-download-hd-png/1012x1024' alt='wa-logo' text='Chat on WhatsApp!' />

                    <ContactCard link='https://discordapp.com/channels/@me/yaaaash/' image='/discordLogo.png' alt='discord-logo' text='Chat on Discord!' />
                </div>
            </div>
        </div>
    )
}

export default Contact