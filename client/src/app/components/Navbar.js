import styles from '@/styles/Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
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
                        <FaBars className={styles.menuIcon} size={30}/>
                    </li>
                </div>
            </div>
        </div>
    )
}

export default Navbar