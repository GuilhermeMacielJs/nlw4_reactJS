import Head from 'next/head'
import { ExperienceBar } from '../components/ExperienceBar'
import {Profile} from '../components/Profile'

import styles from '../styles/Home.module.css'
import { CountDown } from '../components/CountDown'
import { CompletedChallenges } from '../components/completedChallenges'
import { ChallengeBox } from '../components/ChallengeBox'
 
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="shortcut icon" href="favicon.png" type="image/png"/>

        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap"
            rel="stylesheet"/>
        <title>Inicio | move.it</title>
      </Head>
          <ExperienceBar />
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <CountDown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
          <div></div>
    </div>
  )
}
