import cartIcon from "@assets/images/icons/icon-cart.png";
import styles from "./header-cart.module.css";
import { useAppSelector } from "@store/hooks";
import getTotalIncart from "@utils/getTotalInCart";

const HeaderCart = () => {
  const cart = useAppSelector((state) => state.cart.items);

  const total = getTotalIncart({ cart });

  return (
    <div className={styles["cart-wrapper"]}>
      <div className={styles.cart}>
        <img src={cartIcon} alt="" />
        <div className={styles["cart-amount"]}>{total.amount}</div>
      </div>
      <div>
        <p className={styles["cart-title"]}>Козина</p>
        <p className={styles["cart-total"]}>{total.price}</p>
      </div>
    </div>
  );
};

export default HeaderCart;
