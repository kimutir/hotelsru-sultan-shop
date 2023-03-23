import { CatalogItemType } from "@store/reducers/reducerCatalog";

export default function isInCart({
  item,
  itemList,
}: {
  item: CatalogItemType;
  itemList: { info: CatalogItemType; amount: number }[];
}) {
  let result: boolean;

  for (const i of itemList) {
    if (i.info.code === item.code) {
      result = true;
      break;
    }
    result = false;
  }

  return result;
}
