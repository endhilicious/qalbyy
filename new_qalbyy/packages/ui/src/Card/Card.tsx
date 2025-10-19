'use client';
// PENTING: Komponen reusable ini digunakan luas di seluruh modul. Setiap perubahan WAJIB direkap di file 'recapt-changes-card.md' pada folder komponen ini (packages/ui/src/Card). Sertakan tanggal, lokasi baris/kode, dan alasan perubahan. Lakukan review ekstra hati-hati sebelum merge.

import React from 'react';

export interface CardProps {
  /** Card content */
  children: React.ReactNode;
  /** Card title */
  title?: string;
  /** Card subtitle */
  subtitle?: string;
  /** Header content (overrides title/subtitle) */
  header?: React.ReactNode;
  /** Footer content */
  footer?: React.ReactNode;
  /** Card variant */
  variant?: 'default' | 'outlined' | 'elevated' | 'filled';
  /** Card size */
  size?: 'sm' | 'md' | 'lg';
  /** Whether the card is clickable */
  clickable?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Whether the card is disabled */
  disabled?: boolean;
  /** Custom className */
  className?: string;
  /** Whether to take full width */
  fullWidth?: boolean;
  /** Padding variant */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Border radius */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /** Whether to show divider between header and content */
  divider?: boolean;
  /** Image source for card image */
  image?: string;
  /** Image alt text */
  imageAlt?: string;
  /** Image position */
  imagePosition?: 'top' | 'bottom' | 'left' | 'right';
}

/**
 * Card Component
 * 
 * A versatile card component that can be used to display content in a
 * structured and visually appealing way. Supports various layouts,
 * styling options, and interactive states.
 */
export function Card({
  children,
  title,
  subtitle,
  header,
  footer,
  variant = 'default',
  size = 'md',
  clickable = false,
  onClick,
  disabled = false,
  className = "",
  fullWidth = false,
  padding = 'md',
  rounded = 'md',
  divider = false,
  image,
  imageAlt,
  imagePosition = 'top'
}: CardProps) {
  const isInteractive = clickable && !disabled;

  // Variant styles
  const variantClasses = {
    default: 'bg-white border border-gray-200',
    outlined: 'bg-white border-2 border-gray-300',
    elevated: 'bg-white shadow-lg border border-gray-100',
    filled: 'bg-gray-50 border border-gray-200'
  };

  // Size styles
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  // Padding styles
  const paddingClasses = {
    none: '',
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6'
  };

  // Rounded styles
  const roundedClasses = {
    none: '',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full'
  };

  // Interactive styles
  const interactiveClasses = isInteractive
    ? 'cursor-pointer hover:shadow-md transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
    : '';

  // Disabled styles
  const disabledClasses = disabled
    ? 'opacity-50 cursor-not-allowed'
    : '';

  const cardClasses = `
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${roundedClasses[rounded]}
    ${interactiveClasses}
    ${disabledClasses}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `.trim();

  const handleClick = () => {
    if (isInteractive && onClick) {
      onClick();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (isInteractive && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick?.();
    }
  };

  // Image component
  const ImageComponent = image ? (
    <div className={`
      ${imagePosition === 'top' ? 'rounded-t-md' : ''}
      ${imagePosition === 'bottom' ? 'rounded-b-md' : ''}
      ${imagePosition === 'left' || imagePosition === 'right' ? 'rounded-md' : ''}
      overflow-hidden
    `}>
      <img
        src={image}
        alt={imageAlt || ''}
        className={`
          w-full h-auto object-cover
          ${imagePosition === 'left' || imagePosition === 'right' ? 'h-full' : ''}
        `}
      />
    </div>
  ) : null;

  // Header component
  const HeaderComponent = header || (title || subtitle) ? (
    <div className={`${padding !== 'none' ? paddingClasses[padding] : ''} ${divider ? 'border-b border-gray-200' : ''}`}>
      {header || (
        <div>
          {title && (
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-sm text-gray-600">
              {subtitle}
            </p>
          )}
        </div>
      )}
    </div>
  ) : null;

  // Content component
  const ContentComponent = (
    <div className={`
      ${padding !== 'none' ? paddingClasses[padding] : ''}
      ${HeaderComponent && !divider ? 'pt-0' : ''}
      flex-1
    `}>
      {children}
    </div>
  );

  // Footer component
  const FooterComponent = footer ? (
    <div className={`${padding !== 'none' ? paddingClasses[padding] : ''} ${divider ? 'border-t border-gray-200' : ''} pt-0`}>
      {footer}
    </div>
  ) : null;

  // Layout based on image position
  if (image && (imagePosition === 'left' || imagePosition === 'right')) {
    return (
      <div
        className={cardClasses}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        tabIndex={isInteractive ? 0 : undefined}
        role={isInteractive ? 'button' : undefined}
        aria-disabled={disabled}
      >
        <div className={`flex ${imagePosition === 'right' ? 'flex-row-reverse' : ''}`}>
          <div className="flex-shrink-0 w-1/3">
            {ImageComponent}
          </div>
          <div className="flex-1 flex flex-col">
            {HeaderComponent}
            {ContentComponent}
            {FooterComponent}
          </div>
        </div>
      </div>
    );
  }

  // Default layout (vertical)
  return (
    <div
      className={cardClasses}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={isInteractive ? 0 : undefined}
      role={isInteractive ? 'button' : undefined}
      aria-disabled={disabled}
    >
      {image && imagePosition === 'top' && ImageComponent}
      {HeaderComponent}
      {ContentComponent}
      {FooterComponent}
      {image && imagePosition === 'bottom' && ImageComponent}
    </div>
  );
}

Card.displayName = 'Card';

export default Card;