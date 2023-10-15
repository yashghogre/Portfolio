import React, { useEffect } from 'react'
import styles from '@/styles/Socials.module.css'
import Image from 'next/image'
import Link from 'next/link'
import SocialCard from './SocialCard'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Socials = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div id='socials' className={styles.socials}>
            <div className={styles.titleDiv}>
                <h1 className={styles.title}>My Socials</h1>
            </div>
            <div className={styles.scDiv} data-aos="fade-up">
                {/* <SocialCard link='https://twitter.com/YashGhogre' image='https://www.pngkit.com/png/full/10-100483_twitter-purple-purple-twitter-logo-transparent.png' alt='x-logo' id='@YashGhogre' /> */}
                <SocialCard link='https://twitter.com/YashGhogre' image='https://freelogopng.com/images/all_img/1690643640twitter-x-icon-png.png' alt='x-logo' id='@YashGhogre' />

                <SocialCard link='https://github.com/yashghogre' image='https://pngimg.com/d/github_PNG83.png' alt='github-logo' id='@yashghogre' />

                <SocialCard link='https://www.linkedin.com/in/yashghogre/' image='https://static.vecteezy.com/system/resources/previews/018/930/483/original/linkedin-logo-linkedin-icon-transparent-free-png.png' alt='linkedin-logo' id='@yashghogre' />

                <SocialCard link='https://bio.link/yashghogre' image='/biolinkLogo.png' alt='biolink-logo' id='@yashghogre' />
            </div>
        </div>
    )
}

export default Socials