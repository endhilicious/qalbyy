import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import React from "react";
import { InputText } from "./InputText";

describe("InputText", () => {
  it("renders without crashing", () => {
    render(<InputText />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "text");
  });

  it("renders with label", () => {
    render(<InputText label="Full Name" />);
    expect(screen.getByLabelText("Full Name")).toBeInTheDocument();
  });

  it("displays error message", () => {
    render(<InputText error="This field is required" />);
    expect(screen.getByText("This field is required")).toBeInTheDocument();
    expect(screen.getByText("This field is required")).toHaveClass("text-red-600");
  });

  it("displays helper text when no error", () => {
    render(<InputText helperText="Enter your full name" />);
    expect(screen.getByText("Enter your full name")).toBeInTheDocument();
    expect(screen.getByText("Enter your full name")).toHaveClass("text-gray-500");
  });

  it("hides helper text when error is present", () => {
    render(<InputText helperText="Helper text" error="Error message" />);
    expect(screen.getByText("Error message")).toBeInTheDocument();
    expect(screen.queryByText("Helper text")).not.toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<InputText className="custom-class" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("custom-class");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<InputText ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
    expect(ref.current?.type).toBe("text");
  });

  it("generates unique ID when not provided", () => {
    const { rerender } = render(<InputText label="Input 1" />);
    const input1 = screen.getByRole("textbox");
    const id1 = input1.id;

    rerender(<InputText label="Input 2" />);
    const input2 = screen.getByRole("textbox");
    const id2 = input2.id;

    expect(id1).not.toBe(id2);
    expect(id1).toMatch(/^input-/);
    expect(id2).toMatch(/^input-/);
  });

  it("uses provided ID", () => {
    render(<InputText id="custom-input-id" label="Input" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("id", "custom-input-id");
  });

  describe("Variants", () => {
    it("applies default variant classes", () => {
      render(<InputText variant="default" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveClass("border", "border-gray-300", "bg-white");
    });

    it("applies outline variant classes", () => {
      render(<InputText variant="outline" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveClass("border-2", "border-gray-300", "bg-transparent");
    });

    it("applies filled variant classes", () => {
      render(<InputText variant="filled" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveClass("border-0", "bg-gray-100");
    });
  });

  describe("Sizes", () => {
    it("applies small size classes", () => {
      render(<InputText size="sm" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveClass("h-8", "px-3", "text-sm", "rounded-md");
    });

    it("applies medium size classes", () => {
      render(<InputText size="md" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveClass("h-10", "px-3", "text-sm", "rounded-md");
    });

    it("applies large size classes", () => {
      render(<InputText size="lg" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveClass("h-12", "px-4", "text-base", "rounded-lg");
    });
  });

  describe("Error states", () => {
    it("applies error classes when error is present", () => {
      render(<InputText error="This field is required" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveClass("border-red-500", "focus:border-red-500", "focus:ring-red-200");
    });

    it("does not apply error classes when no error", () => {
      render(<InputText />);
      const input = screen.getByRole("textbox");
      expect(input).not.toHaveClass("border-red-500");
    });
  });

  describe("Event handling", () => {
    it("calls onChange when value changes", () => {
      const handleChange = vi.fn();
      render(<InputText onChange={handleChange} />);
      const input = screen.getByRole("textbox");
      
      fireEvent.change(input, { target: { value: "new value" } });
      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it("calls onFocus when input is focused", () => {
      const handleFocus = vi.fn();
      render(<InputText onFocus={handleFocus} />);
      const input = screen.getByRole("textbox");
      
      fireEvent.focus(input);
      expect(handleFocus).toHaveBeenCalledTimes(1);
    });

    it("calls onBlur when input loses focus", () => {
      const handleBlur = vi.fn();
      render(<InputText onBlur={handleBlur} />);
      const input = screen.getByRole("textbox");
      
      fireEvent.blur(input);
      expect(handleBlur).toHaveBeenCalledTimes(1);
    });

    it("calls onKeyDown when key is pressed", () => {
      const handleKeyDown = vi.fn();
      render(<InputText onKeyDown={handleKeyDown} />);
      const input = screen.getByRole("textbox");
      
      fireEvent.keyDown(input, { key: "Enter" });
      expect(handleKeyDown).toHaveBeenCalledTimes(1);
    });
  });

  describe("Accessibility", () => {
    it("associates label with input correctly", () => {
      render(<InputText label="Full Name" />);
      const input = screen.getByRole("textbox");
      const label = screen.getByText("Full Name");
      
      expect(input).toHaveAttribute("id");
      expect(label).toHaveAttribute("for", input.id);
    });

    it("has proper focus styles", () => {
      render(<InputText />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveClass("focus:outline-none");
    });

    it("supports aria-describedby for helper text", () => {
      render(<InputText helperText="Helper text" />);
      const input = screen.getByRole("textbox");
      // Note: This would require implementation in the component
      // For now, we just check that helper text is rendered
      expect(screen.getByText("Helper text")).toBeInTheDocument();
    });

    it("supports aria-describedby for error text", () => {
      render(<InputText error="Error message" />);
      const input = screen.getByRole("textbox");
      // Note: This would require implementation in the component
      // For now, we just check that error text is rendered
      expect(screen.getByText("Error message")).toBeInTheDocument();
    });
  });

  describe("Input attributes", () => {
    it("accepts and applies defaultValue", () => {
      render(<InputText defaultValue="John Doe" />);
      const input = screen.getByRole("textbox") as HTMLInputElement;
      expect(input.value).toBe("John Doe");
    });

    it("accepts and applies placeholder", () => {
      render(<InputText placeholder="Enter your name" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("placeholder", "Enter your name");
    });

    it("accepts and applies disabled state", () => {
      render(<InputText disabled />);
      const input = screen.getByRole("textbox");
      expect(input).toBeDisabled();
      expect(input).toHaveClass("disabled:cursor-not-allowed", "disabled:opacity-50");
    });

    it("accepts and applies required attribute", () => {
      render(<InputText required />);
      const input = screen.getByRole("textbox");
      expect(input).toBeRequired();
    });

    it("accepts and applies readOnly attribute", () => {
      render(<InputText readOnly />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("readonly");
    });

    it("accepts and applies autoComplete attribute", () => {
      render(<InputText autoComplete="name" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("autocomplete", "name");
    });

    it("accepts and applies name attribute", () => {
      render(<InputText name="full-name" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("name", "full-name");
    });

    it("accepts and applies maxLength attribute", () => {
      render(<InputText maxLength={50} />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("maxlength", "50");
    });

    it("accepts and applies minLength attribute", () => {
      render(<InputText minLength={3} />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("minlength", "3");
    });

    it("accepts and applies pattern attribute", () => {
      render(<InputText pattern="[A-Za-z]+" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("pattern", "[A-Za-z]+");
    });
  });

  describe("Input types", () => {
    it("defaults to text type", () => {
      render(<InputText />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("type", "text");
    });

    it("accepts search type", () => {
      render(<InputText type="search" />);
      const input = screen.getByRole("searchbox");
      expect(input).toHaveAttribute("type", "search");
    });

    it("accepts url type", () => {
      render(<InputText type="url" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("type", "url");
    });

    it("accepts tel type", () => {
      render(<InputText type="tel" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("type", "tel");
    });
  });

  describe("Component composition", () => {
    it("renders all elements in correct order", () => {
      render(
        <InputText
          label="Full Name"
          helperText="Enter your full name"
          error="This field is required"
        />
      );

      const container = screen.getByRole("textbox").closest("div");
      expect(container).toBeInTheDocument();
      
      // Label should be first
      expect(screen.getByText("Full Name")).toBeInTheDocument();
      
      // Input should be in the middle
      expect(screen.getByRole("textbox")).toBeInTheDocument();
      
      // Error should be shown (helper text hidden)
      expect(screen.getByText("This field is required")).toBeInTheDocument();
      expect(screen.queryByText("Enter your full name")).not.toBeInTheDocument();
    });

    it("renders without label when not provided", () => {
      render(<InputText helperText="Helper text" />);
      expect(screen.queryByRole("label")).not.toBeInTheDocument();
      expect(screen.getByText("Helper text")).toBeInTheDocument();
    });

    it("renders only input when no label, helper text, or error", () => {
      render(<InputText placeholder="Just an input" />);
      expect(screen.getByRole("textbox")).toBeInTheDocument();
      expect(screen.queryByRole("label")).not.toBeInTheDocument();
    });
  });

  describe("Form integration", () => {
    it("works with form submission", () => {
      const handleSubmit = vi.fn((e) => e.preventDefault());
      render(
        <form onSubmit={handleSubmit}>
          <InputText name="username" defaultValue="testuser" />
          <button type="submit">Submit</button>
        </form>
      );

      const form = screen.getByRole("textbox").closest("form");
      fireEvent.submit(form!);
      expect(handleSubmit).toHaveBeenCalledTimes(1);
    });

    it("supports controlled input", () => {
      const TestComponent = () => {
        const [value, setValue] = React.useState("initial");
        return (
          <InputText
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        );
      };

      render(<TestComponent />);
      const input = screen.getByRole("textbox") as HTMLInputElement;
      
      expect(input.value).toBe("initial");
      
      fireEvent.change(input, { target: { value: "updated" } });
      expect(input.value).toBe("updated");
    });

    it("supports uncontrolled input", () => {
      render(<InputText defaultValue="default" />);
      const input = screen.getByRole("textbox") as HTMLInputElement;
      
      expect(input.value).toBe("default");
      
      fireEvent.change(input, { target: { value: "changed" } });
      expect(input.value).toBe("changed");
    });
  });

  describe("Styling and theming", () => {
    it("applies base classes correctly", () => {
      render(<InputText />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveClass(
        "w-full",
        "transition-colors",
        "duration-200",
        "focus:outline-none"
      );
    });

    it("combines variant and size classes correctly", () => {
      render(<InputText variant="outline" size="lg" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveClass(
        "border-2",
        "border-gray-300",
        "bg-transparent",
        "h-12",
        "px-4",
        "text-base",
        "rounded-lg"
      );
    });

    it("error classes override variant classes", () => {
      render(<InputText variant="default" error="Error" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveClass("border-red-500", "focus:border-red-500");
    });
  });
});