import "@testing-library/jest-dom/vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { describe, it, expect, vi } from "vitest";
import { InputTextarea } from "../InputTextarea";

describe("InputTextarea", () => {
  it("should render correctly with placeholder", () => {
    render(<InputTextarea placeholder="Enter message..." />);
    expect(screen.getByPlaceholderText("Enter message...")).toBeInTheDocument();
  });

  it("should render with label", () => {
    render(<InputTextarea label="Message" placeholder="Enter message" />);
    expect(screen.getByText("Message")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter message")).toBeInTheDocument();
  });

  it("should display error message", () => {
    render(<InputTextarea error="Message is required" />);
    expect(screen.getByText("Message is required")).toBeInTheDocument();
  });

  it("should display helper text when no error", () => {
    render(<InputTextarea helperText="This is helper text" />);
    expect(screen.getByText("This is helper text")).toBeInTheDocument();
  });

  it("should not display helper text when error is present", () => {
    render(<InputTextarea helperText="Helper text" error="Error message" />);
    expect(screen.getByText("Error message")).toBeInTheDocument();
    expect(screen.queryByText("Helper text")).not.toBeInTheDocument();
  });

  it("should be disabled when disabled prop is true", () => {
    render(<InputTextarea disabled placeholder="Enter message" />);
    const textarea = screen.getByPlaceholderText("Enter message");
    expect(textarea).toBeDisabled();
  });

  it("should call onChange when textarea value changes", () => {
    const handleChange = vi.fn();
    render(
      <InputTextarea onChange={handleChange} placeholder="Enter message" />,
    );

    const textarea = screen.getByPlaceholderText("Enter message");
    fireEvent.change(textarea, { target: { value: "test message" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("should apply custom className", () => {
    render(<InputTextarea className="custom-class" />);
    const textarea = screen.getByRole("textbox");
    expect(textarea).toHaveClass("custom-class");
  });

  it("should render with different sizes", () => {
    const { rerender } = render(<InputTextarea size="sm" />);
    let textarea = screen.getByRole("textbox");
    expect(textarea).toHaveClass("min-h-[80px]");

    rerender(<InputTextarea size="lg" />);
    textarea = screen.getByRole("textbox");
    expect(textarea).toHaveClass("min-h-[120px]");
  });

  it("should render with different variants", () => {
    const { rerender } = render(<InputTextarea variant="outline" />);
    let textarea = screen.getByRole("textbox");
    expect(textarea).toHaveClass("border-2");

    rerender(<InputTextarea variant="filled" />);
    textarea = screen.getByRole("textbox");
    expect(textarea).toHaveClass("bg-gray-100");
  });

  it("should render with different resize options", () => {
    const { rerender } = render(<InputTextarea resize="none" />);
    let textarea = screen.getByRole("textbox");
    expect(textarea).toHaveClass("resize-none");

    rerender(<InputTextarea resize="both" />);
    textarea = screen.getByRole("textbox");
    expect(textarea).toHaveClass("resize");
  });

  it("should have proper accessibility attributes", () => {
    render(<InputTextarea label="Message" id="textarea-input" />);
    const textarea = screen.getByRole("textbox");
    const label = screen.getByText("Message");

    expect(textarea).toHaveAttribute("id", "textarea-input");
    expect(label).toHaveAttribute("for", "textarea-input");
  });

  it("should accept rows prop", () => {
    render(<InputTextarea rows={6} />);
    const textarea = screen.getByRole("textbox");
    expect(textarea).toHaveAttribute("rows", "6");
  });
});
