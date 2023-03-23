import CustomButton from "@custom/button/custom-button";
import cartIcon from "@assets/images/icons/icon-cart-white.png";
import styles from "./catalog-item.module.css";
import { CatalogItemType } from "@store/reducers/reducerCatalog";
import React from "react";
import { useAppDispatch } from "@store/hooks";
import { addToCart } from "@store/reducers/reducerCart";

interface PropsType {
  item: CatalogItemType;
}

const CatalogItem: React.FC<PropsType> = ({ item }) => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.item}>
      <div className={styles.image}>
        <img src={item.img} />
      </div>
      <div className={styles.content}>
        <p className={styles.size}>{item.size}</p>
        <div className={styles.title}>
          <strong>{item.title}</strong> {item.description}
        </div>
        <p className={styles.info}>
          Штрихкод: <span>{item.code}</span>
        </p>
        <p className={styles.info}>
          Производиткль: <span>{item.manufacturer}</span>
        </p>
        <p className={styles.info}>
          Бренд: <span>{item.brend}</span>
        </p>
        <p className={styles.info}>
          Тип ухода: <span>{item.for === "body" ? "За телом" : "За руками"}</span>
        </p>
        <div className={styles.bottom}>
          <strong>{item.price}</strong>
          <CustomButton
            onClick={() => dispatch(addToCart(item))}
            text="В корзину"
            icon={cartIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default CatalogItem;
