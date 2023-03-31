import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CatalogItemType } from "./reducerCatalog";

export interface CartItemType {
  info: CatalogItemType;
  amount: number;
}

export interface CartListType {
  [key: string]: CartItemType;
}

const initialState: {
  items: CartListType;
} = {
  items: {},
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ item: CatalogItemType; amount?: number }>) => {
      const cartItem = state.items[action.payload.item.code];
      if (cartItem) {
        state.items[cartItem.info.code].amount += action.payload.amount ?? 1;
      } else {
        state.items[action.payload.item.code] = {
          info: action.payload.item,
          amount: action.payload.amount ?? 1,
        };
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      if (state.items[action.payload].amount > 1) {
        state.items[action.payload].amount -= 1;
      } else {
        delete state.items[action.payload];
      }
    },
    removeFromCartFully: (state, action: PayloadAction<string>) => {
      delete state.items[action.payload];
    },
    resetCart: (state) => {
      state.items = {};
    },
  },
});

export const { addToCart, removeFromCart, removeFromCartFully, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
