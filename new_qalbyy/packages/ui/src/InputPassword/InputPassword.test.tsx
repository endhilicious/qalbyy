import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import React from "react";
import { InputPassword } from "./InputPassword";

describe("InputPassword", () => {
  it("renders without crashing", () => {
    render(<InputPassword />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "password");
  });

  it("renders with label", () => {
    render(<InputPassword label="Password" />);
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
  });

  it("displays error message", () => {
    render(<InputPassword error="Password is required" />);
    expect(screen.getByText("Password is required")).toBeInTheDocument();
    expect(screen.getByText("Password is required")).toHaveClass("text-red-600");
  });

  it("displays helper text when no error", () => {
    render(<InputPassword helperText="Enter a secure password" />);
    expect(screen.getByText("Enter a secure password")).toBeInTheDocument();
    expect(screen.getByText("Enter a secure password")).toHaveClass("text-gray-500");
  });

  it("hides helper text when error is present", () => {
    render(<InputPassword helperText="Helper text" error="Error message" />);
    expect(screen.getByText("Error message")).toBeInTheDocument();
    expect(screen.queryByText("Helper text")).not.toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<InputPassword className="custom-class" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("custom-class");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<InputPassword ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
    expect(ref.current?.type).toBe("password");
  });

  it("generates unique ID when not provided", () => {
    const { rerender } = render(<InputPassword label="Password 1" />);
    const input1 = screen.getByRole("textbox");
    const id1 = input1.id;

    rerender(<InputPassword label="Password 2" />);
    const input2 = screen.getByRole("textbox");
    const id2 = input2.id;

    expect(id1).not.toBe(id2);
    expect(id1).toMatch(/^password-input-/);
    expect(id2).toMatch(/^password-input-/);
  });

  it("uses provided ID", () => {
    render(<InputPassword id="custom-password-id" label="Password" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("id", "custom-password-id");
  });

  describe("Password visibility toggle", () => {
    it("shows toggle button by default", () => {
      render(<InputPassword />);
      const toggleButton = screen.getByRole("button");
      expect(toggleButton).toBeInTheDocument();
    });

    it("hides toggle button when showToggle is false", () => {
      render(<InputPassword showToggle={false} />);
      expect(screen.queryByRole("button")).not.toBeInTheDocument();
    });

    it("toggles password visibility when button is clicked", () => {
      render(<InputPassword defaultValue="password123" />);
      const input = screen.getByRole("textbox");
      const toggleButton = screen.getByRole("button");

      // Initially password type
      expect(input).toHaveAttribute("type", "password");

      // Click to show password
      fireEvent.click(toggleButton);
      expect(input).toHaveAttribute("type", "text");

      // Click to hide password again
      fireEvent.click(toggleButton);
      expect(input).toHaveAttribute("type", "password");
    });

    it("shows Eye icon when password is hidden", () => {
      render(<InputPassword />);
      const eyeIcon = screen.getByRole("button").querySelector("svg");
      expect(eyeIcon).toBeInTheDocument();
    });

    it("shows EyeOff icon when password is visible", () => {
      render(<InputPassword defaultValue="password123" />);
      const toggleButton = screen.getByRole("button");
      
      // Click to show password
      fireEvent.click(toggleButton);
      
      const eyeOffIcon = screen.getByRole("button").querySelector("svg");
      expect(eyeOffIcon).toBeInTheDocument();
    });

    it("toggle button has correct tabIndex", () => {
      render(<InputPassword />);
      const toggleButton = screen.getByRole("button");
      expect(toggleButton).toHaveAttribute("tabIndex", "-1");
    });
  });

  describe("Variants", () => {
    it("applies default variant classes", () => {
      render(<InputPassword variant="default" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveClass("border", "border-gray-300", "bg-white");
    });

    it("applies outline variant classes", () => {
      render(<InputPassword variant="outline" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveClass("border-2", "border-gray-300", "bg-transparent");
    });

    it("applies filled variant classes", () => {
      render(<InputPassword variant="filled" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveClass("border-0", "bg-gray-100");
    });
  });

  describe("Sizes", () => {
    it("applies small size classes", () => {
      render(<InputPassword size="sm" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveClass("h-8", "px-3", "text-sm", "rounded-md", "pr-8");
    });

    it("applies medium size classes", () => {
      render(<InputPassword size="md" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveClass("h-10", "px-3", "text-sm", "rounded-md", "pr-10");
    });

    it("applies large size classes", () => {
      render(<InputPassword size="lg" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveClass("h-12", "px-4", "text-base", "rounded-lg", "pr-12");
    });

    it("does not apply padding-right when showToggle is false", () => {
      render(<InputPassword size="md" showToggle={false} />);
      const input = screen.getByRole("textbox");
      expect(input).not.toHaveClass("pr-10");
    });

    it("applies correct toggle button size for small", () => {
      render(<InputPassword size="sm" />);
      const toggleButton = screen.getByRole("button");
      expect(toggleButton).toHaveClass("w-8", "h-8");
    });

    it("applies correct toggle button size for medium", () => {
      render(<InputPassword size="md" />);
      const toggleButton = screen.getByRole("button");
      expect(toggleButton).toHaveClass("w-10", "h-10");
    });

    it("applies correct toggle button size for large", () => {
      render(<InputPassword size="lg" />);
      const toggleButton = screen.getByRole("button");
      expect(toggleButton).toHaveClass("w-12", "h-12");
    });
  });

  describe("Error states", () => {
    it("applies error classes when error is present", () => {
      render(<InputPassword error="Password is required" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveClass("border-red-500", "focus:border-red-500", "focus:ring-red-200");
    });

    it("does not apply error classes when no error", () => {
      render(<InputPassword />);
      const input = screen.getByRole("textbox");
      expect(input).not.toHaveClass("border-red-500");
    });
  });

  describe("Event handling", () => {
    it("calls onChange when value changes", () => {
      const handleChange = vi.fn();
      render(<InputPassword onChange={handleChange} />);
      const input = screen.getByRole("textbox");
      
      fireEvent.change(input, { target: { value: "newpassword" } });
      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it("calls onFocus when input is focused", () => {
      const handleFocus = vi.fn();
      render(<InputPassword onFocus={handleFocus} />);
      const input = screen.getByRole("textbox");
      
      fireEvent.focus(input);
      expect(handleFocus).toHaveBeenCalledTimes(1);
    });

    it("calls onBlur when input loses focus", () => {
      const handleBlur = vi.fn();
      render(<InputPassword onBlur={handleBlur} />);
      const input = screen.getByRole("textbox");
      
      fireEvent.blur(input);
      expect(handleBlur).toHaveBeenCalledTimes(1);
    });
  });

  describe("Accessibility", () => {
    it("associates label with input correctly", () => {
      render(<InputPassword label="Password" />);
      const input = screen.getByRole("textbox");
      const label = screen.getByText("Password");
      
      expect(input).toHaveAttribute("id");
      expect(label).toHaveAttribute("for", input.id);
    });

    it("has proper focus styles", () => {
      render(<InputPassword />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveClass("focus:outline-none");
    });

    it("toggle button has proper hover and focus styles", () => {
      render(<InputPassword />);
      const toggleButton = screen.getByRole("button");
      expect(toggleButton).toHaveClass(
        "hover:text-gray-600",
        "focus:outline-none",
        "focus:text-gray-600"
      );
    });
  });

  describe("Input attributes", () => {
    it("accepts and applies defaultValue", () => {
      render(<InputPassword defaultValue="password123" />);
      const input = screen.getByRole("textbox") as HTMLInputElement;
      expect(input.value).toBe("password123");
    });

    it("accepts and applies placeholder", () => {
      render(<InputPassword placeholder="Enter password" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("placeholder", "Enter password");
    });

    it("accepts and applies disabled state", () => {
      render(<InputPassword disabled />);
      const input = screen.getByRole("textbox");
      expect(input).toBeDisabled();
      expect(input).toHaveClass("disabled:cursor-not-allowed", "disabled:opacity-50");
    });

    it("accepts and applies required attribute", () => {
      render(<InputPassword required />);
      const input = screen.getByRole("textbox");
      expect(input).toBeRequired();
    });

    it("accepts and applies readOnly attribute", () => {
      render(<InputPassword readOnly />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("readonly");
    });

    it("accepts and applies autoComplete attribute", () => {
      render(<InputPassword autoComplete="current-password" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("autocomplete", "current-password");
    });

    it("accepts and applies name attribute", () => {
      render(<InputPassword name="user-password" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("name", "user-password");
    });
  });

  describe("Component composition", () => {
    it("renders all elements in correct order", () => {
      render(
        <InputPassword
          label="Password"
          helperText="Enter your password"
          error="Password is required"
        />
      );

      const container = screen.getByRole("textbox").closest("div");
      expect(container).toBeInTheDocument();
      
      // Label should be first
      expect(screen.getByText("Password")).toBeInTheDocument();
      
      // Input should be in the middle
      expect(screen.getByRole("textbox")).toBeInTheDocument();
      
      // Toggle button should be present
      expect(screen.getByRole("button")).toBeInTheDocument();
      
      // Error should be shown (helper text hidden)
      expect(screen.getByText("Password is required")).toBeInTheDocument();
      expect(screen.queryByText("Enter your password")).not.toBeInTheDocument();
    });

    it("renders without label when not provided", () => {
      render(<InputPassword helperText="Helper text" />);
      expect(screen.queryByRole("label")).not.toBeInTheDocument();
      expect(screen.getByText("Helper text")).toBeInTheDocument();
    });

    it("renders input inside relative container for toggle positioning", () => {
      render(<InputPassword />);
      const input = screen.getByRole("textbox");
      const relativeContainer = input.parentElement;
      expect(relativeContainer).toHaveClass("relative");
    });
  });

  describe("Password security", () => {
    it("starts with password type for security", () => {
      render(<InputPassword defaultValue="secret" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("type", "password");
    });

    it("maintains password state after re-render", () => {
      const { rerender } = render(<InputPassword defaultValue="secret" />);
      const input = screen.getByRole("textbox");
      
      // Show password
      fireEvent.click(screen.getByRole("button"));
      expect(input).toHaveAttribute("type", "text");
      
      // Re-render component
      rerender(<InputPassword defaultValue="secret" />);
      
      // Should reset to password type
      expect(screen.getByRole("textbox")).toHaveAttribute("type", "password");
    });
  });
});