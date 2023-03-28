import {
  CartItemType,
  addToCart,
  removeFromCart,
  removeFromCartFully,
} from "@store/reducers/reducerCart";
import React from "react";
import styles from "./cart-item.module.css";
import { useAppDispatch } from "@store/hooks";
import CartActionsSmall from "@elements/cart/cart-actions/cart-actions-small";

interface PropsType {
  item: CartItemType;
  last: boolean;
}

const CartItemSmall: React.FC<PropsType> = ({ item, last }) => {
  const dispatch = useAppDispatch();

  const callbacks = {
    remove: React.useCallback(() => dispatch(removeFromCart(item.info.code)), []),
    add: React.useCallback(() => dispatch(addToCart({ item: item.info })), []),
    removeAll: React.useCallback(() => dispatch(removeFromCartFully(item.info.code)), []),
  };

  return (
    <div className={[styles["item-wrapper-small"], last && styles["last-item"]].join(" ")}>
      <div className={styles["item-content-small"]}>
        <div className={styles["image-container"]}>
          <img className={styles.img} src={item.info.img} alt="" />
        </div>
        <div className={styles["item-description"]}>
          <p>{item.info.size.value}</p>
          <h4>{item.info.title}</h4>
          <p>{item.info.description.small}</p>
        </div>
      </div>
      <CartActionsSmall
        addToCart={callbacks.add}
        item={item}
        removeFromCart={callbacks.remove}
        removeFromCartFully={callbacks.removeAll}
      />
    </div>
  );
};

export default CartItemSmall;
