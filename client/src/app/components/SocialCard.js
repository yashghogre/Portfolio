import React from 'react'
import styles from '@/styles/SocialCard.module.css'
import Link from 'next/link'
import Image from 'next/image'

const SocialCard = (props) => {
    return (
        <div className={styles.mainDiv}>
            <Link href={props.link} className={styles.Link}>
                <div className={styles.socialCard}>
                    <Image src={props.image} height={500} width={500} alt={props.alt} className={styles.logo} />
                    <p>{props.id}</p>
                </div>
            </Link>
        </div>
    )
}

export default SocialCard