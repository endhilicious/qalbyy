'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Search } from 'lucide-react';

export interface DropdownItem {
  id: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
  extra?: React.ReactNode;
}

interface SearchableDropdownProps {
  items: DropdownItem[];
  selectedId?: string;
  onSelect: (id: string) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  className?: string;
  dropdownClassName?: string;
  loading?: boolean;
  disabled?: boolean;
  showSearch?: boolean;
  maxHeight?: string;
  position?: 'left' | 'right';
  trigger?: React.ReactNode;
  onOpen?: () => void;
  onClose?: () => void;
}

const SearchableDropdown: React.FC<SearchableDropdownProps> = ({
  items,
  selectedId,
  onSelect,
  placeholder = 'Select item',
  searchPlaceholder = 'Search...',
  className = '',
  dropdownClassName = '',
  loading = false,
  disabled = false,
  showSearch = true,
  maxHeight = '16rem',
  position = 'right',
  trigger,
  onOpen,
  onClose
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedItem = items.find(item => item.id === selectedId);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        handleClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleOpen = () => {
    if (disabled) return;
    setIsOpen(true);
    onOpen?.();
    
    // Auto-scroll to selected item when dropdown opens
    if (selectedId) {
      setTimeout(() => {
        const selectedElement = document.querySelector(`[data-dropdown-item-id="${selectedId}"]`);
        if (selectedElement) {
          selectedElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }
      }, 100); // Small delay to ensure dropdown is rendered
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setSearchTerm('');
    onClose?.();
  };

  const handleToggle = () => {
    if (isOpen) {
      handleClose();
    } else {
      handleOpen();
    }
  };

  const handleSelect = (id: string) => {
    onSelect(id);
    handleClose();
  };

  const filteredItems = items.filter(item =>
    item.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const positionClasses = position === 'left' 
    ? 'left-0' 
    : 'right-0';

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Trigger */}
      {trigger ? (
        <div onClick={handleToggle} className="cursor-pointer">
          {trigger}
        </div>
      ) : (
        <button
          onClick={handleToggle}
          disabled={disabled}
          className={`w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
            isOpen ? 'ring-2 ring-green-500 bg-gray-100' : ''
          }`}
        >
          <div className="text-left flex-1 min-w-0">
            {selectedItem ? (
              <div className="flex items-center space-x-2">
                {selectedItem.icon}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 truncate">{selectedItem.label}</p>
                  {selectedItem.description && (
                    <p className="text-sm text-gray-500 truncate">{selectedItem.description}</p>
                  )}
                </div>
              </div>
            ) : (
              <p className="text-gray-500">{placeholder}</p>
            )}
          </div>
          <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ml-2 ${
            isOpen ? 'rotate-180' : ''
          }`} />
        </button>
      )}

      {/* Dropdown */}
      {isOpen && (
        <div className={`absolute ${positionClasses} top-full mt-2 bg-white rounded-xl shadow-xl border border-gray-200 z-50 overflow-hidden ${dropdownClassName}`} 
             style={{ width: trigger ? '320px' : '100%', maxHeight }}>
          
          {/* Search */}
          {showSearch && (
            <div className="p-4 border-b border-gray-200">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder={searchPlaceholder}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm text-gray-900 placeholder-gray-500"
                />
              </div>
            </div>
          )}

          {/* Items List */}
          <div className="overflow-y-auto" style={{ maxHeight: showSearch ? 'calc(16rem - 80px)' : '16rem' }}>
            {loading ? (
              <div className="p-4 text-center">
                <div className="w-6 h-6 border-2 border-green-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
                <p className="text-sm text-gray-500 mt-2">Loading...</p>
              </div>
            ) : filteredItems.length === 0 ? (
              <div className="p-4 text-center text-gray-500 text-sm">
                {searchTerm ? 'No items found' : 'No items available'}
              </div>
            ) : (
              filteredItems.map((item) => (
                <button
                  key={item.id}
                  data-dropdown-item-id={item.id}
                  onClick={() => handleSelect(item.id)}
                  className={`w-full px-4 py-3 text-left hover:bg-green-50 transition-colors border-b border-gray-100 last:border-b-0 ${
                    selectedId === item.id ? 'bg-green-50 text-green-700' : 'text-gray-900'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 flex-1 min-w-0">
                      {item.icon}
                      <div className="flex-1 min-w-0">
                        <p className={`font-medium truncate ${
                          selectedId === item.id ? 'text-green-700' : 'text-gray-900'
                        }`}>
                          {item.label}
                        </p>
                        {item.description && (
                          <p className="text-xs text-gray-500 truncate">{item.description}</p>
                        )}
                      </div>
                    </div>
                    {item.extra}
                    {selectedId === item.id && (
                      <div className="w-2 h-2 bg-green-500 rounded-full ml-2 flex-shrink-0"></div>
                    )}
                  </div>
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchableDropdown;
