import cartIcon from "@assets/images/icons/icon-cart.png";
import styles from "./header-cart.module.css";

const HeaderCart = () => {
  return (
    <div className={styles["cart-wrapper"]}>
      <div className={styles.cart}>
        <img src={cartIcon} alt="" />
        <div className={styles["cart-amount"]}>5</div>
      </div>
      <div>
        <p className={styles["cart-title"]}>Козина</p>
        <p className={styles["cart-total"]}>какая-то сумма</p>
      </div>
    </div>
  );
};

export default HeaderCart;
