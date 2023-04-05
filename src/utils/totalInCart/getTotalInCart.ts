import { CartListType } from "@store/reducers/reducerCart";

export default function getTotalIncart({ cart }: { cart: CartListType }) {
  let price = 0;
  let amount = 0;

  for (const item in cart) {
    amount += cart[item].amount;
    price += cart[item].amount * cart[item].info.price;
  }

  return {
    price,
    amount,
  };
}
