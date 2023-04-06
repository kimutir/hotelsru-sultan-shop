import React, { PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import type { PreloadedState } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

// As a basic setup, import your same slice reducers
// import userReducer from '../features/users/userSlice'
import reducerCart from "@store/reducers/reducerCart";
import reducerCatalog from "@store/reducers/reducerCatalog";
import { RootState, AppStore } from "@store/store";
// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = { catalog: { list: {}, sortParam: "", filterParams: { price: "", for: [], brends: [] }, perPage: 12, currentPage: 1 }, cart: { items: {} } },
    // Automatically create a store instance if no store was passed in
    store = configureStore({ reducer: { cart: reducerCart, catalog: reducerCatalog }, preloadedState }),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  function Wrapper({ children }: PropsWithChildren<{}>) {
    return <Provider store={store}>{children}</Provider>;
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
