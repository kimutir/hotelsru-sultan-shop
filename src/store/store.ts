import { configureStore } from "@reduxjs/toolkit";
import reducerCatalog from "./reducers/reducerCatalog";
import reducerCart from "./reducers/reducerCart";

export const store = configureStore({
  reducer: { catalog: reducerCatalog, cart: reducerCart },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
