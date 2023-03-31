import { CatalogItemType } from "@store/reducers/reducerCatalog";
import React from "react";

interface PropsType {
  item: CatalogItemType;
  onItemClick: (id: string) => void;
}

const AdminCatalogItemRadio: React.FC<PropsType> = ({ item, onItemClick }) => {
  return (
    <div>
      <input
        type="radio"
        name="catalog-item"
        id={item.code + "radio"}
        value={item.code}
        onChange={() => onItemClick(item.code)}
      />
      <label htmlFor={item.code + "radio"}>
        <span>{item.code}</span>
        <span>{item.title}</span>
      </label>
    </div>
  );
};

export default AdminCatalogItemRadio;
