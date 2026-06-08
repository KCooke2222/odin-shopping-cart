import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </>
  );
}
