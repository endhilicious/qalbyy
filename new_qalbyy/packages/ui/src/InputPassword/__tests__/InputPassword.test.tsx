import "@testing-library/jest-dom/vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { describe, it, expect, vi } from "vitest";
import { InputPassword } from "../InputPassword";

describe("InputPassword", () => {
  it("should render correctly with placeholder", () => {
    render(<InputPassword placeholder="Enter password..." />);
    expect(
      screen.getByPlaceholderText("Enter password..."),
    ).toBeInTheDocument();
  });

  it("should render with label", () => {
    render(<InputPassword label="Password" placeholder="Enter password" />);
    expect(screen.getByText("Password")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter password")).toBeInTheDocument();
  });

  it("should display error message", () => {
    render(<InputPassword error="Password is required" />);
    expect(screen.getByText("Password is required")).toBeInTheDocument();
  });

  it("should display helper text when no error", () => {
    render(<InputPassword helperText="This is helper text" />);
    expect(screen.getByText("This is helper text")).toBeInTheDocument();
  });

  it("should toggle password visibility", () => {
    render(<InputPassword placeholder="Enter password" />);
    const input = screen.getByPlaceholderText("Enter password");
    const toggleButton = screen.getByRole("button");

    expect(input).toHaveAttribute("type", "password");

    fireEvent.click(toggleButton);
    expect(input).toHaveAttribute("type", "text");

    fireEvent.click(toggleButton);
    expect(input).toHaveAttribute("type", "password");
  });

  it("should hide toggle button when showToggle is false", () => {
    render(<InputPassword showToggle={false} placeholder="Enter password" />);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("should be disabled when disabled prop is true", () => {
    render(<InputPassword disabled placeholder="Enter password" />);
    const input = screen.getByPlaceholderText("Enter password");
    expect(input).toBeDisabled();
  });

  it("should call onChange when input value changes", () => {
    const handleChange = vi.fn();
    render(
      <InputPassword onChange={handleChange} placeholder="Enter password" />,
    );

    const input = screen.getByPlaceholderText("Enter password");
    fireEvent.change(input, { target: { value: "testpassword" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("should apply custom className", () => {
    render(<InputPassword className="custom-class" />);
    const input = screen.getByDisplayValue("");
    expect(input).toHaveClass("custom-class");
  });

  it("should render with different sizes", () => {
    const { rerender } = render(<InputPassword size="sm" />);
    let input = screen.getByDisplayValue("");
    expect(input).toHaveClass("h-8");

    rerender(<InputPassword size="lg" />);
    input = screen.getByDisplayValue("");
    expect(input).toHaveClass("h-12");
  });

  it("should render with different variants", () => {
    const { rerender } = render(<InputPassword variant="outline" />);
    let input = screen.getByDisplayValue("");
    expect(input).toHaveClass("border-2");

    rerender(<InputPassword variant="filled" />);
    input = screen.getByDisplayValue("");
    expect(input).toHaveClass("bg-gray-100");
  });

  it("should have proper accessibility attributes", () => {
    render(<InputPassword label="Password" id="password-input" />);
    const input = screen.getByDisplayValue("");
    const label = screen.getByText("Password");

    expect(input).toHaveAttribute("id", "password-input");
    expect(label).toHaveAttribute("for", "password-input");
  });
});
