import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";
import { BiSearchAlt } from "react-icons/bi";

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
        <div className={`${styles.card} ${styles.why}`}>
          <h4>our services</h4>
          <h1>we're here to make your website</h1>
        </div>
        <div className={`${styles.card} ${styles.seo}`}>
          <BiSearchAlt className={styles.iconSearch}/>
          <h3>optimize & SEO</h3>
          <p>for far away.behind the word ,ountains.far from the countries vokalia and consonantia</p>
        </div>
        <div className={`${styles.card} ${styles.deigning}`}></div>
        <div className={`${styles.card} ${styles.developement}`}></div>
      </div>
    </div>
  );
}
