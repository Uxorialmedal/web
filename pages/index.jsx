import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { BiHome, BiUser, BiBookBookmark, BiBriefcase, BiMoon} from "react-icons/bi";

export default function MainPage() {
  return (
    <div>
      <Head>
        <title>Joshua</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <nav className={styles.container}>
          <a href="#" className={styles.nav__logo}>Joshua</a>

          <div className={styles.nav__menu}>
            <ul className={styles.nav__list}>
              <li className={styles.item}>
                <a href="#home" className={styles.nav__link}>
                  <BiHome/>
                </a>
              </li>

              <li className={styles.item}>
                <a href="#about" className={styles.nav__link}>
                  <BiUser/>
                </a>
              </li>

              <li className={styles.item}>
                <a href="#skills" className={styles.nav__link}>
                  <BiBookBookmark/>
                </a>
              </li>

              <li className={styles.item}>
                <a href="#work" className={styles.nav__link}>
                  <BiBriefcase/>
                </a>
              </li>
            </ul>
          </div>

          {/**The change button */}
          <i className={styles.changeTheme}>
            <BiMoon/>
          </i>
        </nav>
      </header>
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
