import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CatalogItemType {
  img: string;
  title: string;
  size: { value: string; type: string };
  code: string;
  manufacturer: string;
  brend: string;
  description: { small: string; big: string };
  price: number;
  for: string[];
}

export interface CatalogListType {
  [key: string]: CatalogItemType;
}

const initialState: {
  list: CatalogListType;
  sortParam: string;
  filterParams: { price: string; for: string[]; brends: string[] };
  perPage: number;
  currentPage: number;
} = {
  list: {},
  sortParam: "",
  filterParams: { price: "", for: [], brends: [] },
  perPage: 12,
  currentPage: 1,
};

export const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    loadCatalog: (state, action: PayloadAction<CatalogListType>) => {
      state.list = action.payload;
    },
    changeSortParam: (state, action: PayloadAction<string>) => {
      state.sortParam = action.payload;
    },
    changeFilterParams: (state, action: PayloadAction<{ [key: string]: string | string[] }>) => {
      for (const key in action.payload) {
        if (key === "for" && !Array.isArray(action.payload["for"])) {
          if (state.filterParams["for"].includes(action.payload["for"])) {
            state.filterParams["for"] = state.filterParams["for"].filter((i) => i !== action.payload["for"]);
          } else {
            state.filterParams["for"].push(action.payload["for"]);
          }
        } else {
          state.filterParams[key] = action.payload[key];
        }
      }
    },
  },
});

export const { loadCatalog, changeSortParam, changeFilterParams } = catalogSlice.actions;

export default catalogSlice.reducer;
