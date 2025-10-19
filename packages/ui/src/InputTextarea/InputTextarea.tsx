// PENTING: Komponen reusable ini digunakan luas di seluruh modul. Setiap perubahan WAJIB direkap di file 'recapt-changes-inputtextarea.md' pada folder komponen ini (packages/ui/src/InputTextarea). Sertakan tanggal, lokasi baris/kode, dan alasan perubahan. Lakukan review ekstra hati-hati sebelum merge.
import { forwardRef } from "react";
import type { TextareaHTMLAttributes } from "react";
import { cn } from "../lib/utils";

export interface InputTextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size"> {
  label?: string;
  error?: string;
  helperText?: string;
  variant?: "default" | "outline" | "filled";
  size?: "sm" | "md" | "lg";
  resize?: "none" | "vertical" | "horizontal" | "both";
}

export const InputTextarea = forwardRef<
  HTMLTextAreaElement,
  InputTextareaProps
>(
  (
    {
      className,
      label,
      error,
      helperText,
      variant = "default",
      size = "md",
      resize = "vertical",
      id,
      ...props
    },
    ref,
  ) => {
    const textareaId =
      id || `textarea-${Math.random().toString(36).substr(2, 9)}`;

    const baseClasses =
      "w-full transition-colors duration-200 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50";

    const variantClasses = {
      default:
        "border border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200",
      outline:
        "border-2 border-gray-300 bg-transparent text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200",
      filled:
        "border-0 bg-gray-100 text-gray-900 placeholder:text-gray-500 focus:bg-white focus:ring-2 focus:ring-blue-200 focus:border-blue-500",
    };

    const sizeClasses = {
      sm: "min-h-[80px] px-3 py-2 text-sm rounded-md",
      md: "min-h-[100px] px-3 py-2 text-sm rounded-md",
      lg: "min-h-[120px] px-4 py-3 text-base rounded-lg",
    };

    const resizeClasses = {
      none: "resize-none",
      vertical: "resize-y",
      horizontal: "resize-x",
      both: "resize",
    };

    const errorClasses = error
      ? "border-red-500 focus:border-red-500 focus:ring-red-200"
      : "";

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {label}
          </label>
        )}

        <textarea
          id={textareaId}
          ref={ref}
          className={cn(
            baseClasses,
            variantClasses[variant],
            sizeClasses[size],
            resizeClasses[resize],
            errorClasses,
            className,
          )}
          {...props}
        />

        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}

        {helperText && !error && (
          <p className="mt-1 text-sm text-gray-500">{helperText}</p>
        )}
      </div>
    );
  },
);

InputTextarea.displayName = "InputTextarea";
