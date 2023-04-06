import CatalogList from "./catalog-list";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "@utils/redux-test-utills/redux-test";

describe("Catalog list render", () => {
  it("returns 0 items", () => {
    renderWithProviders(<CatalogList screen="medium" />);
    expect(screen.getByText(/Не найдено/)).toBeInTheDocument();
  });
});
