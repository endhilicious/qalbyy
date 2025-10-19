import "@testing-library/jest-dom/vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { describe, it, expect, vi } from "vitest";
import { InputText } from "../InputText";

describe("InputText", () => {
  it("should render correctly with placeholder", () => {
    render(<InputText placeholder="Enter text..." />);
    expect(screen.getByPlaceholderText("Enter text...")).toBeInTheDocument();
  });

  it("should render with label", () => {
    render(<InputText label="Username" placeholder="Enter username" />);
    expect(screen.getByText("Username")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter username")).toBeInTheDocument();
  });

  it("should display error message", () => {
    render(<InputText error="This field is required" />);
    expect(screen.getByText("This field is required")).toBeInTheDocument();
  });

  it("should display helper text when no error", () => {
    render(<InputText helperText="This is helper text" />);
    expect(screen.getByText("This is helper text")).toBeInTheDocument();
  });

  it("should not display helper text when error is present", () => {
    render(<InputText helperText="Helper text" error="Error message" />);
    expect(screen.getByText("Error message")).toBeInTheDocument();
    expect(screen.queryByText("Helper text")).not.toBeInTheDocument();
  });

  it("should be disabled when disabled prop is true", () => {
    render(<InputText disabled placeholder="Disabled input" />);
    const input = screen.getByPlaceholderText("Disabled input");
    expect(input).toBeDisabled();
  });

  it("should call onChange when input value changes", () => {
    const handleChange = vi.fn();
    render(<InputText onChange={handleChange} placeholder="Test input" />);

    const input = screen.getByPlaceholderText("Test input");
    fireEvent.change(input, { target: { value: "test value" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("should apply custom className", () => {
    render(<InputText className="custom-class" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("custom-class");
  });

  it("should render with different sizes", () => {
    const { rerender } = render(<InputText size="sm" />);
    let input = screen.getByRole("textbox");
    expect(input).toHaveClass("h-8");

    rerender(<InputText size="lg" />);
    input = screen.getByRole("textbox");
    expect(input).toHaveClass("h-12");
  });

  it("should render with different variants", () => {
    const { rerender } = render(<InputText variant="outline" />);
    let input = screen.getByRole("textbox");
    expect(input).toHaveClass("border-2");

    rerender(<InputText variant="filled" />);
    input = screen.getByRole("textbox");
    expect(input).toHaveClass("bg-gray-100");
  });

  it("should have proper accessibility attributes", () => {
    render(<InputText label="Test Label" id="test-input" />);
    const input = screen.getByRole("textbox");
    const label = screen.getByText("Test Label");

    expect(input).toHaveAttribute("id", "test-input");
    expect(label).toHaveAttribute("for", "test-input");
  });
});
