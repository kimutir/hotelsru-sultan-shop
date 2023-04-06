import { CatalogListType } from "@store/reducers/reducerCatalog";

export default function getCurrentCatalog({ catalog }: { catalog: CatalogListType }) {
  const result = { ...catalog };

  const catalogListFromLSJSON = localStorage.getItem("sultan-store-kim");
  const removedItemsJSON = localStorage.getItem("sultan-store-kim-deleted");
  const catalogFromLS = JSON.parse(catalogListFromLSJSON);
  for (const itemFromLS in catalogFromLS) {
    result[itemFromLS] = JSON.parse(catalogFromLS[itemFromLS]);
  }
  for (const catalogCode in result) {
    if (removedItemsJSON?.length && JSON.parse(removedItemsJSON).includes(catalogCode)) {
      delete result[catalogCode];
    }
  }

  return result;
}
