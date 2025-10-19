import "@testing-library/jest-dom/vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { describe, it, expect, vi } from "vitest";
import { Dropdown } from "../Dropdown";

const mockOptions = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3", disabled: true },
];

describe("Dropdown", () => {
  it("should render correctly with options", () => {
    render(<Dropdown options={mockOptions} />);

    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();
    expect(select).toHaveClass("w-full");
  });

  it("should render with label", () => {
    render(<Dropdown label="Test Label" options={mockOptions} />);
    expect(screen.getByText("Test Label")).toBeInTheDocument();
  });

  it("should display error message", () => {
    render(<Dropdown options={mockOptions} error="This field is required" />);
    expect(screen.getByText("This field is required")).toBeInTheDocument();
  });

  it("should display helper text when no error", () => {
    render(<Dropdown options={mockOptions} helperText="This is helper text" />);
    expect(screen.getByText("This is helper text")).toBeInTheDocument();
  });

  it("should not display helper text when error is present", () => {
    render(
      <Dropdown
        options={mockOptions}
        helperText="Helper text"
        error="Error message"
      />,
    );
    expect(screen.getByText("Error message")).toBeInTheDocument();
    expect(screen.queryByText("Helper text")).not.toBeInTheDocument();
  });

  it("should render placeholder option", () => {
    render(<Dropdown options={mockOptions} placeholder="Select an option" />);
    // Check that placeholder option exists and is disabled
    const placeholderOption = screen.getByRole("option", { name: "Select an option" });
    expect(placeholderOption).toBeInTheDocument();
    expect(placeholderOption).toBeDisabled();
    expect(placeholderOption).toHaveValue("");
  });

  it("should render all options", () => {
    render(<Dropdown options={mockOptions} />);

    mockOptions.forEach((option) => {
      expect(
        screen.getByRole("option", { name: option.label }),
      ).toBeInTheDocument();
    });
  });

  it("should disable options when disabled prop is true", () => {
    render(<Dropdown options={mockOptions} />);

    const disabledOption = screen.getByRole("option", { name: "Option 3" });
    expect(disabledOption).toBeDisabled();
  });

  it("should be disabled when disabled prop is true", () => {
    render(<Dropdown options={mockOptions} disabled />);
    const select = screen.getByRole("combobox");
    expect(select).toBeDisabled();
  });

  it("should call onChange when selection changes", () => {
    const handleChange = vi.fn();
    render(<Dropdown options={mockOptions} onChange={handleChange} />);

    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "option2" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("should apply custom className", () => {
    render(<Dropdown options={mockOptions} className="custom-class" />);
    const select = screen.getByRole("combobox");
    expect(select).toHaveClass("custom-class");
  });

  it("should render with different sizes", () => {
    const { rerender } = render(<Dropdown options={mockOptions} size="sm" />);
    let select = screen.getByRole("combobox");
    expect(select).toHaveClass("h-8");

    rerender(<Dropdown options={mockOptions} size="lg" />);
    select = screen.getByRole("combobox");
    expect(select).toHaveClass("h-12");
  });

  it("should render with different variants", () => {
    const { rerender } = render(
      <Dropdown options={mockOptions} variant="outline" />,
    );
    let select = screen.getByRole("combobox");
    expect(select).toHaveClass("border-2");

    rerender(<Dropdown options={mockOptions} variant="filled" />);
    select = screen.getByRole("combobox");
    expect(select).toHaveClass("bg-gray-100");
  });

  it("should have proper accessibility attributes", () => {
    render(
      <Dropdown label="Test Label" options={mockOptions} id="test-dropdown" />,
    );
    const select = screen.getByRole("combobox");
    const label = screen.getByText("Test Label");

    expect(select).toHaveAttribute("id", "test-dropdown");
    expect(label).toHaveAttribute("for", "test-dropdown");
  });

  it("should show error styling when error is present", () => {
    render(<Dropdown options={mockOptions} error="Error message" />);
    const select = screen.getByRole("combobox");
    expect(select).toHaveClass("border-red-500");
  });

  it("should render with default value", () => {
    render(<Dropdown options={mockOptions} defaultValue="option2" />);
    const select = screen.getByRole("combobox");
    expect(select).toHaveValue("option2");
  });

  it("should render with controlled value", () => {
    render(<Dropdown options={mockOptions} value="option1" />);
    const select = screen.getByRole("combobox");
    expect(select).toHaveValue("option1");
  });
});
