// PENTING: Komponen reusable ini digunakan luas di seluruh modul. Setiap perubahan WAJIB direkap di file 'recapt-changes-inputdatetime.md' pada folder komponen ini (packages/ui/src/InputDateTime). Sertakan tanggal, lokasi baris/kode, dan alasan perubahan. Lakukan review ekstra hati-hati sebelum merge.
import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";
import { cn } from "../lib/utils";

export interface InputDateTimeProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  label?: string;
  error?: string;
  helperText?: string;
  variant?: "default" | "outline" | "filled";
  size?: "sm" | "md" | "lg";
  /**
   * Include time in the datetime picker
   * @default true
   */
  includeTime?: boolean;
}

export const InputDateTime = forwardRef<HTMLInputElement, InputDateTimeProps>(
  (
    {
      className,
      label,
      error,
      helperText,
      variant = "default",
      size = "md",
      includeTime = true,
      id,
      ...props
    },
    ref,
  ) => {
    const inputId = id || `input-datetime-${Math.random().toString(36).substr(2, 9)}`;
    const inputType = includeTime ? "datetime-local" : "date";

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
      md: "h-10 px-3 text-sm rounded-lg",
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
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        <input
          id={inputId}
          ref={ref}
          type={inputType}
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

InputDateTime.displayName = "InputDateTime";
