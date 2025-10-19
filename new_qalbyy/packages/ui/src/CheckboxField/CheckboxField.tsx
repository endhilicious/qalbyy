'use client';
// PENTING: Komponen reusable ini digunakan luas di seluruh modul. Setiap perubahan WAJIB direkap di file 'recapt-changes-checkboxfield.md' pada folder komponen ini (packages/ui/src/CheckboxField). Sertakan tanggal, lokasi baris/kode, dan alasan perubahan. Lakukan review ekstra hati-hati sebelum merge.

import React, { useState } from 'react';

export interface CheckboxOption {
  value: string | number;
  label: string;
  description?: string;
  disabled?: boolean;
}

export interface CheckboxFieldProps {
  /** Single checkbox mode */
  label?: string;
  /** Description text for single checkbox */
  description?: string;
  /** Checked state for single checkbox */
  checked?: boolean;
  /** Change handler for single checkbox */
  onChange?: (checked: boolean) => void;
  
  /** Multiple checkbox mode */
  options?: CheckboxOption[];
  /** Selected values for multiple checkboxes */
  value?: (string | number)[];
  /** Change handler for multiple checkboxes */
  onMultiChange?: (values: (string | number)[]) => void;
  
  /** Field name for form submission */
  name?: string;
  /** Group label for multiple checkboxes */
  groupLabel?: string;
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
  /** Layout direction for multiple checkboxes */
  direction?: 'vertical' | 'horizontal';
  /** Whether to take full width */
  fullWidth?: boolean;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Checkbox color theme */
  color?: 'blue' | 'green' | 'purple' | 'red' | 'yellow';
  /** Whether to show indeterminate state (for single checkbox) */
  indeterminate?: boolean;
}

/**
 * CheckboxField Component
 * 
 * A versatile checkbox component that supports both single checkbox
 * and multiple checkbox group modes with customizable styling,
 * validation, and accessibility features.
 */
export function CheckboxField({
  // Single checkbox props
  label,
  description,
  checked = false,
  onChange,
  
  // Multiple checkbox props
  options,
  value = [],
  onMultiChange,
  
  // Common props
  name,
  groupLabel,
  helperText,
  error,
  disabled = false,
  required = false,
  className = "",
  direction = 'vertical',
  fullWidth = false,
  size = 'md',
  color = 'blue',
  indeterminate = false
}: CheckboxFieldProps) {
  const [groupId] = useState(() => 
    name || `checkbox-group-${Math.random().toString(36).substr(2, 9)}`
  );

  const isMultipleMode = options && options.length > 0;

  const sizeClasses = {
    sm: {
      checkbox: 'w-3 h-3',
      text: 'text-sm',
      spacing: 'space-y-2'
    },
    md: {
      checkbox: 'w-4 h-4',
      text: 'text-base',
      spacing: 'space-y-3'
    },
    lg: {
      checkbox: 'w-5 h-5',
      text: 'text-lg',
      spacing: 'space-y-4'
    }
  };

  const colorClasses = {
    blue: 'text-blue-600 focus:ring-blue-500',
    green: 'text-green-600 focus:ring-green-500',
    purple: 'text-purple-600 focus:ring-purple-500',
    red: 'text-red-600 focus:ring-red-500',
    yellow: 'text-yellow-600 focus:ring-yellow-500'
  };

  const currentSize = sizeClasses[size];
  const currentColor = colorClasses[color];

  // Single checkbox handlers
  const handleSingleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    onChange?.(e.target.checked);
  };

  // Multiple checkbox handlers
  const handleMultipleChange = (optionValue: string | number, isChecked: boolean) => {
    if (disabled) return;
    
    let newValues: (string | number)[];
    if (isChecked) {
      newValues = [...value, optionValue];
    } else {
      newValues = value.filter(v => v !== optionValue);
    }
    onMultiChange?.(newValues);
  };

  // Single checkbox mode
  if (!isMultipleMode) {
    const checkboxId = `${groupId}-single`;
    
    return (
      <div className={`${fullWidth ? 'w-full' : ''} ${className}`}>
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id={checkboxId}
              name={name}
              type="checkbox"
              checked={checked}
              onChange={handleSingleChange}
              disabled={disabled}
              required={required}
              ref={(input) => {
                if (input) input.indeterminate = indeterminate;
              }}
              className={`
                ${currentSize.checkbox} ${currentColor} border-gray-300 rounded focus:ring-2
                ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
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
              htmlFor={checkboxId}
              className={`
                ${currentSize.text} font-medium
                ${disabled ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 cursor-pointer'}
              `}
            >
              {label}
              {required && <span className="text-red-500 ml-1">*</span>}
            </label>
            {description && (
              <p className={`
                text-sm text-gray-500 mt-1
                ${disabled ? 'opacity-50' : ''}
              `}>
                {description}
              </p>
            )}
          </div>
        </div>

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

  // Multiple checkbox mode
  return (
    <div className={`${fullWidth ? 'w-full' : ''} ${className}`}>
      {/* Group Label */}
      {groupLabel && (
        <fieldset>
          <legend className="block text-sm font-medium text-gray-700 mb-3">
            {groupLabel}
            {required && <span className="text-red-500 ml-1">*</span>}
          </legend>
          
          {/* Checkbox Options */}
          <div className={`
            ${direction === 'horizontal' ? 'flex flex-wrap gap-6' : `flex flex-col ${currentSize.spacing}`}
          `}>
            {options.map((option) => {
              const isChecked = value.includes(option.value);
              const isDisabled = disabled || option.disabled;
              const optionId = `${groupId}-${option.value}`;

              return (
                <div key={option.value} className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id={optionId}
                      name={`${groupId}[]`}
                      type="checkbox"
                      value={option.value}
                      checked={isChecked}
                      onChange={(e) => handleMultipleChange(option.value, e.target.checked)}
                      disabled={isDisabled}
                      className={`
                        ${currentSize.checkbox} ${currentColor} border-gray-300 rounded focus:ring-2
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

      {/* Without fieldset for cases without group label */}
      {!groupLabel && (
        <div className={`
          ${direction === 'horizontal' ? 'flex flex-wrap gap-6' : `flex flex-col ${currentSize.spacing}`}
        `}>
          {options.map((option) => {
            const isChecked = value.includes(option.value);
            const isDisabled = disabled || option.disabled;
            const optionId = `${groupId}-${option.value}`;

            return (
              <div key={option.value} className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id={optionId}
                    name={`${groupId}[]`}
                    type="checkbox"
                    value={option.value}
                    checked={isChecked}
                    onChange={(e) => handleMultipleChange(option.value, e.target.checked)}
                    disabled={isDisabled}
                    className={`
                      ${currentSize.checkbox} ${currentColor} border-gray-300 rounded focus:ring-2
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

CheckboxField.displayName = 'CheckboxField';

export default CheckboxField;