import "@testing-library/jest-dom/vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { describe, it, expect, vi } from "vitest";
import { InputDateTime } from "../InputDateTime";

describe("InputDateTime", () => {
  it("renders without crashing", () => {
    render(<InputDateTime />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  it("renders with label", () => {
    render(<InputDateTime label="Start Date" />);
    expect(screen.getByText("Start Date")).toBeInTheDocument();
  });

  it("renders with error message", () => {
    render(<InputDateTime label="Date" error="Invalid date" />);
    expect(screen.getByText("Invalid date")).toBeInTheDocument();
  });

  it("renders with helper text", () => {
    render(<InputDateTime label="Date" helperText="Select a date" />);
    expect(screen.getByText("Select a date")).toBeInTheDocument();
  });

  it("shows required asterisk when required", () => {
    render(<InputDateTime label="Date" required />);
    expect(screen.getByText("*")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(<InputDateTime className="custom-class" />);
    const input = container.querySelector("input");
    expect(input).toHaveClass("custom-class");
  });

  it("renders datetime-local input type by default", () => {
    const { container } = render(<InputDateTime />);
    const input = container.querySelector("input");
    expect(input).toHaveAttribute("type", "datetime-local");
  });

  it("renders date input type when includeTime is false", () => {
    const { container } = render(<InputDateTime includeTime={false} />);
    const input = container.querySelector("input");
    expect(input).toHaveAttribute("type", "date");
  });

  it("forwards ref correctly", () => {
    const ref = { current: null };
    render(<InputDateTime ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it("applies disabled state", () => {
    const { container } = render(<InputDateTime disabled />);
    const input = container.querySelector("input");
    expect(input).toBeDisabled();
  });

  // Variant tests
  it("applies default variant classes", () => {
    render(<InputDateTime />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("border", "border-gray-300", "bg-white");
  });

  it("applies outline variant classes", () => {
    render(<InputDateTime variant="outline" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("border-2", "border-gray-300", "bg-transparent");
  });

  it("applies filled variant classes", () => {
    render(<InputDateTime variant="filled" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("border-0", "bg-gray-100");
  });

  // Size tests
  it("applies small size classes", () => {
    render(<InputDateTime size="sm" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("h-8", "px-3", "text-sm", "rounded-md");
  });

  it("applies medium size classes", () => {
    render(<InputDateTime size="md" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("h-10", "px-3", "text-sm", "rounded-lg");
  });

  it("applies large size classes", () => {
    render(<InputDateTime size="lg" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("h-12", "px-4", "text-base", "rounded-lg");
  });

  // Error state tests
  it("applies error classes when error is present", () => {
    render(<InputDateTime error="Invalid date" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("border-red-500", "focus:border-red-500", "focus:ring-red-200");
  });

  it("does not show helper text when error is present", () => {
    render(
      <InputDateTime 
        error="Invalid date" 
        helperText="This should not be visible" 
      />
    );
    
    expect(screen.getByText("Invalid date")).toBeInTheDocument();
    expect(screen.queryByText("This should not be visible")).not.toBeInTheDocument();
  });

  // Event handling tests
  it("handles value changes", () => {
    const handleChange = vi.fn();
    render(<InputDateTime onChange={handleChange} />);
    
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "2024-01-15T10:30" } });
    
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("handles focus events", () => {
    const handleFocus = vi.fn();
    render(<InputDateTime onFocus={handleFocus} />);
    
    const input = screen.getByRole("textbox");
    fireEvent.focus(input);
    
    expect(handleFocus).toHaveBeenCalledTimes(1);
  });

  it("handles blur events", () => {
    const handleBlur = vi.fn();
    render(<InputDateTime onBlur={handleBlur} />);
    
    const input = screen.getByRole("textbox");
    fireEvent.blur(input);
    
    expect(handleBlur).toHaveBeenCalledTimes(1);
  });

  // ID and accessibility tests
  it("generates unique id when not provided", () => {
    render(
      <div>
        <InputDateTime label="First" />
        <InputDateTime label="Second" />
      </div>
    );
    
    const inputs = screen.getAllByRole("textbox");
    expect(inputs[0]).toHaveAttribute("id");
    expect(inputs[1]).toHaveAttribute("id");
    expect(inputs[0].getAttribute("id")).not.toBe(inputs[1].getAttribute("id"));
  });

  it("uses provided id", () => {
    render(<InputDateTime id="custom-id" label="Custom ID" />);
    
    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("id", "custom-id");
    expect(screen.getByLabelText("Custom ID")).toHaveAttribute("id", "custom-id");
  });

  // Value and attribute tests
  it("accepts default value", () => {
    render(<InputDateTime defaultValue="2024-01-15T10:30" />);
    
    const input = screen.getByRole("textbox") as HTMLInputElement;
    expect(input.value).toBe("2024-01-15T10:30");
  });

  it("accepts placeholder", () => {
    render(<InputDateTime placeholder="Select a date" />);
    
    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("placeholder", "Select a date");
  });

  it("handles min and max attributes", () => {
    render(
      <InputDateTime 
        min="2024-01-01T00:00" 
        max="2024-12-31T23:59" 
      />
    );
    
    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("min", "2024-01-01T00:00");
    expect(input).toHaveAttribute("max", "2024-12-31T23:59");
  });

  it("handles step attribute", () => {
    render(<InputDateTime step="900" />); // 15 minutes
    
    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("step", "900");
  });

  it("handles readonly attribute", () => {
    render(<InputDateTime readOnly />);
    
    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("readonly");
  });

  // Accessibility tests
  it("maintains accessibility with proper label association", () => {
    render(<InputDateTime label="Event Date" id="event-date" />);
    
    const label = screen.getByText("Event Date");
    const input = screen.getByRole("textbox");
    
    expect(label).toHaveAttribute("for", "event-date");
    expect(input).toHaveAttribute("id", "event-date");
  });

  it("applies focus styles correctly", () => {
    render(<InputDateTime />);
    
    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("focus:outline-none", "focus:border-blue-500", "focus:ring-2", "focus:ring-blue-200");
  });
});
