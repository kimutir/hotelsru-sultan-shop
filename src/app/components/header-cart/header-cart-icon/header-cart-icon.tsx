import { useAppSelector } from "@store/hooks";
import styles from "../header-cart.module.css";
import cartIcon from "@assets/images/icons/icon-cart.png";
import getTotalIncart from "@utils/totalInCart/getTotalInCart";
import { useNavigate } from "react-router-dom";

const HeaderCartIcon = () => {
  const cart = useAppSelector((state) => state.cart.items);
  const total = getTotalIncart({ cart });
  const navigate = useNavigate();

  const onCartClick = () => {
    navigate("/cart");
  };

  return (
    <div className={styles.cart} onClick={onCartClick}>
      <img src={cartIcon} alt="" />
      <div className={styles["cart-amount"]} data-testid="amount-in-header-cart">
        {total.amount}
      </div>
    </div>
  );
};

export default HeaderCartIcon;
