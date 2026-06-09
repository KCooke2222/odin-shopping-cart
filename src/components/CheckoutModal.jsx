import styles from "./CheckoutModal.module.css";

export default function CheckoutModal({ cartItems, cart, total, onClose }) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2>Order Confirmed</h2>
        <ul className={styles.itemList}>
          {cartItems.map((p) => (
            <li key={p.id} className={styles.item}>
              <img src={p.imageUrl} alt={p.title} className={styles.thumb} />
              <span className={styles.itemTitle}>{p.title}</span>
              <span className={styles.itemQty}>x{cart[p.id]}</span>
              <span className={styles.itemPrice}>${(p.price * cart[p.id]).toLocaleString()}</span>
            </li>
          ))}
        </ul>
        <div className={styles.modalFooter}>
          <span className={styles.total}>Total: ${total.toLocaleString()}</span>
          <button className={styles.closeBtn} onClick={onClose}>Done</button>
        </div>
      </div>
    </div>
  );
}
