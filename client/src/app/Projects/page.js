import React from 'react'
import styles from '@/styles/ProjectsPage.module.css'
import Link from 'next/link'
import ProjectCard from '../components/ProjectCard'

const page = () => {
    return (
        <div className={styles.mainDiv}>
            <div className={styles.titleMainDiv}>
                <div className={styles.navDiv}>
                    <p style={{ color: 'white' }}><Link href={'/'} style={{ color: 'white' }}>home</Link> / Projects</p>
                </div>
                <div>
                    <h4 style={{ fontSize: '1.7vw' }} className={styles.title}>Projects</h4>
                </div>
            </div>
            <div className={styles.contentDiv}>
                <ProjectCard link='https://chat-app-gold-delta.vercel.app/' title='TalkBud- A website to chat to Strangers' image='/talkbudSnapshot.png' description='A chat app to talk to random strangers on random trending topics' alt='talkbud' />

                <ProjectCard link='https://e-commerce-website-ten-sandy.vercel.app/' title='BuyIt- An e-commerce Website' image='/buyitSnapshot.png' description='An e-commerce website which allows you to buy things. Main feature to add the item in the cart is implemented in this project.' alt='buyit' />
                
                <ProjectCard link='https://no-fapathon.vercel.app/' title='No-Fapathon- No Fap Tracker' image='/nofapSnapshot.png' description='A Website to track no fap status. This project was originally created during No Nut November where users could signup and ' alt='nofapathon' />
            </div>
        </div>
    )
}

export default page