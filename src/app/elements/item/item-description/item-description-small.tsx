import HiddenContent from "@custom/hidden-content/hidden-content";
import { CatalogItemType } from "@store/reducers/reducerCatalog";
import styles from "./item-decription.module.css";
import React from "react";
import LayoutFlex from "@layouts/layout-flex";
import ItemCharacteristics from "@elements/item/item-characteristics/item-characteristics";
import ItemActionsSmall from "../item-actions/item-actions-small";
import ItemCartSmall from "@elements/item/item-cart/item-cart-small";

interface PropsType {
  item: CatalogItemType;
  onAddToCart: (value: number) => void;
}

const ItemDescriptionSmall: React.FC<PropsType> = ({ item, onAddToCart }) => {
  return (
    <LayoutFlex marginTop="50px" marginBottom="50px" flexDirection="column">
      <div className={styles["image-wrapper-small"]}>
        <img className={styles["image-small"]} src="https://i.ibb.co/JzsDkZZ/image-22.png" alt="" />
      </div>
      <div className={styles["content-wrapper-small"]}>
        <h3 className={styles.title}>{item.title}</h3>
        <p>{item.size.value}</p>
        <ItemCartSmall onAddToCart={onAddToCart} item={item} />
        <ItemActionsSmall />

        <div></div>
        <div className={styles["description-small"]}>
          <p>
            Производитель:<span>{item.manufacturer}</span>
          </p>
          <p>
            Бренд:<span>{item.brend}</span>
          </p>
          <p>
            Штрихкод:<span>{item.code}</span>
          </p>
        </div>
        <HiddenContent title="Описание">{item.description.big}</HiddenContent>
        <HiddenContent title="Характеристики">
          <ItemCharacteristics item={item} />
        </HiddenContent>
      </div>
    </LayoutFlex>
  );
};

export default ItemDescriptionSmall;
