import React from 'react'
import styles from '@/styles/ContactCard.module.css'
import Link from 'next/link'
import Image from 'next/image'

const ContactCard = (props) => {
    return (
        <div className={styles.mainDiv}>
            <Link href={props.link} className={styles.link}>
                <div className={styles.connectDiv}>
                    <Image src={props.image} height={500} width={500} alt={props.alt} className={styles.logo} />
                    <p className={styles.text}>{props.text}</p>
                </div>
            </Link>
        </div>
    )
}

export default ContactCard