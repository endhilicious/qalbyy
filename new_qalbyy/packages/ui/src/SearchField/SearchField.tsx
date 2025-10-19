"use client";
// PENTING: Komponen reusable ini digunakan luas di seluruh modul. Setiap perubahan WAJIB direkap di file 'recapt-changes-searchfield.md' pada folder komponen ini (packages/ui/src/SearchField). Sertakan tanggal, lokasi baris/kode, dan alasan perubahan. Lakukan review ekstra hati-hati sebelum merge.

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { cn } from "../lib/utils";

export type SearchFieldSize = "sm" | "md" | "lg";
export type SearchFieldVariant = "default" | "outline" | "filled";

export interface SearchFieldProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDebouncedChange?: (value: string) => void;
  onClear?: () => void;
  minChars?: number; // Minimum characters before debounced callback fires
  debounceMs?: number; // Debounce delay in ms
  size?: SearchFieldSize;
  variant?: SearchFieldVariant;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  inputClassName?: string;
}

/**
 * SearchField
 * - Reusable search input with built-in debounce and clear (X) button
 * - Consistent sizing and variants, matching @repo/ui design system
 */
export function SearchField({
  label,
  placeholder = "Cari...",
  value = "",
  onChange,
  onDebouncedChange,
  onClear,
  minChars = 3,
  debounceMs = 500,
  size = "md",
  variant = "outline",
  disabled = false,
  required = false,
  className = "",
  inputClassName = "",
}: SearchFieldProps) {
  const [internalValue, setInternalValue] = useState<string>(value || "");
  const timerRef = useRef<number | null>(null);

  // Sync external value to internal
  useEffect(() => {
    setInternalValue(value || "");
  }, [value]);

  // Debounce effect
  useEffect(() => {
    if (!onDebouncedChange) return;

    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    timerRef.current = window.setTimeout(() => {
      const trimmed = internalValue.trim();
      if (trimmed.length >= minChars) {
        onDebouncedChange(trimmed);
      } else if (trimmed.length === 0) {
        // Trigger debounced clear to allow calling code to reset endpoint results
        onDebouncedChange("");
      }
    }, debounceMs);

    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [internalValue, minChars, debounceMs, onDebouncedChange]);

  const sizeClasses = useMemo(() => {
    switch (size) {
      case "sm":
        return {
          input: "h-9 text-sm pl-9 pr-9",
          icon: "h-4 w-4",
          clear: "h-4 w-4",
          label: "text-sm",
        };
      case "lg":
        return {
          input: "h-12 text-base pl-10 pr-10",
          icon: "h-5 w-5",
          clear: "h-5 w-5",
          label: "text-base",
        };
      case "md":
      default:
        return {
          input: "h-10 text-sm pl-10 pr-10",
          icon: "h-4 w-4",
          clear: "h-4 w-4",
          label: "text-sm",
        };
    }
  }, [size]);

  const variantClasses = useMemo(() => {
    switch (variant) {
      case "filled":
        return "bg-gray-50 border border-gray-200 focus:bg-white";
      case "outline":
        return "border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500";
      case "default":
      default:
        return "border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500";
    }
  }, [variant]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInternalValue(e.target.value);
    onChange?.(e);
  };

  const handleClear = () => {
    setInternalValue("");
    onClear?.();
    // Also propagate to parent controlled value via synthetic event if onChange provided
    if (onChange) {
      const syntheticEvent = {
        target: { value: "" },
      } as unknown as React.ChangeEvent<HTMLInputElement>;
      onChange(syntheticEvent);
    }
    // Fire debounced change immediately for clear to reset upstream results
    onDebouncedChange?.("");
  };

  return (
    <div className={cn("w-full", className)}>
      {label && (
        <label className={cn("block mb-1.5 font-medium text-gray-700", sizeClasses.label)}>
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="relative">
        <Search className={cn("absolute left-3 top-1/2 -translate-y-1/2 text-gray-400", sizeClasses.icon)} />

        <input
          type="text"
          placeholder={placeholder}
          value={internalValue}
          onChange={handleChange}
          disabled={disabled}
          aria-label={label || placeholder}
          className={cn(
            "w-full rounded-xl transition-all duration-200",
            sizeClasses.input,
            variantClasses,
            inputClassName
          )}
        />

        {internalValue && !disabled && (
          <button
            type="button"
            onClick={handleClear}
            aria-label="Clear search"
            className={cn(
              "absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-md",
              "text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors",
              size === "lg" ? "h-8 w-8" : "h-7 w-7"
            )}
          >
            <X className={sizeClasses.clear} />
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchField;