import CustomButton from "@custom/button/custom-button";
import cartIcon from "@assets/images/icons/icon-cart-white.png";
import React from "react";
import styles from "./item-cart.module.css";
import { CatalogItemType } from "@store/reducers/reducerCatalog";

interface PropsType {
  item: CatalogItemType;
  onAddToCart: (value: number) => void;
}

const ItemCart: React.FC<PropsType> = ({ item, onAddToCart }) => {
  const [itemsAmount, setItemsAmount] = React.useState(1);

  const onHandleAddToCart = () => {
    if (itemsAmount === 0) return;
    onAddToCart(itemsAmount);
    setItemsAmount(1);
  };

  return (
    <div className={styles["cart-wrapper"]}>
      <p className={styles.price}>
        {Intl.NumberFormat("ru-RU", {
          style: "currency",
          currency: "RUB",
          minimumFractionDigits: 0,
        }).format(item?.price * itemsAmount)}
      </p>
      <div className={styles.actions}>
        <button
          className={styles["cart-button"]}
          onClick={() => setItemsAmount((prev) => (prev > 1 ? (prev -= 1) : 1))}
        >
          -
        </button>
        {itemsAmount}
        <button
          className={styles["cart-button"]}
          onClick={() => setItemsAmount((prev) => (prev += 1))}
        >
          +
        </button>
      </div>
      <CustomButton onClick={onHandleAddToCart} icon={cartIcon} text="В корзину" />
    </div>
  );
};

export default ItemCart;
