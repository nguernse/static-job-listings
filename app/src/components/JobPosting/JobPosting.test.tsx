import { render, screen } from "@testing-library/react";
import JobPosting from "./JobPosting";

const data = {
  id: 10,
  company: "The Air Filter Company",
  logo: "./images/the-air-filter-company.svg",
  new: false,
  featured: false,
  position: "Front-end Dev",
  role: "Frontend",
  level: "Junior",
  postedAt: "1mo ago",
  contract: "Part Time",
  location: "Worldwide",
  languages: ["JavaScript"],
  tools: ["React", "Sass"],
};

const onFilter = vi.fn();

describe("<JobPosting />", () => {
  test("it renders", () => {
    render(<JobPosting job={data} onFilter={onFilter} />);

    expect(screen.getByTestId("job-posting")).toBeInTheDocument();
  });

  test("logo displays", () => {
    render(<JobPosting job={data} onFilter={onFilter} />);

    expect(screen.getByAltText(data.company)).toBeInTheDocument();
  });

  describe("job details", () => {
    test("displays default details", () => {
      render(<JobPosting job={data} onFilter={onFilter} />);

      expect(screen.getByText(data.position)).toBeInTheDocument();
      expect(screen.getByText(data.company)).toBeInTheDocument();
      expect(screen.getByText(data.location)).toBeInTheDocument();
      expect(screen.getByText(data.postedAt)).toBeInTheDocument();
    });

    test("displays new job tag", () => {
      render(<JobPosting job={{ ...data, new: true }} onFilter={onFilter} />);

      expect(screen.getByText("NEW!")).toBeInTheDocument();
    });

    test("displays featured job", () => {
      render(
        <JobPosting job={{ ...data, featured: true }} onFilter={onFilter} />
      );

      expect(screen.getByText("FEATURED")).toBeInTheDocument();
      expect(screen.getByTestId("job-posting")).toHaveAttribute(
        "data-active",
        "true"
      );
    });
  });

  describe("job filters", () => {
    test("it renders filters", () => {
      render(<JobPosting job={data} onFilter={onFilter} />);

      // filters come from: role, level, languages, tools
      expect(screen.getAllByTestId("job-filter-tag")).toHaveLength(5);
    });
  });
});
