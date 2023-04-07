import data from "../../../../initial-data.json";
import { screen } from "@testing-library/react";
import { setupStore } from "@store/store";
import { loadCatalog } from "@store/reducers/reducerCatalog";
import { renderWithProviders } from "@utils/redux-test-utills/redux-test";
import CatalogAside from "./catalog-aside";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("Catalog aside renders", () => {
  const store = setupStore();
  store.dispatch(loadCatalog(data));
  it("returns when searching toyota in brends", async () => {
    const user = userEvent.setup();
    renderWithProviders(
      <MemoryRouter>
        <CatalogAside />
      </MemoryRouter>,
      { store },
    );

    const checkboxInput: HTMLInputElement = screen.getByTestId("filter-checkbox-input");
    const submitButton = screen.getByTestId("filter-checkbox-submit");
    await userEvent.type(checkboxInput, "toyota");
    expect(checkboxInput.value).toBe("toyota");
    await user.click(submitButton);
    const checkboxItems = screen.getAllByTestId("filter-checkbox-item");
    expect(checkboxItems[0]).toHaveTextContent("Toyota");
    expect(checkboxItems).toHaveLength(1);
  });

  it("returns 'not found' when search vakue doesnt exist", async () => {
    const user = userEvent.setup();
    renderWithProviders(
      <MemoryRouter>
        <CatalogAside />
      </MemoryRouter>,
      { store },
    );

    const checkboxInput: HTMLInputElement = screen.getByTestId("filter-checkbox-input");
    const submitButton = screen.getByTestId("filter-checkbox-submit");
    await userEvent.type(checkboxInput, "t123a");
    await user.click(submitButton);
    expect(screen.getByText("Не найдено")).toBeInTheDocument();
  });

  it("returns 'not found' with 0 initial data", async () => {
    renderWithProviders(
      <MemoryRouter>
        <CatalogAside />
      </MemoryRouter>,
    );

    expect(screen.getByText("Не найдено")).toBeInTheDocument();
  });
});
