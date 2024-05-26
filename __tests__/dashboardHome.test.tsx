import React from "react";
import { render, waitFor } from "@testing-library/react";
import Display from "@/pages/dashboard";

describe("Display component", () => {
  it("renders Overview heading", () => {
    const { getByText } = render(<Display />);
    expect(getByText("Overview")).toBeInTheDocument();
  });

  it("renders SkeletonCard when teachers data is loading", () => {
    const { getByTestId } = render(<Display />);
    expect(getByTestId("skeleton-card")).toBeInTheDocument();
  });

  it("renders teachers card with correct data when available", async () => {
    const teachers = [{ id: 1, name: "Teacher 1" }];
    const { getByText } = render(<Display />, {
      preloadedState: { teachers },
    });
    await waitFor(() => getByText("Total Number of Teachers"));
    expect(getByText("1")).toBeInTheDocument();
  });

  it("renders students card with correct data when available", async () => {
    const students = [{ id: 1, name: "Student 1" }];
    const { getByText } = render(<Display />, {
      preloadedState: { students },
    });
    await waitFor(() => getByText("Total Number of Students"));
    expect(getByText("1")).toBeInTheDocument();
  });

  it("renders links to teachers and students pages", () => {
    const { getByText } = render(<Display />);
    expect(getByText("Teachers")).toHaveAttribute(
      "href",
      "/dashboard/teachers"
    );
    expect(getByText("Students")).toHaveAttribute(
      "href",
      "/dashboard/students"
    );
  });
});
