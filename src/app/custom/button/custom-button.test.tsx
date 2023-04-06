import { render, screen } from "@testing-library/react";
import CustomButton from "./custom-button";
import "@testing-library/jest-dom";

describe("<Toggle />", () => {
  it("should render OFF by default", () => {
    render(<CustomButton text="Подтвердить" />);

    expect(screen.getByText(/Подтвердить/)).toBeInTheDocument();
  });
});
