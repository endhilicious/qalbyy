'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight, ChevronDown, MoreHorizontal } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href: string;
  isCurrentPage?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  maxVisibleItems?: number;
  className?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ 
  items, 
  maxVisibleItems = 3,
  className = ''
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!items || items.length === 0) return null;

  // If items are within limit, show all
  if (items.length <= maxVisibleItems) {
    return (
      <nav aria-label="Breadcrumb" className={`flex items-center space-x-1 text-sm ${className}`}>
        <ol className="flex items-center space-x-1">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-gray-400 mx-1 flex-shrink-0" />
              )}
              {item.isCurrentPage ? (
                <span className="text-gray-900 font-medium truncate max-w-[120px] sm:max-w-[200px]">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-green-600 hover:text-green-700 transition-colors truncate max-w-[120px] sm:max-w-[200px] font-medium"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    );
  }

  // Show first item, dropdown, and last item
  const firstItem = items[0];
  const lastItem = items[items.length - 1];
  const middleItems = items.slice(1, -1);

  return (
    <nav aria-label="Breadcrumb" className={`flex items-center space-x-1 text-sm ${className}`}>
      <ol className="flex items-center space-x-1">
        {/* First Item */}
        <li className="flex items-center">
          <Link
            href={firstItem.href}
            className="text-green-600 hover:text-green-700 transition-colors font-medium truncate max-w-[100px] sm:max-w-[150px]"
          >
            {firstItem.label}
          </Link>
        </li>

        {/* Separator */}
        <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />

        {/* Dropdown for middle items */}
        {middleItems.length > 0 && (
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 transition-colors p-1 rounded-md hover:bg-gray-100"
              aria-expanded={isDropdownOpen}
              aria-label="Show hidden breadcrumb items"
            >
              <MoreHorizontal className="w-4 h-4" />
              <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-50 min-w-[200px] max-w-[300px]">
                {middleItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors truncate"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </li>
        )}

        {/* Separator before last item */}
        <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />

        {/* Last Item (Current Page) */}
        <li className="flex items-center">
          {lastItem.isCurrentPage ? (
            <span className="text-gray-900 font-medium truncate max-w-[120px] sm:max-w-[200px]">
              {lastItem.label}
            </span>
          ) : (
            <Link
              href={lastItem.href}
              className="text-green-600 hover:text-green-700 transition-colors font-medium truncate max-w-[120px] sm:max-w-[200px]"
            >
              {lastItem.label}
            </Link>
          )}
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
