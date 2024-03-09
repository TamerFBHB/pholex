import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
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
            <Image src="/Group-9279.png" alt="card" width={75} height={100}  className={styles.lines}/>
            <Image src="/Group-7661.png" alt="card" width={220} height={250} className={styles.card}/>
          </div>
          
        </div>
      </main >
    </div >
  );
}
