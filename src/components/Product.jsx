import styles from "./Product.module.css";

export default function Product({ product, cart, setCart }) {
  function adjustCart(amount) {
    const qty = cart[product.id] ?? 0;
    setCart({ ...cart, [product.id]: Math.max(0, qty + amount) });
  }

  return (
    <>
      <div className={styles.product}>
        <img src={product.imageUrl} alt={product.title} />
        <div className={styles.info}>
          <h1>{product.title}</h1>
          <p>${product.price.toLocaleString()}</p>
          <div className={styles.quantity}>
            <button onClick={() => adjustCart(-1)}>-</button>
            <p>{cart[product.id] ?? 0}</p>
            <button onClick={() => adjustCart(1)}>+</button>
          </div>
        </div>
      </div>
    </>
  );
}
