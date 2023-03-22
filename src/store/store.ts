import { configureStore } from "@reduxjs/toolkit";
import reducerCatalog from "./reducers/reducerCatalog";

export const store = configureStore({
  reducer: { catalog: reducerCatalog },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
