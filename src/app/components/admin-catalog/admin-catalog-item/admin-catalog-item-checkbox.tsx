import { CatalogItemType } from "@store/reducers/reducerCatalog";
import React from "react";

interface PropsType {
  item: CatalogItemType;
  onItemClick: (id: string) => void;
}

const AdminCatalogItemCheckbox: React.FC<PropsType> = ({ item, onItemClick }) => {
  return (
    <div>
      <input id={item.code} type="checkbox" onChange={() => onItemClick(item.code)} />
      <label htmlFor={item.code}>
        <span>{item.code}</span>
        <span>{item.title}</span>
      </label>
    </div>
  );
};

export default AdminCatalogItemCheckbox;
