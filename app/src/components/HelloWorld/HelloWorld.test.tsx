import { render, screen } from "@testing-library/react";
import HelloWorld from "./HelloWorld";

describe("<HelloWorld />", () => {
  test("renders", async () => {
    // ARRANGE
    render(<HelloWorld />);

    // ACT
    await screen.findByRole("heading");

    // ASSERT
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });
});
