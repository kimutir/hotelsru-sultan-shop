import { CatalogItemType } from "@store/reducers/reducerCatalog";

export default function getTotalIncart({
  cart,
}: {
  cart: { amount: number; info: CatalogItemType }[];
}) {
  let price = 0;
  let amount = 0;

  for (const item of cart) {
    amount += item.amount;
    price += item.amount * item.info.price;
  }

  return {
    price,
    amount,
  };
}
