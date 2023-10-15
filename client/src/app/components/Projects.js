'use client'

import styles from '@/styles/Projects.module.css'
import Image from 'next/image'
import ProjectCard from './ProjectCard'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Projects = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className={styles.projectsMainDiv} id='projects'>
            <div className={styles.titleDiv}>
                <h1 className={styles.title}>My Projects</h1>
            </div>
            <div className={styles.mainDiv}>
                <div className={styles.splanetDiv}>
                    <Image src={'/splanet.png'} height={700} width={700} alt='earth' className={styles.splanet} />
                    <div className={styles.colorDiv}></div>
                    <Image src={'/pinkCloud.png'} height={500} width={500} alt='clouds' className={styles.clouds} />
                </div>
                <div className={styles.projectCardDiv} data-aos="fade-up">
                    <ProjectCard link='https://e-commerce-website-ten-sandy.vercel.app/' title='BuyIt- An e-commerce Website' image='/buyitSnapshot.png' description='An e-commerce website which allows you to buy things. Main feature to add the item in the cart is implemented in this project.' alt='buyit' />

                    <ProjectCard link='https://level-up-eta.vercel.app/' title='LevelUp- For building better Habits (In Progress)' image='/levelupSnapshot.png' description='A habit tracker and habit builder which involves gamification of habits and building more of them in the future.' alt='buyit' />
                </div>
            </div>
        </div>
    )
}

export default Projects