'use client';
// PENTING: Komponen reusable ini digunakan luas di seluruh modul. Setiap perubahan WAJIB direkap di file 'recapt-changes-switch.md' pada folder komponen ini (packages/ui/src/Switch). Sertakan tanggal, lokasi baris/kode, dan alasan perubahan. Lakukan review ekstra hati-hati sebelum merge.

import React from 'react';
import { cn } from '../lib/utils';

export interface SwitchProps {
  id?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  description?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: 'blue' | 'green' | 'purple' | 'red' | 'teal';
  className?: string;
  labelClassName?: string;
  descriptionClassName?: string;
}

export function Switch({
  id,
  checked,
  onChange,
  disabled = false,
  label,
  description,
  size = 'md',
  color = 'teal',
  className,
  labelClassName,
  descriptionClassName,
}: SwitchProps) {
  // Size configurations
  const sizeConfig = {
    sm: {
      container: 'w-9 h-5',
      circle: 'w-4 h-4',
    },
    md: {
      container: 'w-11 h-6',
      circle: 'w-5 h-5',
    },
    lg: {
      container: 'w-14 h-7',
      circle: 'w-6 h-6',
    },
  }[size];

  // Translation based on checked state
  const translateClass = {
    sm: checked ? 'translate-x-4' : 'translate-x-0.5',
    md: checked ? 'translate-x-5' : 'translate-x-0.5',
    lg: checked ? 'translate-x-7' : 'translate-x-0.5',
  }[size];

  // Background color based on checked state
  const bgColor = checked
    ? {
        blue: 'bg-blue-600',
        green: 'bg-emerald-600',
        purple: 'bg-purple-600',
        red: 'bg-red-600',
        teal: 'bg-teal-600',
      }[color]
    : 'bg-gray-300';

  // Focus ring color
  const focusRingColor = {
    blue: 'focus-visible:ring-blue-300',
    green: 'focus-visible:ring-emerald-300',
    purple: 'focus-visible:ring-purple-300',
    red: 'focus-visible:ring-red-300',
    teal: 'focus-visible:ring-teal-300',
  }[color];

  const handleClick = () => {
    if (!disabled) {
      onChange(!checked);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      handleClick();
    }
  };

  const switchElement = (
    <button
      type="button"
      role="switch"
      id={id}
      aria-checked={checked}
      aria-disabled={disabled}
      aria-describedby={description ? `${id}-description` : undefined}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      className={cn(
        'relative inline-flex items-center cursor-pointer',
        sizeConfig.container,
        'rounded-full',
        bgColor,
        'focus:outline-none focus-visible:ring-4',
        focusRingColor,
        'transition-colors duration-300',
        disabled && 'opacity-50 cursor-not-allowed',
        !disabled && 'hover:opacity-90',
        !label && !description && className
      )}
    >
      <span
        className={cn(
          'absolute left-0.5 top-0.5',
          sizeConfig.circle,
          'bg-white rounded-full shadow-lg',
          translateClass,
          'transition-transform duration-300'
        )}
      />
    </button>
  );

  // If no label and description, return just the switch
  if (!label && !description) {
    return switchElement;
  }

  // Return with label and description
  return (
    <div className={cn('flex items-start space-x-3', className)}>
      {switchElement}
      
      <div className="flex-1">
        {label && (
          <label
            htmlFor={id}
            onClick={handleClick}
            className={cn(
              'block text-sm font-medium text-gray-900 cursor-pointer select-none',
              disabled && 'opacity-50 cursor-not-allowed',
              labelClassName
            )}
          >
            {label}
          </label>
        )}
        {description && (
          <p
            id={`${id}-description`}
            className={cn(
              'text-xs text-gray-500 mt-1',
              disabled && 'opacity-50',
              descriptionClassName
            )}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

// Compact variant
export interface CompactSwitchProps extends Omit<SwitchProps, 'description'> {
  inline?: boolean;
}

export function CompactSwitch({
  label,
  className,
  labelClassName,
  ...props
}: CompactSwitchProps) {
  if (!label) {
    return <Switch {...props} className={className} />;
  }

  return (
    <div
      className={cn(
        'inline-flex items-center space-x-3',
        className
      )}
    >
      <Switch {...props} />
      <span 
        onClick={() => !props.disabled && props.onChange(!props.checked)}
        className={cn(
          'text-sm font-medium text-gray-900 cursor-pointer select-none',
          props.disabled && 'opacity-50 cursor-not-allowed',
          labelClassName
        )}
      >
        {label}
      </span>
    </div>
  );
}