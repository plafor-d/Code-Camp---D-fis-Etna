import Head from 'next/head'
import Link from 'next/link'
import Pop from '../component/pop'
import { useState } from 'react'
import styles from 'styles/Home.module.css'

export default function Home() {
  const [activated, setActivated] = useState<boolean>(false)
  const handleOnClick = () => {
    setActivated(!activated)
  }
  return (
    <div className={styles.icon}>
      <Head>
      <title>Planning</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="calendrier.ico" />
      </Head>
			<div>
			<header className={styles.roll}>
				<Pop />
					<nav className={styles.rollbar}>
							<div className={styles.defile}><button className={styles.unrollbar} onClick={handleOnClick}>⏷</button>
								{ activated && 
								<div><Link href='/'> Accueil </Link></div>}
							</div>
					</nav>
			 </header>
		 </div>
		</div>
	)
}
