import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CatalogItemType } from "./reducerCatalog";
import isInCart from "../../app/utils/isInCart";

const initialState: {
  items: { info: CatalogItemType; amount: number }[];
} = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CatalogItemType>) => {
      const inCart = isInCart({ item: action.payload, itemList: state.items });
      if (inCart) {
        for (const item of state.items) {
          if (item.info.code === action.payload.code) {
            item.amount += 1;
            break;
          }
        }
      } else {
        state.items.push({ info: action.payload, amount: 1 });
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
