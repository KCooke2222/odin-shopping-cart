import styles from "./Shop.module.css";
import { useOutletContext } from "react-router-dom";
import Product from "../components/Product";

export default function Shop() {
  const { products, cart, setCart } = useOutletContext();

  return (
    <>
      <div className={styles.page}>
        <h1>Shop</h1>
        <div className={styles.shopGrid}>
          {Object.values(products).map((product) => (
            <Product
              key={product.id}
              product={product}
              cart={cart}
              setCart={setCart}
              mode="shop"
            />
          ))}
        </div>
      </div>
    </>
  );
}
