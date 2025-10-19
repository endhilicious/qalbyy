import "@testing-library/jest-dom/vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { describe, it, expect, vi } from "vitest";
import { Modal } from "../Modal";

describe("Modal", () => {
  const defaultProps = {
    isOpen: true,
    onClose: vi.fn(),
    children: <div>Modal content</div>,
  };

  it("should not render when isOpen is false", () => {
    render(<Modal {...defaultProps} isOpen={false} />);
    expect(screen.queryByText("Modal content")).not.toBeInTheDocument();
  });

  it("should render when isOpen is true", () => {
    render(<Modal {...defaultProps} />);
    expect(screen.getByText("Modal content")).toBeInTheDocument();
  });

  it("should render with title", () => {
    render(<Modal {...defaultProps} title="Test Modal" />);
    expect(screen.getByText("Test Modal")).toBeInTheDocument();
    expect(screen.getByRole("dialog")).toHaveAttribute(
      "aria-labelledby",
      "modal-title",
    );
  });

  it("should render without title", () => {
    render(<Modal {...defaultProps} />);
    expect(screen.queryByRole("heading")).not.toBeInTheDocument();
  });

  it("should call onClose when close button is clicked", () => {
    const onClose = vi.fn();
    render(
      <Modal {...defaultProps} onClose={onClose} showCloseButton={true} />,
    );

    const closeButton = screen.getByLabelText("Close modal");
    fireEvent.click(closeButton);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("should not show close button when showCloseButton is false", () => {
    render(<Modal {...defaultProps} showCloseButton={false} />);
    expect(screen.queryByLabelText("Close modal")).not.toBeInTheDocument();
  });

  it("should call onClose when overlay is clicked and closeOnOverlayClick is true", () => {
    const onClose = vi.fn();
    render(
      <Modal {...defaultProps} onClose={onClose} closeOnOverlayClick={true} />,
    );

    const overlay = screen.getByRole("dialog").parentElement;
    fireEvent.click(overlay!);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("should not call onClose when overlay is clicked and closeOnOverlayClick is false", () => {
    const onClose = vi.fn();
    render(
      <Modal {...defaultProps} onClose={onClose} closeOnOverlayClick={false} />,
    );

    const overlay = screen.getByRole("dialog").parentElement;
    fireEvent.click(overlay!);

    expect(onClose).not.toHaveBeenCalled();
  });

  it("should call onClose when escape key is pressed and closeOnEscape is true", () => {
    const onClose = vi.fn();
    render(<Modal {...defaultProps} onClose={onClose} closeOnEscape={true} />);

    fireEvent.keyDown(document, { key: "Escape" });

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("should not call onClose when escape key is pressed and closeOnEscape is false", () => {
    const onClose = vi.fn();
    render(<Modal {...defaultProps} onClose={onClose} closeOnEscape={false} />);

    fireEvent.keyDown(document, { key: "Escape" });

    expect(onClose).not.toHaveBeenCalled();
  });

  it("should apply custom className", () => {
    render(<Modal {...defaultProps} className="custom-modal" />);
    const modal = screen.getByRole("dialog");
    expect(modal).toHaveClass("custom-modal");
  });

  it("should apply different size classes", () => {
    const { rerender } = render(<Modal {...defaultProps} size="sm" />);
    let modal = screen.getByRole("dialog");
    expect(modal).toHaveClass("max-w-sm");

    rerender(<Modal {...defaultProps} size="lg" />);
    modal = screen.getByRole("dialog");
    expect(modal).toHaveClass("max-w-lg");

    rerender(<Modal {...defaultProps} size="full" />);
    modal = screen.getByRole("dialog");
    expect(modal).toHaveClass("max-w-full");
  });

  it("should have proper accessibility attributes", () => {
    render(<Modal {...defaultProps} title="Test Modal" />);
    const modal = screen.getByRole("dialog");

    expect(modal).toHaveAttribute("aria-modal", "true");
    expect(modal).toHaveAttribute("aria-labelledby", "modal-title");
  });

  it("should prevent body scroll when modal is open", () => {
    const { rerender } = render(<Modal {...defaultProps} isOpen={true} />);
    expect(document.body.style.overflow).toBe("hidden");

    rerender(<Modal {...defaultProps} isOpen={false} />);
    expect(document.body.style.overflow).toBe("unset");
  });

  it("should restore body scroll when component unmounts", () => {
    const { unmount } = render(<Modal {...defaultProps} isOpen={true} />);
    expect(document.body.style.overflow).toBe("hidden");

    unmount();
    expect(document.body.style.overflow).toBe("unset");
  });
});
