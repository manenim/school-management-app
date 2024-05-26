import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import TeachersForm from "@/pages/teachers-form";

describe("TeachersForm component", () => {
  it("renders form with correct fields", () => {
    const { getByLabelText } = render(<TeachersForm />);
    expect(getByLabelText("National ID Number")).toBeInTheDocument();
    expect(getByLabelText("Title")).toBeInTheDocument();
    expect(getByLabelText("Name")).toBeInTheDocument();
    expect(getByLabelText("Surname")).toBeInTheDocument();
    expect(getByLabelText("Date of birth")).toBeInTheDocument();
    expect(getByLabelText("Teacher Number")).toBeInTheDocument();
    expect(getByLabelText("Salary (Optional)")).toBeInTheDocument();
  });

  it("renders error message for invalid national ID number", async () => {
    const { getByLabelText, getByText } = render(<TeachersForm />);
    const nationalIdInput = getByLabelText("National ID Number");
    fireEvent.change(nationalIdInput, { target: { value: "abc" } });
    await waitFor(() =>
      getByText("National ID Number must be at least 3 characters")
    );
  });

  it("renders error message for invalid date of birth", async () => {
    const { getByLabelText, getByText } = render(<TeachersForm />);
    const dobInput = getByLabelText("Date of birth");
    fireEvent.change(dobInput, { target: { value: "2024-02-30" } });
    await waitFor(() => getByText("Date of birth must be a valid date"));
  });

  it("calls handleSubmit function on form submission", async () => {
    const handleSubmit = jest.fn();
    const { getByText } = render(<TeachersForm onSubmit={handleSubmit} />);
    const submitButton = getByText("Submit");
    fireEvent.click(submitButton);
    await waitFor(() => expect(handleSubmit).toHaveBeenCalledTimes(1));
  });
});
