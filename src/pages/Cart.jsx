import styles from "./Shop.module.css";
import { useOutletContext } from "react-router-dom";
import Product from "../components/Product";

export default function Shop() {
  const { products, cart, setCart } = useOutletContext();

  function resetCart(amount) {
    setCart({});
  }

  return (
    <>
      <div className={styles.page}>
        <h1>Cart</h1>
        {Object.values(products)
          .filter((product) => cart[product.id] > 0)
          .map((product) => (
            <Product
              key={product.id}
              product={product}
              cart={cart}
              setCart={setCart}
            />
          ))}
      </div>
      <button onClick={() => resetCart()}> Checkout </button>
    </>
  );
}
