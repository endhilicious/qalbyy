// PENTING: Komponen reusable ini digunakan luas di seluruh modul. Setiap perubahan WAJIB direkap di file 'recapt-changes-breadcrumb.md' pada folder komponen ini (packages/ui/src/Breadcrumb). Sertakan tanggal, lokasi baris/kode, dan alasan perubahan. Lakukan review ekstra hati-hati sebelum merge.
import React, { useState, useRef, useEffect } from 'react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
  separator?: React.ReactNode;
  showHome?: boolean;
  homeHref?: string;
  homeIcon?: React.ReactNode;
  homeLabel?: string;
  onHomeClick?: () => void;
  maxItems?: number;
  variant?: 'default' | 'simple' | 'compact';
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  className = '',
  separator,
  showHome = true,
  homeHref = '/',
  homeIcon,
  homeLabel = 'Home',
  onHomeClick,
  maxItems,
  variant = 'default',
  color = 'default',
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const getColorClasses = () => {
    switch (color) {
      case 'primary':
        return {
          link: 'text-blue-600 hover:text-blue-800 hover:bg-blue-50 focus:outline-blue-500 dark:text-blue-400 dark:hover:text-blue-300 dark:hover:bg-blue-900/20',
          current: 'text-blue-900 dark:text-blue-100',
          separator: 'text-blue-300 dark:text-blue-600'
        };
      case 'secondary':
        return {
          link: 'text-gray-600 hover:text-gray-800 hover:bg-gray-50 focus:outline-gray-500 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:bg-gray-700',
          current: 'text-gray-900 dark:text-gray-100',
          separator: 'text-gray-300 dark:text-gray-600'
        };
      case 'success':
        return {
          link: 'text-green-600 hover:text-green-800 hover:bg-green-50 focus:outline-green-500 dark:text-green-400 dark:hover:text-green-300 dark:hover:bg-green-900/20',
          current: 'text-green-900 dark:text-green-100',
          separator: 'text-green-300 dark:text-green-600'
        };
      case 'danger':
        return {
          link: 'text-red-600 hover:text-red-800 hover:bg-red-50 focus:outline-red-500 dark:text-red-400 dark:hover:text-red-300 dark:hover:bg-red-900/20',
          current: 'text-red-900 dark:text-red-100',
          separator: 'text-red-300 dark:text-red-600'
        };
      case 'warning':
        return {
          link: 'text-amber-600 hover:text-amber-800 hover:bg-amber-50 focus:outline-amber-500 dark:text-amber-400 dark:hover:text-amber-300 dark:hover:bg-amber-900/20',
          current: 'text-amber-900 dark:text-amber-100',
          separator: 'text-amber-300 dark:text-amber-600'
        };
      case 'info':
        return {
          link: 'text-cyan-600 hover:text-cyan-800 hover:bg-cyan-50 focus:outline-cyan-500 dark:text-cyan-400 dark:hover:text-cyan-300 dark:hover:bg-cyan-900/20',
          current: 'text-cyan-900 dark:text-cyan-100',
          separator: 'text-cyan-300 dark:text-cyan-600'
        };
      default:
        return {
          link: 'text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-blue-500 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:bg-gray-700',
          current: 'text-gray-900 font-medium dark:text-gray-100',
          separator: 'text-gray-400 dark:text-gray-600'
        };
    }
  };

  const colorClasses = getColorClasses();

  // Default separator based on variant
  const defaultSeparator = variant === 'simple' ? '/' : '>';
  const separatorElement = separator || (
    <span className={colorClasses.separator}>
      {defaultSeparator}
    </span>
  );

  // Calculate hidden items and display items
  const hasCollapsedItems = maxItems && maxItems > 0 && items.length > maxItems;
  
  let hiddenItems: BreadcrumbItem[] = [];
  let displayItems = items;
  
  if (hasCollapsedItems && items.length > 0) {
    // For maxItems=3 with 4 items: show [first, ..., last]
    // For maxItems=4 with 6 items: show [first, ..., last 2]
    // Logic: show first item, ellipsis, then last (maxItems-2) items
    const itemsToShowAtEnd = Math.max(1, maxItems - 2);
    
    hiddenItems = items.slice(1, items.length - itemsToShowAtEnd);
    
    displayItems = [
      items[0], // First item
      { label: '...', href: undefined } as BreadcrumbItem, // Ellipsis
      ...items.slice(-itemsToShowAtEnd) // Last items
    ];
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleItemClick = (item: BreadcrumbItem, event: React.MouseEvent) => {
    if (item.onClick) {
      event.preventDefault();
      item.onClick();
    }
  };

  const handleHomeClick = (event: React.MouseEvent) => {
    if (onHomeClick) {
      event.preventDefault();
      onHomeClick();
    }
  };

  const handleEllipsisClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleHiddenItemClick = (item: BreadcrumbItem, event: React.MouseEvent) => {
    setIsDropdownOpen(false);
    handleItemClick(item, event);
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'simple':
        return 'text-sm';
      case 'compact':
        return 'text-xs';
      default:
        return 'text-sm';
    }
  };

  const getSeparatorClasses = () => {
    switch (variant) {
      case 'simple':
        return 'mx-1.5 font-light';
      case 'compact':
        return 'mx-1';
      default:
        return 'mx-2';
    }
  };

  const getItemClasses = () => {
    switch (variant) {
      case 'simple':
        return 'px-0.5 py-0';
      case 'compact':
        return 'px-0.5 py-0';
      default:
        return 'px-1 py-0.5';
    }
  };

  const getIconClasses = () => {
    return variant === 'compact' ? 'w-3.5 h-3.5' : 'w-4 h-4';
  };

  return (
    <nav 
      className={`flex items-center text-gray-500 ${getVariantClasses()} ${className}`} 
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center list-none m-0 p-0 flex-wrap">
        {showHome && (
          <li className="flex items-center">
            {homeHref ? (
              <a
                href={homeHref}
                className={`flex items-center gap-1 no-underline transition-colors duration-200 rounded ${colorClasses.link} ${getItemClasses()}`}
                onClick={handleHomeClick}
                title={homeLabel}
              >
                {homeIcon && (
                  <span className={`flex items-center ${getIconClasses()}`}>
                    {homeIcon}
                  </span>
                )}
                <span className={homeIcon ? 'sr-only' : ''}>
                  {homeLabel}
                </span>
              </a>
            ) : (
              <span className="flex items-center gap-1">
                {homeIcon && (
                  <span className={`flex items-center ${getIconClasses()}`}>
                    {homeIcon}
                  </span>
                )}
                <span className={homeIcon ? 'sr-only' : ''}>
                  {homeLabel}
                </span>
              </span>
            )}
          </li>
        )}

        {displayItems.map((item, index) => (
          <React.Fragment key={index}>
            {(showHome || index > 0) && (
              <li 
                className={`flex items-center select-none ${colorClasses.separator} ${getSeparatorClasses()}`} 
                aria-hidden="true"
              >
                {separatorElement}
              </li>
            )}
            <li className="flex items-center relative">
              {item.label === '...' ? (
                <div className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    className={`flex items-center gap-1 transition-colors duration-200 rounded ${colorClasses.link} ${getItemClasses()}`}
                    onClick={handleEllipsisClick}
                    aria-expanded={isDropdownOpen}
                    aria-haspopup="true"
                  >
                    <span>...</span>
                  </button>
                  
                  {isDropdownOpen && hiddenItems.length > 0 && (
                    <div className="absolute top-full left-0 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50 min-w-max">
                      <ul className="py-1">
                        {hiddenItems.map((hiddenItem, hiddenIndex) => (
                          <li key={hiddenIndex}>
                            {hiddenItem.href ? (
                              <a
                                href={hiddenItem.href}
                                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
                                onClick={(e) => handleHiddenItemClick(hiddenItem, e)}
                              >
                                {hiddenItem.icon && (
                                  <span className={`flex items-center ${getIconClasses()}`}>
                                    {hiddenItem.icon}
                                  </span>
                                )}
                                <span>{hiddenItem.label}</span>
                              </a>
                            ) : (
                              <span className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-300">
                                {hiddenItem.icon && (
                                  <span className={`flex items-center ${getIconClasses()}`}>
                                    {hiddenItem.icon}
                                  </span>
                                )}
                                <span>{hiddenItem.label}</span>
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ) : item.href && index < displayItems.length - 1 ? (
                <a
                  href={item.href}
                  className={`flex items-center gap-1 no-underline transition-colors duration-200 rounded ${colorClasses.link} ${getItemClasses()}`}
                  onClick={(e) => handleItemClick(item, e)}
                >
                  {item.icon && (
                    <span className={`flex items-center ${getIconClasses()}`}>
                      {item.icon}
                    </span>
                  )}
                  <span>
                    {item.label}
                  </span>
                </a>
              ) : (
                <span 
                  className={`flex items-center gap-1 ${
                    index === displayItems.length - 1 ? colorClasses.current : ''
                  }`}
                  aria-current={index === displayItems.length - 1 ? 'page' : undefined}
                >
                  {item.icon && (
                    <span className={`flex items-center ${getIconClasses()}`}>
                      {item.icon}
                    </span>
                  )}
                  <span>{item.label}</span>
                </span>
              )}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};