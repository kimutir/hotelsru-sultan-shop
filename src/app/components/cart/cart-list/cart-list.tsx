import { useAppSelector } from "@store/hooks";
import React from "react";
import CartItem from "../cart-item/cart-item";
import LayoutFlex from "@layouts/layout-flex";

const CartList = () => {
  const cart = useAppSelector((state) => state.cart.items);

  return (
    <>
      <LayoutFlex justifyContent="start">
        <h2>Корзина</h2>
      </LayoutFlex>
      <LayoutFlex justifyContent="space-between" flexDirection="column">
        {Object.values(cart).length ? (
          Object.values(cart).map((item, index) => (
            <CartItem
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

export default CartList;
