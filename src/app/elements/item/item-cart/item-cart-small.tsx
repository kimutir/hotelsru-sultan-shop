import CustomButton from "@custom/button/custom-button";
import cartIcon from "@assets/images/icons/icon-cart-white.png";
import React from "react";
import styles from "./item-cart.module.css";
import { CatalogItemType } from "@store/reducers/reducerCatalog";
import iconShare from "@assets/images/icons/icon-share.png";

interface PropsType {
  item: CatalogItemType;
  onAddToCart: (value: number) => void;
}

const ItemCartSmall: React.FC<PropsType> = ({ item, onAddToCart }) => {
  const [itemsAmount, setItemsAmount] = React.useState(1);

  const onHandleAddToCart = React.useCallback(() => {
    if (itemsAmount === 0) return;
    onAddToCart(itemsAmount);
    setItemsAmount(1);
  }, [itemsAmount]);

  return (
    <div className={styles["cart-wrapper-small"]}>
      <div className={styles["cart-content-top-small"]}>
        <p className={styles.price}>
          {Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "RUB",
            minimumFractionDigits: 0,
          }).format(item.price * itemsAmount)}
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
      </div>
      <div className={styles["cart-content-bottom-small"]}>
        <CustomButton onClick={onHandleAddToCart} icon={cartIcon} text="В корзину" />
        <button className={styles["cart-share-button-small"]}>
          <img src={iconShare} alt="" />
        </button>
      </div>
    </div>
  );
};

export default ItemCartSmall;
