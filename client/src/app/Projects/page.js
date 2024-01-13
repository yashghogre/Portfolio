import React from 'react'
import styles from '@/styles/ProjectsPage.module.css'
import Link from 'next/link'

const page = () => {
    return (
        <div className={styles.mainDiv}>
            <div className={styles.titleMainDiv}>
                <div className={styles.navDiv}>
                    <p style={{ color: 'white' }}><Link href={'/'} style={{ color: 'white' }}>home</Link> / Projects</p>
                </div>
                <div>
                    <h4 style={{fontSize: '1.7vw'}}className={styles.title}>Projects</h4>
                </div>
            </div>
            <div className={styles.contentDiv}>
                <p>This page is under Progress</p>
            </div>
        </div>
    )
}

export default page