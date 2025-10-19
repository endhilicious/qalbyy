'use client';
// PENTING: Komponen reusable ini digunakan luas di seluruh modul. Setiap perubahan WAJIB direkap di file 'recapt-changes-currencyfield.md' pada folder komponen ini (packages/ui/src/CurrencyField). Sertakan tanggal, lokasi baris/kode, dan alasan perubahan. Lakukan review ekstra hati-hati sebelum merge.

import React, { useState, useEffect } from 'react';

export interface CurrencyFieldProps {
  value: number;
  onChange: (value: number) => void;
  placeholder?: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  error?: string;
  min?: number;
  max?: number;
  currency?: 'IDR' | 'USD' | 'EUR' | 'JPY';
  locale?: string;
  showHelperText?: boolean;
  helperText?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outlined' | 'filled';
}

export const CurrencyField: React.FC<CurrencyFieldProps> = ({
  value,
  onChange,
  placeholder = '0',
  label,
  required = false,
  disabled = false,
  className = '',
  error,
  min = 0,
  max,
  currency = 'IDR',
  locale = 'id-ID',
  showHelperText = true,
  helperText,
  size = 'md',
  variant = 'default',
}) => {
  const [displayValue, setDisplayValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  // Currency symbols and formatting
  const currencySymbols = {
    IDR: 'Rp',
    USD: '$',
    EUR: '€',
    JPY: '¥',
  };

  const currencyLocales = {
    IDR: 'id-ID',
    USD: 'en-US',
    EUR: 'de-DE',
    JPY: 'ja-JP',
  };

  // Format number to currency
  const formatToCurrency = (amount: number): string => {
    if (isNaN(amount) || !isFinite(amount)) return amount === 0 ? '' : '0';
    
    const formatLocale = currencyLocales[currency] || locale;
    
    if (currency === 'IDR') {
      return amount.toLocaleString(formatLocale);
    }
    
    // For other currencies, format without the currency symbol since we'll show it separately
    return new Intl.NumberFormat(formatLocale, {
      minimumFractionDigits: currency === 'JPY' ? 0 : 2,
      maximumFractionDigits: currency === 'JPY' ? 0 : 2,
    }).format(amount);
  };

  // Parse currency string to number
  const parseFromCurrency = (currencyString: string): number => {
    if (!currencyString) return 0;
    
    // Remove formatting (dots for thousands separator, keep decimal comma/point)
    let cleanString = currencyString.replace(/\s/g, '');
    
    if (currency === 'IDR') {
      // For IDR, remove dots (thousand separators)
      cleanString = cleanString.replace(/\./g, '');
    } else {
      // For other currencies, handle decimal separators properly
      // Remove thousand separators (commas) but keep decimal point
      const parts = cleanString.split('.');
      if (parts.length > 2) {
        // Multiple dots means thousand separators, keep only the last one as decimal
        cleanString = parts.slice(0, -1).join('') + '.' + parts[parts.length - 1];
      }
    }
    
    const parsed = parseFloat(cleanString);
    return isNaN(parsed) ? 0 : parsed;
  };

  // Initialize display value
  useEffect(() => {
    if (!isFocused) {
      setDisplayValue(formatToCurrency(value));
    }
  }, [value, currency, locale, isFocused]);

  const handleFocus = () => {
    setIsFocused(true);
    // Keep formatted display but allow editing
    setDisplayValue(formatToCurrency(value));
  };

  const handleBlur = () => {
    setIsFocused(false);
    // Format back to currency when blurred
    let parsedValue = parseFromCurrency(displayValue);

    // Apply min/max constraints
    if (min !== undefined && parsedValue < min) {
      parsedValue = min;
    }
    if (max !== undefined && parsedValue > max) {
      parsedValue = max;
    }

    if (parsedValue !== value) {
      onChange(parsedValue);
    }
    setDisplayValue(formatToCurrency(parsedValue));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    
    // Extract numeric part from the formatted input
    const numericValue = parseFromCurrency(inputValue);
    
    // Format the numeric value back to currency format
    const formattedValue = formatToCurrency(numericValue);
    
    setDisplayValue(formattedValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Allow: backspace, delete, tab, escape, enter, and navigation keys
    if ([8, 9, 27, 13, 46, 37, 38, 39, 40].includes(e.keyCode)) {
      return;
    }

    // Allow decimal point for non-JPY currencies (check if decimal already exists in numeric part)
    if (currency !== 'JPY' && e.keyCode === 190) {
      const numericPart = parseFromCurrency(displayValue).toString();
      if (!numericPart.includes('.')) {
        return;
      }
    }

    // Allow: numbers and control keys
    if (
      (e.keyCode >= 48 && e.keyCode <= 57) || // numbers
      (e.keyCode >= 96 && e.keyCode <= 105) || // numpad numbers
      (e.ctrlKey && [65, 67, 86, 88, 90].includes(e.keyCode)) // ctrl+a, ctrl+c, ctrl+v, ctrl+x, ctrl+z
    ) {
      return;
    }

    // Prevent other keys
    e.preventDefault();
  };

  // Size classes with left padding for currency symbol
  const sizeClasses = {
    sm: 'pl-8 pr-2 py-1 text-sm',
    md: 'pl-10 pr-3 py-2 text-base',
    lg: 'pl-12 pr-4 py-3 text-lg',
  };

  // Variant classes
  const variantClasses = {
    default: 'border border-gray-300 bg-white',
    outlined: 'border-2 border-gray-300 bg-transparent',
    filled: 'border-0 bg-gray-100',
  };

  // Focus classes
  const focusClasses = {
    default: 'focus:border-blue-500 focus:ring-blue-200',
    outlined: 'focus:border-blue-500',
    filled: 'focus:bg-white focus:ring-blue-200',
  };

  const getHelperText = () => {
    if (helperText) return helperText;
    
    const examples = {
      IDR: '1000000 (tanpa titik atau koma)',
      USD: '1000.50',
      EUR: '1000.50',
      JPY: '1000 (tanpa desimal)',
    };
    
    return `Format: ${examples[currency]}`;
  };

  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        {/* Currency symbol - always visible */}
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <span className="text-gray-500 text-sm font-medium">{currencySymbols[currency]}</span>
        </div>
        
        <input
          type="text"
          value={displayValue}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          className={`
            w-full rounded-lg transition-all duration-200 focus:outline-none focus:ring-2
            ${sizeClasses[size]}
            ${variantClasses[variant]}
            ${disabled
              ? 'bg-gray-50 text-gray-500 cursor-not-allowed border-gray-200'
              : error
                ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                : focusClasses[variant]
            }
            ${className}
          `}
        />
      </div>

      {error && (
        <p className="text-sm text-red-600 flex items-center gap-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </p>
      )}

      {!error && showHelperText && (
        <p className="text-xs text-gray-500 flex items-center gap-1">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          {getHelperText()}
        </p>
      )}
    </div>
  );
};

export default CurrencyField;