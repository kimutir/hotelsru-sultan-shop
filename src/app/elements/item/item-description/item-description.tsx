import ItemCart from "@elements/item/item-cart/item-cart";
import HiddenContent from "@custom/hidden-content/hidden-content";
import { CatalogItemType } from "@store/reducers/reducerCatalog";
import styles from "./item-decription.module.css";
import React from "react";
import LayoutFlex from "@layouts/layout-flex";
import ItemCharacteristics from "@elements/item/item-characteristics/item-characteristics";
import ItemActions from "@elements/item/item-actions/item-actions";
import iconVolume from "@assets/images/icons/icon-volume.png";
import iconWeight from "@assets/images/icons/icon-weight.png";

interface PropsType {
  item: CatalogItemType;
  onAddToCart: (value: number) => void;
}

const ItemDescription: React.FC<PropsType> = ({ item, onAddToCart }) => {
  return (
    <LayoutFlex
      justifyContent="space-between"
      alignItems="top"
      marginTop="50px"
      marginBottom="50px"
    >
      <div className={styles["image-wrapper"]}>
        <img className={styles.image} src="https://i.ibb.co/JzsDkZZ/image-22.png" alt="" />
      </div>
      <div className={styles["content-wrapper"]}>
        <h3 className={styles.title}>{item?.title}</h3>
        <p className={styles.size}>
          {item?.size.type === "weight" ? <img src={iconWeight} /> : <img src={iconVolume} />}
          {item?.size.value}
        </p>
        <ItemCart onAddToCart={onAddToCart} item={item} />
        <div></div>
        <div className={styles["description-small"]}>
          <p>
            Производитель:<span>{item?.manufacturer}</span>
          </p>
          <p>
            Бренд:<span>{item?.brend}</span>
          </p>
          <p>
            Штрихкод:<span>{item?.code}</span>
          </p>
        </div>
        <ItemActions />
        <HiddenContent title="Описание">{item?.description.big}</HiddenContent>
        <HiddenContent title="Характеристики">
          <ItemCharacteristics item={item} />
        </HiddenContent>
      </div>
    </LayoutFlex>
  );
};

export default ItemDescription;
