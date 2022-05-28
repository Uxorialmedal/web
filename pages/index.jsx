import Head from 'next/head'
import styles from '../styles/App.module.css'

export default function JoshuaApp() {
  return (
    <div>
      <Head>
        <title>Joshua</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <header className={styles.l_header}>
        <nav className={styles.bg_grid}>
          <div>
            <a href="" className={styles.nav__logo}>JOSHUA</a>
          </div>

          <div className={nav__menu}>
            <ul className={nav__list}>
              <li className={nav__item}><a href="#home" className={nav__link}>Home</a></li>
              <li className={nav__item}><a href="#about" className={nav__link}>About</a></li>
              <li className={nav__item}><a href="#skills" className={nav__link}>Skills</a></li>
              <li className={nav__item}><a href="#work" className={nav__link}>Work</a></li>
              <li className={nav__item}><a href="#contact" className={nav__link}>Contact</a></li>
            </ul>
          </div>

          <div className={styles.nav__toggle}>
            
          </div>

        </nav>
      </header>

      <main className={styles.l_main}>
        <section className={styles.bd_grid}>
          <div className={styles.home__data}>
            <h1 className={styles.home__title}>Hi,<br>I am <span className={styles.home__title-color}>Joshua</span></br>3D Designer and NFT Artist</h1>

            <a href="#" className={styles.button}>Contact</a>
          </div>

          <div>
            <a href="" className={styles.home__social_icon}></a>
            <a href="" className={styles.home__social_icon}></a>
            <a href="" className={styles.home__social_icon}></a>
          </div>

          <div className={styles.home__img}>

          </div>

        </section>

        {/** ABOUT */}

      </main>

    </div>
  )
}