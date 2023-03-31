import { CatalogItemType } from "@store/reducers/reducerCatalog";
import React from "react";
import styles from "./item-characteristics.module.css";

interface PropsType {
  item: CatalogItemType;
}

const ItemCharacteristics: React.FC<PropsType> = ({ item }) => {
  return (
    <ul className={styles.list}>
      <li>
        Производитель:<span>{item?.manufacturer}</span>
      </li>
      <li>
        Назначение:<span>{item?.description.small}</span>
      </li>
      <li>
        Бренд:<span>{item?.brend}</span>
      </li>
      <li>
        Штрихкод:<span>{item?.code}</span>
      </li>
      <li>
        Размер:<span>{item?.size.value}</span>
      </li>
    </ul>
  );
};

export default ItemCharacteristics;
