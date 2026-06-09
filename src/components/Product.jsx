import styles from "./Product.module.css";

export default function Product({ product, cart, setCart, mode = "shop" }) {
  const qty = cart[product.id] ?? 0;

  function adjustCart(amount) {
    setCart({ ...cart, [product.id]: Math.max(0, qty + amount) });
  }

  const containerClass = mode === "cart" ? styles.productCart : styles.productShop;

  return (
    <div className={containerClass}>
      <img src={product.imageUrl} alt={product.title} />
      <div className={styles.info}>
        <h1>{product.title}</h1>
        <p>${product.price.toLocaleString()}</p>
        <div className={styles.quantity}>
          <button onClick={() => adjustCart(-1)}>-</button>
          <p>{qty}</p>
          <button onClick={() => adjustCart(1)}>+</button>
        </div>
      </div>
    </div>
  );
}
