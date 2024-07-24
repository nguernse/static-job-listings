import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("<Card />", () => {
  test("renders card", () => {
    render(
      <Card>
        <p>Hello world</p>
      </Card>
    );

    expect(screen.getByText("Hello world")).toBeInTheDocument();
  });

  test("active state", () => {
    render(
      <Card active>
        <p>Hello world</p>
      </Card>
    );

    const card = screen.getByText("Hello world").parentElement;

    expect(card).toHaveAttribute("data-active", "true");
  });
});
