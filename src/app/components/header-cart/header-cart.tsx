import styles from "./header-cart.module.css";
import { useAppSelector } from "@store/hooks";
import getTotalIncart from "@utils/totalInCart/getTotalInCart";
import { Link } from "react-router-dom";
import HeaderCartIcon from "./header-cart-icon/header-cart-icon";
import Price from "@elements/price/price";

const HeaderCart = () => {
  const cart = useAppSelector((state) => state.cart.items);

  const total = getTotalIncart({ cart });

  return (
    <div className={styles["cart-wrapper"]}>
      <HeaderCartIcon />
      <div>
        <Link to="cart">
          <p className={styles["cart-title"]}>Козина</p>
        </Link>
        <p className={styles["cart-total"]}>
          <Price value={total.price} />
        </p>
      </div>
    </div>
  );
};

export default HeaderCart;
