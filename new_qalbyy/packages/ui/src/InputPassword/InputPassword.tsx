// PENTING: Komponen reusable ini digunakan luas di seluruh modul. Setiap perubahan WAJIB direkap di file 'recapt-changes-inputpassword.md' pada folder komponen ini (packages/ui/src/InputPassword). Sertakan tanggal, lokasi baris/kode, dan alasan perubahan. Lakukan review ekstra hati-hati sebelum merge.
import { forwardRef, useState } from "react";
import type { InputHTMLAttributes } from "react";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "../lib/utils";

export interface InputPasswordProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  label?: string;
  error?: string;
  helperText?: string;
  variant?: "default" | "outline" | "filled";
  size?: "sm" | "md" | "lg";
  showToggle?: boolean;
}

export const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>(
  (
    {
      className,
      label,
      error,
      helperText,
      variant = "default",
      size = "md",
      showToggle = true,
      id,
      ...props
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const inputId =
      id || `password-input-${Math.random().toString(36).substr(2, 9)}`;

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

    const paddingRight = showToggle
      ? size === "sm"
        ? "pr-8"
        : size === "md"
          ? "pr-10"
          : "pr-12"
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

        <div className="relative">
          <input
            id={inputId}
            ref={ref}
            type={showPassword ? "text" : "password"}
            className={cn(
              baseClasses,
              variantClasses[variant],
              sizeClasses[size],
              errorClasses,
              paddingRight,
              className,
            )}
            {...props}
          />

          {showToggle && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className={cn(
                "absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600 transition-colors duration-200",
                size === "sm"
                  ? "w-8 h-8"
                  : size === "md"
                    ? "w-10 h-10"
                    : "w-12 h-12",
              )}
              tabIndex={-1}
            >
              {showPassword ? (
                <EyeOff
                  className={cn(
                    size === "sm"
                      ? "h-4 w-4"
                      : size === "md"
                        ? "h-4 w-4"
                        : "h-5 w-5",
                  )}
                />
              ) : (
                <Eye
                  className={cn(
                    size === "sm"
                      ? "h-4 w-4"
                      : size === "md"
                        ? "h-4 w-4"
                        : "h-5 w-5",
                  )}
                />
              )}
            </button>
          )}
        </div>

        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}

        {helperText && !error && (
          <p className="mt-1 text-sm text-gray-500">{helperText}</p>
        )}
      </div>
    );
  },
);

InputPassword.displayName = "InputPassword";
