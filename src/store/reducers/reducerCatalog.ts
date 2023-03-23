import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CatalogItemType {
  "img": string;
  "title": string;
  "size-type": string;
  "size": string;
  "code": string;
  "manufacturer": string;
  "brend": string;
  "description": string;
  "price": number;
  "for": string;
}

const initialState: {
  list: CatalogItemType[];
  sortParam: string;
  filterParams: { price: string; for: string; brends: string[] };
  perPage: number;
  currentPage: number;
} = {
  list: [],
  sortParam: "",
  filterParams: { price: "", for: "", brends: [] },
  perPage: 12,
  currentPage: 1,
};

export const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    loadCatalog: (state, action: PayloadAction<CatalogItemType[]>) => {
      state.list = action.payload;
    },
    changeSortParam: (state, action: PayloadAction<string>) => {
      state.sortParam = action.payload;
    },
    changeFilterParams: (
      state,
      action: PayloadAction<{ [key: string]: string | number | string[] }>,
    ) => {
      for (const key in action.payload) {
        state.filterParams[key] = action.payload[key];
      }
    },
  },
});

export const { loadCatalog, changeSortParam, changeFilterParams } = catalogSlice.actions;

export default catalogSlice.reducer;
