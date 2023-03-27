import { CartItemType } from "@store/reducers/reducerCart";
import React from "react";
import trashIcon from "@assets/images/icons/icon-trash-white.png";
import CustomButton from "@custom/button/custom-button";
import styles from "./cart-actions.module.css";

interface PropsType {
  addToCart: () => void;
  removeFromCart: () => void;
  removeFromCartFully: () => void;
  item: CartItemType;
}

const CartActions: React.FC<PropsType> = ({
  addToCart,
  removeFromCart,
  removeFromCartFully,
  item,
}) => {
  return (
    <div className={styles["cart-wrapper"]}>
      <div className={styles.actions}>
        <button className={styles["cart-button"]} onClick={removeFromCart}>
          <span className={styles["button-content"]}>-</span>
        </button>
        {item.amount}
        <button className={styles["cart-button"]} onClick={addToCart}>
          <span className={styles["button-content"]}>+</span>
        </button>
      </div>
      <p className={styles.price}>{item.info.price * item.amount}</p>
      <CustomButton onClick={removeFromCartFully} icon={trashIcon} />
    </div>
  );
};

export default CartActions;
