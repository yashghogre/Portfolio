'use client'

import styles from '@/styles/Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import { FaBars } from "react-icons/fa6";
import { SlPlane, SlBubbles, SlScreenDesktop } from "react-icons/sl";
const Navbar = () => {

    const [zIndex1, setZIndex] = useState(-1);

    const menuBtn = () => {
        if (zIndex1 == '-1') {
            setZIndex('1')
        }
        else {
            setZIndex('-1')
        }
    }

    return (
        <div>
            <div className={styles.mainDiv}>
                <div className={styles.imageDiv}>
                    <Image src='/logoIG.png' height={500} width={500} alt='logo' className={styles.logo} />
                </div>
                <div className={styles.sideDiv}>
                    <li className={styles.list}>
                        <ul className={styles.listItem}><Link href='/#projects' className={styles.link}>Projects</Link></ul>
                        <ul className={styles.listItem}><Link href='/#socials' className={styles.link}>Socials</Link></ul>
                        <ul className={styles.listItem}><Link href='/#contact' className={styles.link}>Contact</Link></ul>
                        <div onClick={menuBtn}>
                            <FaBars className={styles.menuIcon} size={30} />
                        </div>
                    </li>
                </div>
                <div className={styles.menu} style={{ zIndex: `${zIndex1}` }}>
                    <li className={styles.menuRes}>
                        <ul className={styles.menuItems}>
                            <Link href='/#journey' className={styles.resMenuLink} onClick={menuBtn}>
                                <SlPlane size={25} />
                                My Journey
                            </Link>
                        </ul>
                        <ul className={styles.menuItems}>
                            <Link href='/#projects' className={styles.resMenuLink} onClick={menuBtn}>
                                <SlScreenDesktop size={25} />
                                My Projects
                            </Link>
                        </ul>
                        <ul className={styles.menuItems}>
                            <Link href='/#socials' className={styles.resMenuLink} onClick={menuBtn}>
                                <SlBubbles size={25} />
                                My Socials
                            </Link>
                        </ul>
                    </li>
                </div>
            </div>
        </div>
    )
}

export default Navbar