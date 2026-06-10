import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

export default function NavBar({ cart }) {
  const totalCart = Object.values(cart).reduce((sum, quantity) => {
    return sum + quantity;
  }, 0);
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
        </div>
        <div className={styles.btns}>
          <Link className={styles.cartBtn} to="/cart" aria-label="cart">
            {totalCart}
            <FiShoppingCart size={22} />
          </Link>
        </div>
      </nav>
    </>
  );
}
