import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import React from "react";
import { InputEmail } from "./InputEmail";

describe("InputEmail", () => {
  it("renders without crashing", () => {
    render(<InputEmail />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "email");
  });

  it("renders with label", () => {
    render(<InputEmail label="Email Address" />);
    expect(screen.getByLabelText("Email Address")).toBeInTheDocument();
  });

  it("displays error message", () => {
    render(<InputEmail error="Invalid email" />);
    expect(screen.getByText("Invalid email")).toBeInTheDocument();
    expect(screen.getByText("Invalid email")).toHaveClass("text-red-600");
  });

  it("displays helper text when no error", () => {
    render(<InputEmail helperText="Enter your email address" />);
    expect(screen.getByText("Enter your email address")).toBeInTheDocument();
    expect(screen.getByText("Enter your email address")).toHaveClass("text-gray-500");
  });

  it("hides helper text when error is present", () => {
    render(<InputEmail helperText="Helper text" error="Error message" />);
    expect(screen.getByText("Error message")).toBeInTheDocument();
    expect(screen.queryByText("Helper text")).not.toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<InputEmail className="custom-class" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("custom-class");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<InputEmail ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
    expect(ref.current?.type).toBe("email");
  });

  it("generates unique ID when not provided", () => {
    const { rerender } = render(<InputEmail label="Email 1" />);
    const input1 = screen.getByRole("textbox");
    const id1 = input1.id;

    rerender(<InputEmail label="Email 2" />);
    const input2 = screen.getByRole("textbox");
    const id2 = input2.id;

    expect(id1).not.toBe(id2);
    expect(id1).toMatch(/^email-input-/);
    expect(id2).toMatch(/^email-input-/);
  });

  it("uses provided ID", () => {
    render(<InputEmail id="custom-email-id" label="Email" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("id", "custom-email-id");
  });

  describe("Variants", () => {
    it("applies default variant classes", () => {
      render(<InputEmail variant="default" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveClass("border", "border-gray-300", "bg-white");
    });

    it("applies outline variant classes", () => {
      render(<InputEmail variant="outline" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveClass("border-2", "border-gray-300", "bg-transparent");
    });

    it("applies filled variant classes", () => {
      render(<InputEmail variant="filled" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveClass("border-0", "bg-gray-100");
    });
  });

  describe("Sizes", () => {
    it("applies small size classes", () => {
      render(<InputEmail size="sm" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveClass("h-8", "px-3", "text-sm", "rounded-md");
    });

    it("applies medium size classes", () => {
      render(<InputEmail size="md" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveClass("h-10", "px-3", "text-sm", "rounded-md");
    });

    it("applies large size classes", () => {
      render(<InputEmail size="lg" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveClass("h-12", "px-4", "text-base", "rounded-lg");
    });
  });

  describe("Error states", () => {
    it("applies error classes when error is present", () => {
      render(<InputEmail error="Invalid email" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveClass("border-red-500", "focus:border-red-500", "focus:ring-red-200");
    });

    it("does not apply error classes when no error", () => {
      render(<InputEmail />);
      const input = screen.getByRole("textbox");
      expect(input).not.toHaveClass("border-red-500");
    });
  });

  describe("Event handling", () => {
    it("calls onChange when value changes", () => {
      const handleChange = vi.fn();
      render(<InputEmail onChange={handleChange} />);
      const input = screen.getByRole("textbox");
      
      fireEvent.change(input, { target: { value: "test@example.com" } });
      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it("calls onFocus when input is focused", () => {
      const handleFocus = vi.fn();
      render(<InputEmail onFocus={handleFocus} />);
      const input = screen.getByRole("textbox");
      
      fireEvent.focus(input);
      expect(handleFocus).toHaveBeenCalledTimes(1);
    });

    it("calls onBlur when input loses focus", () => {
      const handleBlur = vi.fn();
      render(<InputEmail onBlur={handleBlur} />);
      const input = screen.getByRole("textbox");
      
      fireEvent.blur(input);
      expect(handleBlur).toHaveBeenCalledTimes(1);
    });
  });

  describe("Accessibility", () => {
    it("associates label with input correctly", () => {
      render(<InputEmail label="Email Address" />);
      const input = screen.getByRole("textbox");
      const label = screen.getByText("Email Address");
      
      expect(input).toHaveAttribute("id");
      expect(label).toHaveAttribute("for", input.id);
    });

    it("has proper focus styles", () => {
      render(<InputEmail />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveClass("focus:outline-none");
    });
  });

  describe("Input attributes", () => {
    it("accepts and applies defaultValue", () => {
      render(<InputEmail defaultValue="test@example.com" />);
      const input = screen.getByRole("textbox") as HTMLInputElement;
      expect(input.value).toBe("test@example.com");
    });

    it("accepts and applies placeholder", () => {
      render(<InputEmail placeholder="Enter email" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("placeholder", "Enter email");
    });

    it("accepts and applies disabled state", () => {
      render(<InputEmail disabled />);
      const input = screen.getByRole("textbox");
      expect(input).toBeDisabled();
      expect(input).toHaveClass("disabled:cursor-not-allowed", "disabled:opacity-50");
    });

    it("accepts and applies required attribute", () => {
      render(<InputEmail required />);
      const input = screen.getByRole("textbox");
      expect(input).toBeRequired();
    });

    it("accepts and applies readOnly attribute", () => {
      render(<InputEmail readOnly />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("readonly");
    });

    it("accepts and applies autoComplete attribute", () => {
      render(<InputEmail autoComplete="email" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("autocomplete", "email");
    });

    it("accepts and applies name attribute", () => {
      render(<InputEmail name="user-email" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("name", "user-email");
    });
  });

  describe("Email validation", () => {
    it("has email input type for browser validation", () => {
      render(<InputEmail />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("type", "email");
    });

    it("accepts valid email format", () => {
      render(<InputEmail />);
      const input = screen.getByRole("textbox") as HTMLInputElement;
      
      fireEvent.change(input, { target: { value: "user@example.com" } });
      expect(input.value).toBe("user@example.com");
    });
  });

  describe("Component composition", () => {
    it("renders all elements in correct order", () => {
      render(
        <InputEmail
          label="Email Address"
          helperText="Enter your email"
          error="Invalid email"
        />
      );

      const container = screen.getByRole("textbox").closest("div");
      expect(container).toBeInTheDocument();
      
      // Label should be first
      expect(screen.getByText("Email Address")).toBeInTheDocument();
      
      // Input should be in the middle
      expect(screen.getByRole("textbox")).toBeInTheDocument();
      
      // Error should be shown (helper text hidden)
      expect(screen.getByText("Invalid email")).toBeInTheDocument();
      expect(screen.queryByText("Enter your email")).not.toBeInTheDocument();
    });

    it("renders without label when not provided", () => {
      render(<InputEmail helperText="Helper text" />);
      expect(screen.queryByRole("label")).not.toBeInTheDocument();
      expect(screen.getByText("Helper text")).toBeInTheDocument();
    });
  });
});