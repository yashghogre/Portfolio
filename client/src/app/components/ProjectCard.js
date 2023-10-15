import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '@/styles/ProjectCard.module.css'

const ProjectCard = (props) => {
    return (
        <div className={styles.mainDiv}>
            <Link href={props.link} className={styles.link}>
                <div className={styles.intDiv}>
                    <div className={styles.imageDiv}>
                        <Image src={props.image} height={200} width={300} alt={props.alt} className={styles.image} />
                    </div>
                    <div className={styles.textDiv}>
                        <h1 className={styles.title}>{props.title}</h1>
                        <p>{props.description}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProjectCard