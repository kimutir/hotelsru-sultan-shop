import { useAppSelector } from "@store/hooks";
import React from "react";
import AdminCatalogItemCheckbox from "../admin-catalog-item/admin-catalog-item-checkbox";

interface PropsType {
  onDelete: (items: string[]) => void;
}

const AdminCatalogListCheckbox: React.FC<PropsType> = ({ onDelete }) => {
  const [catalogToRender, setCatalogToRender] = React.useState([]);
  const [itemsToDelete, setItemsToDelete] = React.useState([]);
  const catalogList = useAppSelector((state) => state.catalog.list);
  const catalogListFromLocalStorageJSON = localStorage.getItem("sultan-store-kim");
  const removedItemsJSON = localStorage.getItem("sultan-store-kim-deleted");

  React.useEffect(() => {
    const catalog = { ...catalogList };
    const catalogFromLS = JSON.parse(catalogListFromLocalStorageJSON);
    for (const itemFromLS in catalogFromLS) {
      catalog[itemFromLS] = JSON.parse(catalogFromLS[itemFromLS]);
    }
    for (const catalogCode in catalog) {
      if (removedItemsJSON?.length && JSON.parse(removedItemsJSON).includes(catalogCode)) {
        delete catalog[catalogCode];
      }
    }

    setCatalogToRender(Object.values(catalog));
  }, [catalogList, catalogListFromLocalStorageJSON, removedItemsJSON]);

  const onItemClick = (id: string) => {
    if (itemsToDelete.includes(id)) {
      const filtered = [...itemsToDelete].filter((i) => i !== id);
      setItemsToDelete(filtered);
    } else {
      setItemsToDelete([...itemsToDelete, id]);
    }
  };

  const onHandleDeleteClick = () => {
    onDelete(itemsToDelete);
    setItemsToDelete([]);
  };

  return (
    <div>
      <ul>
        {catalogToRender.map((item) => (
          <li key={item.code}>
            <AdminCatalogItemCheckbox onItemClick={(id) => onItemClick(id)} item={item} />
          </li>
        ))}
      </ul>
      <button style={{ marginTop: "20px" }} onClick={onHandleDeleteClick}>
        Удалить
      </button>
    </div>
  );
};

export default AdminCatalogListCheckbox;
