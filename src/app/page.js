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

      <div className={styles.cards}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={styles.svgg}>
          <path fill="#6366f1" fill-opacity="0.1"
            d="M0,64L48,74.7C96,85,192,107,288,106.7C384,107,480,85,576,74.7C672,64,768,64,864,80C960,96,1056,128,1152,128C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg>
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
  );
}
