import { useAppSelector } from "@store/hooks";
import React from "react";
import LayoutFlex from "@layouts/layout-flex";
import CartItemSmall from "../cart-item/cart-item-small";
import styles from "./cart-list.module.css";

const CartListSmall = () => {
  const cart = useAppSelector((state) => state.cart.items);

  return (
    <>
      <LayoutFlex width="90%" justifyContent="start" marginBottom="20px" marginTop="20px">
        <h2 className={styles.title}>Корзина</h2>
      </LayoutFlex>
      <LayoutFlex flexDirection="column">
        {Object.values(cart).length ? (
          Object.values(cart).map((item, index) => (
            <CartItemSmall
              item={item}
              key={item.info.code}
              last={index + 1 === Object.values(cart).length ? true : false}
            />
          ))
        ) : (
          <h2 style={{ marginTop: "50px", marginBottom: "50px" }}>Корзина пуста</h2>
        )}
      </LayoutFlex>
    </>
  );
};

export default CartListSmall;
