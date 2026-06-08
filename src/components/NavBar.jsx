import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

export default function NavBar() {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.links}>
          <Link className={styles.link} to="/">
            Home
          </Link>
          <Link className={styles.link} to="/shop">
            Shop
          </Link>
          <Link className={styles.link} to="/cart">
            Cart
          </Link>
        </div>
        <div className={styles.btns}>
          <Link className={styles.cartBtn} to="/cart"><FiShoppingCart size={22} /></Link>
        </div>
      </nav>
    </>
  );
}
