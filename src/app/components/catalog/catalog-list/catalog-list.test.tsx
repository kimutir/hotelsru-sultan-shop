import CatalogList from "./catalog-list";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "@utils/redux-test-utills/redux-test";
import data from "../../../../initial-data.json";
import { setupStore } from "@store/store";
import { loadCatalog } from "@store/reducers/reducerCatalog";
import { MemoryRouter } from "react-router-dom";

describe("Catalog list render", () => {
  const store = setupStore();
  store.dispatch(loadCatalog(data));

  it("returns with 0 data", () => {
    renderWithProviders(
      <MemoryRouter>
        <CatalogList screen="big" />
      </MemoryRouter>,
    );
    expect(screen.queryByText(/Не найдено/)).toBeInTheDocument();
  });
  it("returns with items", () => {
    renderWithProviders(
      <MemoryRouter>
        <CatalogList screen="big" />
      </MemoryRouter>,
      { store },
    );
    const catalogItems = screen.getAllByTestId("catalog-item");
    expect(screen.queryByText(/Не найдено/)).toBeNull();
    expect(catalogItems.length).toBeLessThan(13);
    expect(catalogItems).toHaveLength(12);
  });
});
