import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import { GoMarkGithub } from 'react-icons/go';
import { ImMail4 } from 'react-icons/im'

const Home: NextPage = () => {
  return (
    <Layout>
      <div className={styles.bighello}>
        <Image src="/pfp.png" alt="My Profile Picture" width="250" height="250" layout="intrinsic" className={styles.profilepicture} />
        <div className={styles.bighelloright}>
          <h1 className={styles.bighellotitle}>Hello, I&apos;m<br /><span className={styles.name}>Eli Nicksic</span></h1>
          <div className={styles.icons}>
            <a href="https://github.com/Dolphinbob/">
              <GoMarkGithub className={styles.icon} size="60" />
            </a>
            <a href="mailto:me@elinicksic.me">
              <ImMail4 className={styles.icon} size="60" />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
