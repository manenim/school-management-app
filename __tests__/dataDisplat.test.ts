import React from "react";
import { render, waitFor } from "@testing-library/react";
import TeachersView from "@/pages/teachers-view";

describe("TeachersView component", () => {
  it("renders heading and button", () => {
    const { getByText } = render(<TeachersView />);
    expect(getByText("All Teachers")).toBeInTheDocument();
    expect(getByText("Add a Teacher")).toBeInTheDocument();
  });

  it("renders SkeletonCard when teachers data is loading", () => {
    const { getByTestId } = render(<TeachersView />);
    expect(getByTestId("skeleton-card")).toBeInTheDocument();
  });

  it("renders DataTable with teachers data when available", async () => {
    const teachers = [{ id: 1, name: "Teacher 1" }];
    const { getByText } = render(<TeachersView />, {
      preloadedState: { teachers },
    });
    await waitFor(() => getByText("Teacher 1"));
  });

  it("renders link to add teacher page", () => {
    const { getByText } = render(<TeachersView />);
    expect(getByText("Add a Teacher")).toHaveAttribute(
      "href",
      "/dashboard/teachers/register"
    );
  });
});
