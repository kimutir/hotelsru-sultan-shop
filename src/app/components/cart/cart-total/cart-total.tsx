import Price from "@elements/price/price";
import styles from "./cart-total.module.css";
import CustomButton from "@custom/button/custom-button";
import LayoutFlex from "@layouts/layout-flex";
import { CartListType } from "@store/reducers/reducerCart";
import React from "react";

interface PropsType {
  items: CartListType;
  openModal: () => void;
  screen: "medium" | "small";
}

const CartTotal: React.FC<PropsType> = ({ items, openModal, screen }) => {
  const [total, setTotal] = React.useState<number | null>(null);

  React.useEffect(() => {
    let result = 0;
    for (const key in items) {
      result += items[key].amount * items[key].info.price;
    }
    setTotal(result);
  }, [items]);

  const onButtonClik = () => {
    openModal();
  };

  return (
    <LayoutFlex
      width={screen === "medium" ? "90%" : undefined}
      justifyContent="space-between"
      marginBottom="40px"
      flexDirection={screen === "small" ? "column" : undefined}
      gap={screen === "small" ? "20px" : undefined}
    >
      <CustomButton text="Оформить заказ" onClick={onButtonClik} />
      <p className={styles.total}>
        <Price value={total} />
      </p>
    </LayoutFlex>
  );
};

export default CartTotal;
