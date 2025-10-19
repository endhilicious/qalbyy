// PENTING: Komponen reusable ini digunakan luas di seluruh modul. Setiap perubahan WAJIB direkap di file 'recapt-changes-inputtext.md' pada folder komponen ini (packages/ui/src/InputText). Sertakan tanggal, lokasi baris/kode, dan alasan perubahan. Lakukan review ekstra hati-hati sebelum merge.
import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";
import { cn } from "../lib/utils";

export interface InputTextProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  error?: string;
  helperText?: string;
  variant?: "default" | "outline" | "filled";
  size?: "sm" | "md" | "lg";
}

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  (
    {
      className,
      label,
      error,
      helperText,
      variant = "default",
      size = "md",
      id,
      ...props
    },
    ref,
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

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
      sm: "h-8 px-3 text-sm rounded-md",
      md: "h-10 px-3 text-sm rounded-md",
      lg: "h-12 px-4 text-base rounded-lg",
    };

    const errorClasses = error
      ? "border-red-500 focus:border-red-500 focus:ring-red-200"
      : "";

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {label}
          </label>
        )}

        <input
          id={inputId}
          ref={ref}
          type="text"
          className={cn(
            baseClasses,
            variantClasses[variant],
            sizeClasses[size],
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

InputText.displayName = "InputText";
