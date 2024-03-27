import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";
import { BiSearchAlt } from "react-icons/bi";
import { HiCodeBracketSquare } from "react-icons/hi2";
import { MdDesignServices } from "react-icons/md";

export default function Home() {
  return (
    <div className={styles.mains}>
      <main className={styles.main}>
        <div className={styles.info}>
          <h6>why choose us</h6>
          <h1>get instant growth result for business.</h1>
          <p>for far away.behind the word ,ountains.far from the countries vokalia and consonantia</p>

          <Link href="#" className={styles.btn}>read more</Link>
        </div>

        <div className={styles.avatarContainer} >
          <div className={styles.avatar}>
            <Image src="/Hero Image.png" alt="avatar" fill />
            <Image src="/Group-9279.png" alt="" width={75} height={100} className={styles.lines} />
            <div className={styles.imageCardContainer}>
              <div className={styles.imgCards}>
                <Image src="/Group-7661.png" alt="" fill className={styles.imgCard} />
              </div>
            </div>
          </div>
        </div>
      </main >

<div className={styles.sectioncards}>
<div className={styles.cards}>
        <div class={styles.customshape}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapeFill}></path>
          </svg>
        </div>

        <div className={`${styles.card} ${styles.why}`}>
          <h4>our services</h4>
          <h1>we're here to make your website</h1>
        </div>
        <div className={`${styles.card} ${styles.seo}`}>
          <BiSearchAlt className={styles.iconSearch} />
          <h3>optimize & SEO</h3>
          <p>for far away.behind the word ,ountains.far from the countries vokalia and consonantia</p>
        </div>
        <div className={`${styles.card} ${styles.seo}`}>
          <MdDesignServices className={styles.iconSearch} />
          <h3>designing</h3>
          <p>for far away.behind the word ,ountains.far from the countries vokalia and consonantia</p>
        </div>
        <div className={`${styles.card} ${styles.seo}`}>
          <HiCodeBracketSquare className={styles.iconSearch} />
          <h3>developement</h3>
          <p>for far away.behind the word ,ountains.far from the countries vokalia and consonantia</p>
        </div>
      </div>


      <div className={styles.aboutUs}>
        <div className="container">
          <div className={styles.about}>
            <div className={styles.avatarContainer}>
              <Image src={"/aboutUS.png"} alt="about us" fill className={styles.avatar} />
            </div>
            <div className={styles.info}>
              <h3>about us</h3>
              <h1>our company is here to help you</h1>
              <p>for far away.behind the word ,ountains.far from the countries vokalia and consonantia</p>
              <Link href="#" className={styles.btn}>read more</Link>
            </div>
          </div>
        </div>
      </div>
      </div>

    </div>
  );
}
