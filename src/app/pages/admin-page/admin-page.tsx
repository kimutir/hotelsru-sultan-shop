import styles from "./admin-page.module.css";
import { Link } from "react-router-dom";
import React from "react";
import AdminCatalogListCheckbox from "@components/admin-catalog/admin-catalog-list/admin-catalog-list-checkbox";
import AdminCatalogListRadio from "@components/admin-catalog/admin-catalog-list/admin-catalog-list-radio";
import AdminForm from "@components/admin-form/admin-form";
import { useAppSelector } from "@store/hooks";
import { CatalogItemType } from "@store/reducers/reducerCatalog";
import LayoutFlex from "@layouts/layout-flex";

const AdminPage = () => {
  const [added, setAdded] = React.useState(false);
  const [itemToChange, setItemToChange] = React.useState<string | null>(null);
  const [action, setAction] = React.useState<"change" | "add" | "delete">("add");

  const [catalogListFinal, setCatalogListFinal] = React.useState<{
    [key: string]: CatalogItemType;
  }>({});
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

    setCatalogListFinal(catalog);
  }, [catalogList, catalogListFromLocalStorageJSON, removedItemsJSON]);

  const onHandleDelete = (deletedItems: string[]) => {
    const deletedFromLSJSON = localStorage.getItem("sultan-store-kim-deleted");
    const deletedFromLS = deletedFromLSJSON ? JSON.parse(deletedFromLSJSON) : null;
    const itemsFromLSJSON = localStorage.getItem("sultan-store-kim");
    const itemsFromLS = itemsFromLSJSON ? JSON.parse(itemsFromLSJSON) : null;
    if (deletedItems.length) {
      let arr = [...deletedItems];

      for (const key in itemsFromLS) {
        if (deletedItems.includes(key)) {
          delete itemsFromLS[key];
          // arr = arr.filter((i) => i !== key);
        }
      }

      itemsFromLS && localStorage.setItem("sultan-store-kim", JSON.stringify(itemsFromLS));

      const result = deletedFromLS?.length ? [...deletedFromLS, ...arr] : arr;
      localStorage.setItem("sultan-store-kim-deleted", JSON.stringify(result));
      setAdded(!added);
    }
  };

  const callbacks = {
    onClearButtonClick: () => {
      localStorage.removeItem("sultan-store-kim");
      localStorage.removeItem("sultan-store-kim-deleted");
      setAdded(!added);
    },
    onDeleteButtonClick: () => {
      setAction("delete");
    },
    onChangeButtonClick: () => {
      setAction("change");
    },
    onAddButtonClick: () => {
      setAction("add");
      setItemToChange(null);
    },
    onSelectItemToChange: (id: string) => {
      setItemToChange(id);
    },
  };

  return (
    <div className={styles["admin-wrapper"]}>
      <LayoutFlex justifyContent="space-evenly" width="700px">
        <Link to="/">Каталог</Link>
        <button
          style={action === "add" ? { borderBottom: "3px solid orange" } : {}}
          className={styles["action-button"]}
          onClick={callbacks.onAddButtonClick}
        >
          Добавить
        </button>
        <button
          className={styles["action-button"]}
          style={action === "change" ? { borderBottom: "3px solid orange" } : {}}
          onClick={callbacks.onChangeButtonClick}
        >
          Изменить
        </button>
        <button
          className={styles["action-button"]}
          style={action === "delete" ? { borderBottom: "3px solid orange" } : {}}
          onClick={callbacks.onDeleteButtonClick}
        >
          Удалить
        </button>
        <button className={styles["action-button"]} onClick={callbacks.onClearButtonClick}>
          Очистить localStorage
        </button>
      </LayoutFlex>

      <LayoutFlex justifyContent="space-evenly" marginTop="50px">
        {(action === "add" || action === "change") && (
          <AdminForm
            actionType={action}
            item={itemToChange ? catalogListFinal[itemToChange] : null}
            toRerender={() => setAdded(!added)}
          />
        )}

        {action === "delete" && (
          <AdminCatalogListCheckbox onDelete={(items) => onHandleDelete(items)} />
        )}
        {action === "change" && (
          <AdminCatalogListRadio onItemClick={callbacks.onSelectItemToChange} />
        )}
      </LayoutFlex>
    </div>
  );
};

export default AdminPage;
