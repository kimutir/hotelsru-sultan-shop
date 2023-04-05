import { useAppSelector } from "@store/hooks";
import React from "react";
import AdminCatalogItemRadio from "../admin-catalog-item/admin-catalog-item-radio";

interface PropsType {
  onItemClick: (id: string) => void;
}

const AdminCatalogListRadio: React.FC<PropsType> = ({ onItemClick }) => {
  const [catalogToRender, setCatalogToRender] = React.useState([]);
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

  return (
    <>
      <ul>
        {catalogToRender.map((item) => (
          <li key={item.code}>
            <AdminCatalogItemRadio onItemClick={(id: string) => onItemClick(id)} item={item} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default AdminCatalogListRadio;
