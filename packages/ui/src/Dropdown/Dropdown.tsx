// PENTING: Komponen reusable ini digunakan luas di seluruh modul. Setiap perubahan WAJIB direkap di file 'recapt-changes-dropdown.md' pada folder komponen ini (packages/ui/src/Dropdown). Sertakan tanggal, lokasi baris/kode, dan alasan perubahan. Lakukan review ekstra hati-hati sebelum merge.
import { forwardRef } from "react";
import type { SelectHTMLAttributes } from "react";
import { cn } from "../lib/utils";

export interface DropdownOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

export interface DropdownProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "children" | "size"> {
  label?: string;
  error?: string;
  helperText?: string;
  placeholder?: string;
  options: DropdownOption[];
  variant?: "default" | "outline" | "filled";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Dropdown = forwardRef<HTMLSelectElement, DropdownProps>(
  (
    {
      className,
      label,
      error,
      helperText,
      placeholder,
      options,
      variant = "default",
      size = "md",
      id,
      style,
      ...props
    },
    ref,
  ) => {
    const selectId =
      id || `dropdown-${Math.random().toString(36).substr(2, 9)}`;

    const baseClasses =
      "w-full transition-colors duration-200 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 appearance-none cursor-pointer bg-no-repeat pr-10";

    const variantClasses = {
      default:
        "border border-gray-300 bg-white text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200",
      outline:
        "border-2 border-gray-300 bg-transparent text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200",
      filled:
        "border-0 bg-gray-100 text-gray-900 focus:bg-white focus:ring-2 focus:ring-blue-200 focus:border-blue-500",
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
            htmlFor={selectId}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {label}
          </label>
        )}

        <div className="relative">
          <select
            id={selectId}
            ref={ref}
            className={cn(
              baseClasses,
              variantClasses[variant],
              sizeClasses[size],
              errorClasses,
              className,
            )}
            style={{
              ...(style || {}),
              appearance: "none",
              WebkitAppearance: "none",
              MozAppearance: "none",
              backgroundImage: "none",
            }}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>

          {/* Custom dropdown arrow */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              className={cn(
                "text-gray-400",
                size === "sm"
                  ? "h-4 w-4"
                  : size === "md"
                    ? "h-4 w-4"
                    : "h-5 w-5",
              )}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}

        {helperText && !error && (
          <p className="mt-1 text-sm text-gray-500">{helperText}</p>
        )}
      </div>
    );
  },
);

Dropdown.displayName = "Dropdown";
