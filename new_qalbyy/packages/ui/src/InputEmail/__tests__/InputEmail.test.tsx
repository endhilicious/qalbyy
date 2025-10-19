import "@testing-library/jest-dom/vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { describe, it, expect, vi } from "vitest";
import { InputEmail } from "../InputEmail";

describe("InputEmail", () => {
  it("should render correctly with placeholder", () => {
    render(<InputEmail placeholder="Enter email..." />);
    expect(screen.getByPlaceholderText("Enter email...")).toBeInTheDocument();
  });

  it("should render with label", () => {
    render(<InputEmail label="Email" placeholder="Enter email" />);
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter email")).toBeInTheDocument();
  });

  it("should display error message", () => {
    render(<InputEmail error="Please enter a valid email" />);
    expect(screen.getByText("Please enter a valid email")).toBeInTheDocument();
  });

  it("should display helper text when no error", () => {
    render(<InputEmail helperText="We will never share your email" />);
    expect(
      screen.getByText("We will never share your email"),
    ).toBeInTheDocument();
  });

  it("should not display helper text when error is present", () => {
    render(<InputEmail helperText="Helper text" error="Error message" />);
    expect(screen.getByText("Error message")).toBeInTheDocument();
    expect(screen.queryByText("Helper text")).not.toBeInTheDocument();
  });

  it("should be disabled when disabled prop is true", () => {
    render(<InputEmail disabled placeholder="Enter email" />);
    const input = screen.getByPlaceholderText("Enter email");
    expect(input).toBeDisabled();
  });

  it("should call onChange when input value changes", () => {
    const handleChange = vi.fn();
    render(<InputEmail onChange={handleChange} placeholder="Enter email" />);

    const input = screen.getByPlaceholderText("Enter email");
    fireEvent.change(input, { target: { value: "test@example.com" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("should apply custom className", () => {
    render(<InputEmail className="custom-class" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("custom-class");
  });

  it("should render with different sizes", () => {
    const { rerender } = render(<InputEmail size="sm" />);
    let input = screen.getByRole("textbox");
    expect(input).toHaveClass("h-8");

    rerender(<InputEmail size="lg" />);
    input = screen.getByRole("textbox");
    expect(input).toHaveClass("h-12");
  });

  it("should render with different variants", () => {
    const { rerender } = render(<InputEmail variant="outline" />);
    let input = screen.getByRole("textbox");
    expect(input).toHaveClass("border-2");

    rerender(<InputEmail variant="filled" />);
    input = screen.getByRole("textbox");
    expect(input).toHaveClass("bg-gray-100");
  });

  it("should have proper accessibility attributes", () => {
    render(<InputEmail label="Email" id="email-input" />);
    const input = screen.getByRole("textbox");
    const label = screen.getByText("Email");

    expect(input).toHaveAttribute("id", "email-input");
    expect(label).toHaveAttribute("for", "email-input");
  });

  it("should have email input type", () => {
    render(<InputEmail />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("type", "email");
  });
});
