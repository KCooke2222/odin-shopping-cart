import styles from "./Home.module.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <main className={styles.home}>
        <div className={styles.title}>
          <h1>Automobile</h1>
          <Link className={styles.shopButton} to="/Shop">
            Shop Now
          </Link>
        </div>
      </main>
    </>
  );
}
