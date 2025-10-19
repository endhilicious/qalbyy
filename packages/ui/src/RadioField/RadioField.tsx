'use client';
// PENTING: Komponen reusable ini digunakan luas di seluruh modul. Setiap perubahan WAJIB direkap di file 'recapt-changes-radiofield.md' pada folder komponen ini (packages/ui/src/RadioField). Sertakan tanggal, lokasi baris/kode, dan alasan perubahan. Lakukan review ekstra hati-hati sebelum merge.

import React, { useState } from 'react';

export interface RadioOption {
  value: string | number;
  label: string;
  description?: string;
  disabled?: boolean;
}

export interface RadioFieldProps {
  /** Array of radio options */
  options: RadioOption[];
  /** Currently selected value */
  value?: string | number;
  /** Callback when selection changes */
  onChange: (value: string | number) => void;
  /** Field name for form submission */
  name?: string;
  /** Label for the radio group */
  label?: string;
  /** Helper text */
  helperText?: string;
  /** Error message */
  error?: string;
  /** Whether the field is disabled */
  disabled?: boolean;
  /** Whether the field is required */
  required?: boolean;
  /** Custom className */
  className?: string;
  /** Layout direction */
  direction?: 'vertical' | 'horizontal';
  /** Whether to take full width */
  fullWidth?: boolean;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
}

/**
 * RadioField Component
 * 
 * A reusable radio button group component with customizable styling,
 * validation, and accessibility features.
 */
export function RadioField({
  options,
  value,
  onChange,
  name,
  label,
  helperText,
  error,
  disabled = false,
  required = false,
  className = "",
  direction = 'vertical',
  fullWidth = false,
  size = 'md'
}: RadioFieldProps) {
  const [groupId] = useState(() => 
    name || `radio-group-${Math.random().toString(36).substr(2, 9)}`
  );

  const handleChange = (optionValue: string | number) => {
    if (disabled) return;
    onChange(optionValue);
  };

  const sizeClasses = {
    sm: {
      radio: 'w-3 h-3',
      text: 'text-sm',
      spacing: 'space-y-2'
    },
    md: {
      radio: 'w-4 h-4',
      text: 'text-base',
      spacing: 'space-y-3'
    },
    lg: {
      radio: 'w-5 h-5',
      text: 'text-lg',
      spacing: 'space-y-4'
    }
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={`${fullWidth ? 'w-full' : ''} ${className}`}>
      {/* Label */}
      {label && (
        <fieldset>
          <legend className="block text-sm font-medium text-gray-700 mb-3">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </legend>
          
          {/* Radio Options */}
          <div className={`
            ${direction === 'horizontal' ? 'flex flex-wrap gap-6' : `flex flex-col ${currentSize.spacing}`}
          `}>
            {options.map((option) => {
              const isSelected = value === option.value;
              const isDisabled = disabled || option.disabled;
              const optionId = `${groupId}-${option.value}`;

              return (
                <div key={option.value} className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id={optionId}
                      name={groupId}
                      type="radio"
                      value={option.value}
                      checked={isSelected}
                      onChange={() => handleChange(option.value)}
                      disabled={isDisabled}
                      className={`
                        ${currentSize.radio} text-blue-600 border-gray-300 focus:ring-blue-500 focus:ring-2
                        ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                        ${error ? 'border-red-300' : ''}
                      `}
                      aria-describedby={
                        error ? `${groupId}-error` : 
                        helperText ? `${groupId}-helper` : undefined
                      }
                    />
                  </div>
                  <div className="ml-3">
                    <label 
                      htmlFor={optionId}
                      className={`
                        ${currentSize.text} font-medium
                        ${isDisabled ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 cursor-pointer'}
                      `}
                    >
                      {option.label}
                    </label>
                    {option.description && (
                      <p className={`
                        text-sm text-gray-500 mt-1
                        ${isDisabled ? 'opacity-50' : ''}
                      `}>
                        {option.description}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </fieldset>
      )}

      {/* Without fieldset for cases without label */}
      {!label && (
        <div className={`
          ${direction === 'horizontal' ? 'flex flex-wrap gap-6' : `flex flex-col ${currentSize.spacing}`}
        `}>
          {options.map((option) => {
            const isSelected = value === option.value;
            const isDisabled = disabled || option.disabled;
            const optionId = `${groupId}-${option.value}`;

            return (
              <div key={option.value} className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id={optionId}
                    name={groupId}
                    type="radio"
                    value={option.value}
                    checked={isSelected}
                    onChange={() => handleChange(option.value)}
                    disabled={isDisabled}
                    className={`
                      ${currentSize.radio} text-blue-600 border-gray-300 focus:ring-blue-500 focus:ring-2
                      ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                      ${error ? 'border-red-300' : ''}
                    `}
                    aria-describedby={
                      error ? `${groupId}-error` : 
                      helperText ? `${groupId}-helper` : undefined
                    }
                  />
                </div>
                <div className="ml-3">
                  <label 
                    htmlFor={optionId}
                    className={`
                      ${currentSize.text} font-medium
                      ${isDisabled ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 cursor-pointer'}
                    `}
                  >
                    {option.label}
                  </label>
                  {option.description && (
                    <p className={`
                      text-sm text-gray-500 mt-1
                      ${isDisabled ? 'opacity-50' : ''}
                    `}>
                      {option.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Error Message */}
      {error && (
        <p id={`${groupId}-error`} className="mt-2 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}

      {/* Helper Text */}
      {helperText && !error && (
        <p id={`${groupId}-helper`} className="mt-2 text-sm text-gray-500">
          {helperText}
        </p>
      )}
    </div>
  );
}

RadioField.displayName = 'RadioField';

export default RadioField;