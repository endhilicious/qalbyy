// PENTING: Komponen reusable ini digunakan luas di seluruh modul. Setiap perubahan WAJIB direkap di file 'recapt-changes-modal.md' pada folder komponen ini (packages/ui/src/Modal). Sertakan tanggal, lokasi baris/kode, dan alasan perubahan. Lakukan review ekstra hati-hati sebelum merge.
import type { FC, ReactNode } from "react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { cn } from "../lib/utils";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  className?: string;
  overlayClassName?: string;
  headerClassName?: string;
  bodyClassName?: string;
}

export const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = "md",
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  className,
  overlayClassName,
  headerClassName,
  bodyClassName,
}) => {
  // Handle escape key
  useEffect(() => {
    if (!closeOnEscape || !isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose, closeOnEscape]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Mount check for portal to avoid SSR hydration issues
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!isOpen || !mounted) return null;

  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    full: "max-w-full mx-4",
  };
  // Fallback inline styles to enforce max-width even if Tailwind utilities are purged/not present
  const sizeMaxPx: Record<NonNullable<ModalProps["size"]>, number | undefined> = {
    sm: 384,
    md: 448,
    lg: 512,
    xl: 576,
    "2xl": 672,
    full: undefined,
  };

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (closeOnOverlayClick && event.target === event.currentTarget) {
      onClose();
    }
  };

  const portalContent = (
    <>
      {/* Backdrop - Separate from modal container to prevent spacing issues */}
      <div 
        className="fixed inset-0 bg-black/50 transition-opacity"
        style={{ margin: 0, zIndex: 999 }}
      />
      
      {/* Modal Container - Positioned independently to avoid space-y conflicts */}
      <div
        className={cn(
          "fixed inset-0 flex items-center justify-center p-4",
          overlayClassName,
        )}
        style={{ margin: 0, zIndex: 1000 }}
        onClick={closeOnOverlayClick ? handleOverlayClick : undefined}
      >
        {/* Modal */}
        <div
          className={cn(
            "relative bg-white rounded-lg shadow-xl w-full",
            sizeClasses[size],
            className,
          )}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? "modal-title" : undefined}
          onClick={(e) => e.stopPropagation()}
          style={{
            maxWidth:
              sizeMaxPx[size] !== undefined
                ? `${sizeMaxPx[size]}px`
                : undefined,
          }}
        >
          {/* Header */}
          {(title || showCloseButton) && (
            <div
              className={cn(
                "flex items-center justify-between px-6 py-4 border-b border-gray-200",
                headerClassName,
              )}
            >
              {title && (
                <h3
                  id="modal-title"
                  className="text-lg font-medium text-gray-900"
                >
                  {title}
                </h3>
              )}

              {showCloseButton && (
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600 transition-colors duration-200 p-1"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
          )}

          {/* Body */}
          <div className={cn("px-6 py-4", bodyClassName)}>{children}</div>
        </div>
      </div>
    </>
  );

  return createPortal(portalContent, document.body);
};
