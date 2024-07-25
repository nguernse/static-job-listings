import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

describe("<App />", () => {
  test("default render", () => {
    render(<App />);

    expect(screen.getAllByTestId("job-posting")).toHaveLength(10);
    expect(screen.queryByTestId("job-filter-bar")).not.toBeInTheDocument();
  });

  test("user adds filters for jobs", async () => {
    render(<App />);

    expect(screen.getAllByTestId("job-posting")).toHaveLength(10);

    // click a filter tag
    const filterTag = screen.getAllByTestId("job-filter-tag")[0];

    await userEvent.click(filterTag);

    expect(screen.getByTestId("job-filter-bar")).toBeInTheDocument();
    expect(screen.getAllByTestId("job-posting").length).toBeLessThan(10);
  });

  test("user removes job filters with clear button", async () => {
    render(<App />);

    expect(screen.getAllByTestId("job-posting")).toHaveLength(10);

    // click a filter tag
    const filterTag = screen.getAllByTestId("job-filter-tag")[0];

    await userEvent.click(filterTag);

    expect(screen.getByTestId("job-filter-bar")).toBeInTheDocument();
    expect(screen.getAllByTestId("job-posting").length).toBeLessThan(10);

    // click clear filters
    const clearFilterButton = screen.getByText("Clear");

    await userEvent.click(clearFilterButton);

    expect(screen.queryByTestId("job-filter-bar")).not.toBeInTheDocument();
    expect(screen.getAllByTestId("job-posting")).toHaveLength(10);
  });

  test("user removes job filters with X button", async () => {
    render(<App />);

    expect(screen.getAllByTestId("job-posting")).toHaveLength(10);

    // click a filter tag
    const filterTag = screen.getAllByTestId("job-filter-tag")[0];

    await userEvent.click(filterTag);

    expect(screen.getByTestId("job-filter-bar")).toBeInTheDocument();
    expect(screen.getAllByTestId("job-posting").length).toBeLessThan(10);

    // click remove filter button
    const removeFilterButton = screen.getByTestId("remove-filter-button");

    await userEvent.click(removeFilterButton);

    expect(screen.queryByTestId("job-filter-bar")).not.toBeInTheDocument();
    expect(screen.getAllByTestId("job-posting")).toHaveLength(10);
  });
});
