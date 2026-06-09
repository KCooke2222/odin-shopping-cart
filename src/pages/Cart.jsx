import { useState } from "react";
import styles from "./Cart.module.css";
import { useOutletContext } from "react-router-dom";
import Product from "../components/Product";
import CheckoutModal from "../components/CheckoutModal";

export default function Cart() {
  const { products, cart, setCart } = useOutletContext();
  const [showModal, setShowModal] = useState(false);

  const cartItems = Object.values(products).filter((p) => cart[p.id] > 0);
  const total = cartItems.reduce((sum, p) => sum + p.price * (cart[p.id] ?? 0), 0);

  function handleCheckout() {
    setShowModal(true);
  }

  function handleClose() {
    setShowModal(false);
    setCart({});
  }

  return (
    <div className={styles.page}>
      <h1>Cart</h1>
      <div className={styles.cartList}>
        {cartItems.map((product) => (
          <Product key={product.id} product={product} cart={cart} setCart={setCart} mode="cart" />
        ))}
      </div>
      {cartItems.length > 0 && (
        <div className={styles.footer}>
          <span className={styles.total}>Total: ${total.toLocaleString()}</span>
          <button className={styles.checkoutBtn} onClick={handleCheckout}>Checkout</button>
        </div>
      )}
      {cartItems.length === 0 && <p className={styles.empty}>Your cart is empty.</p>}

      {showModal && (
        <CheckoutModal
          cartItems={cartItems}
          cart={cart}
          total={total}
          onClose={handleClose}
        />
      )}
    </div>
  );
}
