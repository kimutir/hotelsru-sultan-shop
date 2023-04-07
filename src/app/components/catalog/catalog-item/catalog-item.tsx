import CustomButton from "@custom/button/custom-button";
import cartIcon from "@assets/images/icons/icon-cart-white.png";
import styles from "./catalog-item.module.css";
import { CatalogItemType } from "@store/reducers/reducerCatalog";
import React from "react";
import { useAppDispatch } from "@store/hooks";
import { addToCart } from "@store/reducers/reducerCart";
import { Link } from "react-router-dom";
import iconVolume from "@assets/images/icons/icon-volume.png";
import iconWeight from "@assets/images/icons/icon-weight.png";
import Price from "@elements/price/price";

interface PropsType {
  item: CatalogItemType;
}

const CatalogItem: React.FC<PropsType> = ({ item }) => {
  const dispatch = useAppDispatch();

  const filterOptions = {
    body: "За телом",
    hands: "За руками",
  };

  return (
    <div className={styles.item} data-testid="catalog-item">
      <div className={styles.image}>
        <img src={item.img} />
      </div>
      <div className={styles.content}>
        <p className={styles.size}>
          {item?.size.type === "weight" ? <img src={iconWeight} /> : <img src={iconVolume} />}
          {item?.size.value}
        </p>
        <Link to={`item/${item.code}`}>
          <div className={styles.title}>
            <strong>{item.title}</strong> {item.description.small}
          </div>
        </Link>

        <p className={styles.info}>
          Штрихкод: <span>{item.code}</span>
        </p>
        <p className={styles.info}>
          Производитель: <span>{item.manufacturer}</span>
        </p>
        <p className={styles.info}>
          Бренд: <span>{item.brend}</span>
        </p>
        <p className={styles.info}>
          Тип ухода:
          {item.for.map((i) => (
            <span key={i}>{filterOptions[i]}</span>
          ))}
        </p>
        <div className={styles.bottom}>
          <strong>
            <Price value={item.price} />
          </strong>
          <CustomButton testId="add-to-cart-button" onClick={() => dispatch(addToCart({ item }))} text="В корзину" icon={cartIcon} />
        </div>
      </div>
    </div>
  );
};

export default CatalogItem;
