import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function MainPage() {
  return (
    <div>
      <Head>
        <title>Joshua</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className={styles.main}>
          <div className={styles.container}>
            <span className={styles.greeting}>👋🏻 Hey! I am</span>
              <h1 className={styles.name}>Joshua Fuentes</h1>
              <h3 className={styles.education}>3D Designer and NFT Artist</h3>

              <div className={styles.buttons}>
                <a download= "" href="" className={styles.button}>
                  Download CV
                </a>
              </div>
          </div>
        </section> 
      </main>

    </div>
  )
}
