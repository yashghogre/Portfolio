'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import Head from 'next/head'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Socials from './components/Socials'
import Contact from './components/Contact'

import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Home() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <main className={styles.main}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <div className={styles.mainMainDiv}>
        <Navbar />
        <div className={styles.mainDiv}>
          <div className={styles.textDiv}>
            <h1 className={styles.mainText}>Hi, I am Yash Ghogre!</h1>
            <div>
              <p className={styles.subText}>I turn ideas into reality by coding.</p>
              <p className={styles.subText}>Currently working in Web Development and planning to explore Artificial Intelligence.</p>
              <p className={styles.subText}>Not so good with girls, but that&apos;s how programmers are, Right!</p>
            </div>
          </div>
          <div className={styles.imageDiv}>
            <Image src={'https://media.giphy.com/media/VOgpnDOAddaN0zr9UE/giphy.gif'} height={500} width={500} alt='astronaut' className={styles.image} />
          </div>
        </div>
      </div>
      <div className={styles.myJourney}>
        <div className={styles.jDivTitle}>
          <h1 className={styles.journeyTitle}>My Journey</h1>
        </div>
        <div className={styles.journeyMainDiv}>
          <div className={styles.planets} data-aos="fade-up">
            {/* <Image src={'/rocket.png'} height={100} width={100} alt='rocketimg' /> */}
            <div className={styles.planetDiv}>
              <Image src={'/planet1.png'} height={200} width={200} alt='planet1' className={styles.planet} />
              {/* <Image src={'/cloud.png'} height={150} width={250} alt='cloud' className={styles.cloud} /> */}
              <h3 className={styles.jName}>HTML CSS</h3>
            </div>
            <div className={styles.planetDiv}>
              <Image src={'/planet2.png'} height={200} width={200} alt='planet2' className={styles.planet} />
              {/* <Image src={'/cloud.png'} height={150} width={150} alt='cloud' /> */}
              <h3 className={styles.jName}> JS</h3>
            </div>
            <div className={styles.planetDiv}>
              <Image src={'/planet3.png'} height={200} width={200} alt='planet3' className={styles.planet} />
              {/* <Image src={'/cloud.png'} height={150} width={200} alt='cloud' /> */}
              <h3 className={styles.jName}>NodeJS</h3>
            </div>
            <div className={styles.planetDiv}>
              <Image src={'/planet4.png'} height={200} width={200} alt='planet4' className={styles.planet} />
              {/* <Image src={'/cloud.png'} height={150} width={200} alt='cloud' /> */}
              <h3 className={styles.jName}>MongoDB</h3>
            </div>
            <div className={styles.planetDiv}>
              <Image src={'/planet5.png'} height={200} width={200} alt='planet5' className={styles.planet} />
              {/* <Image src={'/cloud.png'} height={150} width={250} alt='cloud' /> */}
              <h3 className={styles.jName}>ReactJS NextJS</h3>
            </div>
            <div className={styles.planetDiv}>
              <Image src={'/planet6.png'} height={200} width={200} alt='planet6' className={styles.planet} />
              {/* <Image src={'/cloud.png'} height={150} width={200} alt='cloud' /> */}
              <h3 className={styles.jName}>Python</h3>
            </div>
          </div>
          <div className={styles.sunDiv}>
            <Image src={'/sun.png'} height={500} width={500} alt='sun' className={styles.sun} />
          </div>
        </div>
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Socials />
      </div>
      <div>
        <Contact />
      </div>
    </main>
  )
}
