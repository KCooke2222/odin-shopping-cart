import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.home}>
        <div className={styles.title}>
          <h1>Automobile</h1>
          <button className={styles.shopButton}>
            Shop Now
          </button>
        </div>
      </main>
    </>
  );
}
