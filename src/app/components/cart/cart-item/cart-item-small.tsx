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
import iconVolume from "@assets/images/icons/icon-volume.png";
import iconWeight from "@assets/images/icons/icon-weight.png";
import { Link } from "react-router-dom";

interface PropsType {
  item: CartItemType;
  last: boolean;
}

const CartItemSmall: React.FC<PropsType> = ({ item, last }) => {
  const dispatch = useAppDispatch();

  const callbacks = {
    remove: React.useCallback(() => dispatch(removeFromCart(item?.info.code)), []),
    add: React.useCallback(() => dispatch(addToCart({ item: item?.info })), []),
    removeAll: React.useCallback(() => dispatch(removeFromCartFully(item?.info.code)), []),
  };

  return (
    <div className={[styles["item-wrapper-small"], last && styles["last-item"]].join(" ")}>
      <div className={styles["item-content-small"]}>
        <div className={styles["image-container"]}>
          <img className={styles.img} src={item?.info.img} alt="" />
        </div>
        <div className={styles["item-description"]}>
          <p className={styles.size}>
            {item?.info.size.type === "weight" ? (
              <img src={iconWeight} />
            ) : (
              <img src={iconVolume} />
            )}
            {item?.info.size.value}
          </p>
          <Link to={`/item/${item?.info.code}`}>
            <h4>{item?.info.title}</h4>
          </Link>
          <p>{item?.info.description.small}</p>
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
