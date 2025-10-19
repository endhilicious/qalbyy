"use client";
// PENTING: Komponen reusable ini digunakan luas di seluruh modul. Setiap perubahan WAJIB direkap di file 'recapt-changes-customtable.md' pada folder komponen ini (packages/ui/src/CustomTable). Sertakan tanggal, lokasi baris/kode, dan alasan perubahan. Lakukan review ekstra hati-hati sebelum merge.

import React, { useState, useMemo, useCallback } from 'react';
import { LucideIcon, ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

// Table Column Interface
export interface TableColumn<T> {
  key: keyof T | string;
  label: string;
  render?: (value: unknown, item: T, index: number) => React.ReactNode;
  mobileRender?: (value: unknown, item: T, index: number) => React.ReactNode;
  hideOnMobile?: boolean;
  align?: 'left' | 'center' | 'right';
  width?: string;
  sortable?: boolean;
  sortKey?: keyof T | string;
  className?: string;
  headerClassName?: string;
}

// Table Action Interface
export interface TableAction<T> {
  key: string;
  label: string;
  icon: LucideIcon;
  variant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
  onClick: (item: T) => void;
  condition?: (item: T) => boolean;
  title?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

// Table Config Interface
export interface TableConfig<T> {
  columns: TableColumn<T>[];
  actions?: TableAction<T>[];
  showRowNumbers?: boolean;
  responsive?: boolean;
  loading?: boolean;
  emptyState?: {
    icon?: LucideIcon;
    title?: string;
    description?: string;
    action?: {
      label: string;
      onClick: () => void;
    };
  };
  className?: string;
  mobileActionsPosition?: 'bottom' | 'top-right';
  pagination?: {
    enabled?: boolean;
    pageSize?: number;
    pageSizeOptions?: number[];
    showPageSizeSelector?: boolean;
    showInfo?: boolean;
  };
  striped?: boolean;
  hover?: boolean;
  compact?: boolean;
  bordered?: boolean;
  // Checklist functionality
  selectable?: boolean;
  selectableOptions?: {
    showSelectAll?: boolean;
    onSelectionChange?: (selectedItems: T[], selectedIds: string[]) => void;
    getItemId?: (item: T) => string;
    disableSelection?: (item: T) => boolean;
    selectedIds?: string[];
  };
}

// Sort Configuration Interface
interface SortConfig<T> {
  key: keyof T | string | null;
  direction: 'asc' | 'desc';
}

// Pagination State Interface
interface PaginationState {
  currentPage: number;
  pageSize: number;
}

// Main Component Props
export interface CustomTableProps<T> {
  data: T[];
  config: TableConfig<T>;
  onDataChange?: (data: T[]) => void;
  onRowClick?: (item: T, index: number) => void;
  className?: string;
  testId?: string;
}

export function CustomTable<T extends Record<string, unknown>>({
  data,
  config,
  onDataChange,
  onRowClick,
  className = '',
  testId,
}: CustomTableProps<T>) {
  const [sortConfig, setSortConfig] = useState<SortConfig<T>>({ key: null, direction: 'asc' });
  const [pagination, setPagination] = useState<PaginationState>({
    currentPage: 1,
    pageSize: config.pagination?.pageSize || 10,
  });

  // Selection state management
  const [selectedIds, setSelectedIds] = useState<Set<string>>(
    new Set(config.selectableOptions?.selectedIds || [])
  );

  const {
    columns,
    actions = [],
    showRowNumbers = false,
    responsive = true,
    loading = false,
    emptyState,
    mobileActionsPosition = 'bottom',
    striped = false,
    hover = true,
    compact = false,
    bordered = false,
    selectable = false,
    selectableOptions = {},
  } = config;

  // Sorting logic
  const sortedData = useMemo(() => {
    if (!sortConfig.key) return data;

    const sortKey = columns.find(col => col.key === sortConfig.key)?.sortKey || sortConfig.key;

    return [...data].sort((a, b) => {
      const aValue = a[sortKey as keyof T];
      const bValue = b[sortKey as keyof T];

      if (aValue == null && bValue == null) return 0;
      if (aValue == null) return sortConfig.direction === 'asc' ? -1 : 1;
      if (bValue == null) return sortConfig.direction === 'asc' ? 1 : -1;

      let comparison = 0;
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        comparison = aValue.localeCompare(bValue);
      } else if (typeof aValue === 'number' && typeof bValue === 'number') {
        comparison = aValue - bValue;
      } else if (aValue instanceof Date && bValue instanceof Date) {
        comparison = aValue.getTime() - bValue.getTime();
      } else {
        comparison = String(aValue).localeCompare(String(bValue));
      }

      return sortConfig.direction === 'asc' ? comparison : -comparison;
    });
  }, [data, sortConfig, columns]);

  // Pagination logic
  const paginatedData = useMemo(() => {
    if (!config.pagination?.enabled) return sortedData;

    const startIndex = (pagination.currentPage - 1) * pagination.pageSize;
    const endIndex = startIndex + pagination.pageSize;
    return sortedData.slice(startIndex, endIndex);
  }, [sortedData, pagination, config.pagination?.enabled]);

  // Mobile data for infinite loading
  const [mobileDisplayCount, setMobileDisplayCount] = useState(10);
  const mobileData = useMemo(() => {
    return sortedData.slice(0, mobileDisplayCount);
  }, [sortedData, mobileDisplayCount]);

  // Handle sorting
  const handleSort = useCallback((key: keyof T | string) => {
    setSortConfig(prevConfig => ({
      key,
      direction: prevConfig.key === key && prevConfig.direction === 'asc' ? 'desc' : 'asc',
    }));
  }, []);

  // Handle pagination
  const handlePageChange = useCallback((page: number) => {
    setPagination(prev => ({ ...prev, currentPage: page }));
  }, []);

  const handlePageSizeChange = useCallback((pageSize: number) => {
    setPagination(prev => ({ ...prev, pageSize, currentPage: 1 }));
  }, []);

  // Load more for mobile
  const handleLoadMore = useCallback(() => {
    setMobileDisplayCount(prev => prev + 10);
  }, []);

  // Selection helper functions
  const getItemId = useCallback((item: T) => {
    return selectableOptions.getItemId ? selectableOptions.getItemId(item) : String(item.id || item.key || JSON.stringify(item));
  }, [selectableOptions]);

  const isItemSelected = useCallback((item: T) => {
    return selectedIds.has(getItemId(item));
  }, [selectedIds, getItemId]);

  const isItemDisabled = useCallback((item: T) => {
    return selectableOptions.disableSelection ? selectableOptions.disableSelection(item) : false;
  }, [selectableOptions]);

  const handleSelectItem = useCallback((item: T) => {
    if (isItemDisabled(item)) return;

    const itemId = getItemId(item);
    const newSelectedIds = new Set(selectedIds);
    
    if (newSelectedIds.has(itemId)) {
      newSelectedIds.delete(itemId);
    } else {
      newSelectedIds.add(itemId);
    }
    
    setSelectedIds(newSelectedIds);
    
    // Notify parent component
    if (selectableOptions.onSelectionChange) {
      const selectedItems = data.filter(item => newSelectedIds.has(getItemId(item)));
      selectableOptions.onSelectionChange(selectedItems, Array.from(newSelectedIds));
    }
  }, [selectedIds, data, getItemId, isItemDisabled, selectableOptions]);

  const handleSelectAll = useCallback(() => {
    const currentPageData = config.pagination?.enabled ? paginatedData : sortedData;
    const selectableItems = currentPageData.filter(item => !isItemDisabled(item));
    const allCurrentSelected = selectableItems.every(item => isItemSelected(item));
    
    const newSelectedIds = new Set(selectedIds);
    
    if (allCurrentSelected) {
      // Deselect all current page items
      selectableItems.forEach(item => {
        newSelectedIds.delete(getItemId(item));
      });
    } else {
      // Select all current page items
      selectableItems.forEach(item => {
        newSelectedIds.add(getItemId(item));
      });
    }
    
    setSelectedIds(newSelectedIds);
    
    // Notify parent component
    if (selectableOptions.onSelectionChange) {
      const selectedItems = data.filter(item => newSelectedIds.has(getItemId(item)));
      selectableOptions.onSelectionChange(selectedItems, Array.from(newSelectedIds));
    }
  }, [selectedIds, data, paginatedData, sortedData, config.pagination?.enabled, getItemId, isItemSelected, isItemDisabled, selectableOptions]);

  // Calculate pagination info
  const totalItems = sortedData.length;
  const totalPages = Math.ceil(totalItems / pagination.pageSize);
  const startItem = (pagination.currentPage - 1) * pagination.pageSize + 1;
  const endItem = Math.min(pagination.currentPage * pagination.pageSize, totalItems);

  // Check if there are actions
  const hasActions = actions.length > 0;
  const actionsColumn = columns.find(col => col.key === 'actions');
  const hasCustomActions = !!actionsColumn;

  // Loading state
  if (loading) {
    return (
      <div className='flex items-center justify-center p-8' data-testid={testId ? `${testId}-loading` : undefined}>
        <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600'></div>
        <span className='ml-2 text-gray-600'>Loading...</span>
      </div>
    );
  }

  // Empty state
  if (!paginatedData.length && !loading) {
    const EmptyIcon = emptyState?.icon;
    return (
      <div className='text-center py-12' data-testid={testId ? `${testId}-empty` : undefined}>
        {EmptyIcon && <EmptyIcon className='mx-auto h-12 w-12 text-gray-400 mb-4' />}
        <h3 className='text-lg font-medium text-gray-900 mb-2'>
          {emptyState?.title || 'No data available'}
        </h3>
        <p className='text-gray-500 mb-4'>
          {emptyState?.description || 'There are no items to display.'}
        </p>
        {emptyState?.action && (
          <button
            onClick={emptyState.action.onClick}
            className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
          >
            {emptyState.action.label}
          </button>
        )}
      </div>
    );
  }

  // Desktop table
  const DesktopTable = () => (
    <div className='overflow-x-auto'>
      <table className={`min-w-full divide-y divide-gray-200 ${bordered ? 'border border-gray-200' : ''}`}>
        <thead className='bg-gray-50'>
          <tr>
            {selectable && (
              <th className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${compact ? 'px-3 py-2' : ''}`}>
                {selectableOptions?.showSelectAll !== false && (
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    checked={paginatedData.length > 0 && paginatedData.every(item => isItemSelected(item))}
                    onChange={handleSelectAll}
                    disabled={paginatedData.length === 0}
                  />
                )}
              </th>
            )}
            {showRowNumbers && (
              <th className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${compact ? 'px-3 py-2' : ''}`}>
                No
              </th>
            )}
            {columns.map((column, index) => (
              <th
                key={index}
                className={`px-6 py-3 text-${column.align || 'left'} text-xs font-medium text-gray-500 uppercase tracking-wider ${
                  column.sortable !== false ? 'cursor-pointer hover:bg-gray-100 select-none' : ''
                } ${
                  compact ? 'px-3 py-2' : ''
                } ${column.headerClassName || ''}`}
                style={{
                  width: column.width ? (column.width.includes('%') || column.width.includes('px') || column.width.includes('rem') ? column.width : `${column.width}px`) : undefined,
                  minWidth: column.width ? undefined : '120px'
                }}
                onClick={() => column.sortable !== false && handleSort(column.key as string)}
              >
                <div className='flex items-center space-x-1'>
                  <span>{column.label}</span>
                  {column.sortable !== false && (
                    <div className='flex flex-col'>
                      <ChevronUp
                        className={`h-3 w-3 ${
                          sortConfig.key === column.key && sortConfig.direction === 'asc'
                            ? 'text-blue-600'
                            : 'text-gray-400'
                        }`}
                      />
                      <ChevronDown
                        className={`h-3 w-3 -mt-1 ${
                          sortConfig.key === column.key && sortConfig.direction === 'desc'
                            ? 'text-blue-600'
                            : 'text-gray-400'
                        }`}
                      />
                    </div>
                  )}
                </div>
              </th>
            ))}
            {(hasActions || hasCustomActions) && (
              <th className={`px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider ${compact ? 'px-3 py-2' : ''}`}>
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody className={`bg-white divide-y divide-gray-200 ${striped ? 'divide-y-0' : ''}`}>
          {paginatedData.map((item, index) => {
            const actualIndex = (pagination.currentPage - 1) * pagination.pageSize + index;
            const isEven = actualIndex % 2 === 0;
            return (
              <tr 
                key={index} 
                className={`
                  ${striped ? (isEven ? 'bg-white' : 'bg-gray-50') : ''}
                  ${hover ? 'hover:bg-gray-50' : ''}
                  ${onRowClick ? 'cursor-pointer' : ''}
                `}
                onClick={() => onRowClick?.(item, actualIndex)}
              >
                {selectable && (
                  <td className={`px-6 py-4 whitespace-nowrap text-sm text-gray-900 ${compact ? 'px-3 py-2' : ''}`}>
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      checked={isItemSelected(item)}
                      onChange={() => handleSelectItem(item)}
                      disabled={isItemDisabled(item)}
                      onClick={(e) => e.stopPropagation()}
                    />
                  </td>
                )}
                {showRowNumbers && (
                  <td className={`px-6 py-4 whitespace-nowrap text-sm text-gray-900 ${compact ? 'px-3 py-2' : ''}`}>
                    {actualIndex + 1}
                  </td>
                )}
                {columns.map((column, colIndex) => (
                  <td
                    key={colIndex}
                    className={`px-6 py-4 text-sm text-gray-900 text-${column.align || 'left'} ${
                      compact ? 'px-3 py-2' : ''
                    } ${column.className || ''}`}
                    style={{ 
                      wordWrap: 'break-word',
                      wordBreak: 'break-word',
                      width: column.width ? (column.width.includes('%') || column.width.includes('px') || column.width.includes('rem') ? column.width : `${column.width}px`) : undefined,
                      minWidth: column.width ? undefined : '120px',
                      maxWidth: column.width ? undefined : '300px'
                    }}
                  >
                    {column.render
                      ? column.render(item[column.key as keyof T], item, actualIndex)
                      : String(item[column.key as keyof T] || '-')}
                  </td>
                ))}
                {(hasActions || hasCustomActions) && (
                  <td className={`px-6 py-4 whitespace-nowrap text-center text-sm font-medium ${compact ? 'px-3 py-2' : ''}`}>
                    {hasCustomActions ? (
                      actionsColumn?.render &&
                      actionsColumn.render(item[actionsColumn.key as keyof T], item, actualIndex)
                    ) : (
                      <div className='flex items-center justify-center space-x-2'>
                        {actions.map((action, actionIndex) => {
                          if (action.condition && !action.condition(item)) {
                            return null;
                          }

                          const Icon = action.icon;
                          const variantClasses = {
                            primary: 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100',
                            secondary: 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100',
                            success: 'bg-green-50 text-green-700 border-green-200 hover:bg-green-100',
                            danger: 'bg-red-50 text-red-700 border-red-200 hover:bg-red-100',
                            warning: 'bg-yellow-50 text-yellow-700 border-yellow-200 hover:bg-yellow-100',
                            info: 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100',
                          };

                          const sizeClasses = {
                            sm: 'p-1.5',
                            md: 'p-2',
                            lg: 'p-2.5',
                          };

                          const iconSizeClasses = {
                            sm: 'h-3 w-3',
                            md: 'h-4 w-4',
                            lg: 'h-5 w-5',
                          };

                          return (
                            <button
                              key={actionIndex}
                              onClick={(e) => {
                                e.stopPropagation();
                                action.onClick(item);
                              }}
                              title={action.title || action.label}
                              className={`inline-flex items-center border text-xs font-medium rounded-md transition-colors duration-200 ${variantClasses[action.variant]} ${sizeClasses[action.size || 'md']} ${action.className || ''}`}
                            >
                              <Icon className={iconSizeClasses[action.size || 'md']} />
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );

  // Mobile cards
  const MobileCards = () => (
    <div className='space-y-4'>
      {mobileData.map((item, index) => (
        <div
          key={index}
          className={`bg-white border border-gray-200 rounded-lg p-4 shadow-sm relative ${
            onRowClick ? 'cursor-pointer hover:shadow-md transition-shadow' : ''
          } ${isItemSelected(item) ? 'ring-2 ring-blue-500 border-blue-300' : ''}`}
          onClick={() => onRowClick?.(item, index)}
        >
          {/* Checkbox for mobile selection */}
          {selectable && (
            <div className='absolute top-3 left-3 z-10'>
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                checked={isItemSelected(item)}
                onChange={() => handleSelectItem(item)}
                disabled={isItemDisabled(item)}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}

          {/* Actions in top-right corner for mobile */}
          {mobileActionsPosition === 'top-right' && (hasActions || hasCustomActions) && (
            <div className='absolute top-3 right-3 z-10'>
              {hasCustomActions ? (
                actionsColumn?.mobileRender &&
                actionsColumn.mobileRender(item[actionsColumn.key as keyof T], item, index)
              ) : (
                <div className='flex flex-wrap gap-1'>
                  {actions.map((action, actionIndex) => {
                    if (action.condition && !action.condition(item)) {
                      return null;
                    }

                    const Icon = action.icon;
                    const variantClasses = {
                      primary: 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100',
                      secondary: 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100',
                      success: 'bg-green-50 text-green-700 border-green-200 hover:bg-green-100',
                      danger: 'bg-red-50 text-red-700 border-red-200 hover:bg-red-100',
                      warning: 'bg-yellow-50 text-yellow-700 border-yellow-200 hover:bg-yellow-100',
                      info: 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100',
                    };

                    return (
                      <button
                        key={actionIndex}
                        onClick={(e) => {
                          e.stopPropagation();
                          action.onClick(item);
                        }}
                        title={action.title || action.label}
                        className={`inline-flex items-center p-1.5 border text-xs font-medium rounded-md transition-colors duration-200 ${variantClasses[action.variant]} ${action.className || ''}`}
                      >
                        <Icon className='h-3 w-3' />
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          <div
            className={`space-y-3 ${mobileActionsPosition === 'top-right' && (hasActions || hasCustomActions) ? 'pr-16' : ''} ${selectable ? 'pl-8' : ''}`}
          >
            {columns.map((column, colIndex) => {
              if (column.hideOnMobile || column.key === 'actions') return null;

              const value = column.key === 'index' ? index + 1 : item[column.key as keyof T];
              return (
                <div key={colIndex} className='flex flex-col'>
                  <div className='text-xs font-medium text-gray-500 mb-1'>{column.label}</div>
                  <div className='text-sm text-gray-900 break-words'>
                    {column.mobileRender
                      ? column.mobileRender(value, item, index)
                      : column.render
                        ? column.render(value, item, index)
                        : String(value || '-')}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Actions at bottom for mobile */}
          {mobileActionsPosition === 'bottom' && (hasActions || hasCustomActions) && (
            <div className='mt-4 pt-4 border-t border-gray-200'>
              {hasCustomActions ? (
                actionsColumn?.mobileRender &&
                actionsColumn.mobileRender(item[actionsColumn.key as keyof T], item, index)
              ) : (
                <div className='flex flex-wrap gap-2'>
                  {actions.map((action, actionIndex) => {
                    if (action.condition && !action.condition(item)) {
                      return null;
                    }

                    const Icon = action.icon;
                    const variantClasses = {
                      primary: 'bg-blue-600 text-white hover:bg-blue-700',
                      secondary: 'bg-gray-600 text-white hover:bg-gray-700',
                      success: 'bg-green-600 text-white hover:bg-green-700',
                      danger: 'bg-red-600 text-white hover:bg-red-700',
                      warning: 'bg-yellow-600 text-white hover:bg-yellow-700',
                      info: 'bg-blue-600 text-white hover:bg-blue-700',
                    };

                    return (
                      <button
                        key={actionIndex}
                        onClick={(e) => {
                          e.stopPropagation();
                          action.onClick(item);
                        }}
                        title={action.title || action.label}
                        className={`inline-flex items-center px-3 py-2 border text-sm font-medium rounded-md transition-colors duration-200 ${variantClasses[action.variant]} ${action.className || ''}`}
                      >
                        <Icon className='h-4 w-4 mr-2' />
                        {action.label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      ))}

      {/* Load more button for mobile */}
      {mobileData.length < sortedData.length && (
        <div className='text-center py-4'>
          <button
            onClick={handleLoadMore}
            className='inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
          >
            Load More ({sortedData.length - mobileData.length} remaining)
          </button>
        </div>
      )}

      {/* Mobile completion message */}
      {mobileData.length >= sortedData.length && sortedData.length > 0 && (
        <div className='text-center py-6 border-t border-gray-200 mt-6'>
          <div className='inline-flex items-center space-x-2 text-sm text-gray-500'>
            <div className='w-2 h-2 bg-green-500 rounded-full'></div>
            <span>All {mobileData.length} items displayed</span>
          </div>

          {/* Decorative Line */}
          <div className='w-24 h-0.5 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mt-2 mx-auto'></div>
        </div>
      )}
    </div>
  );

  // Pagination component
  const Pagination = () => {
    if (!config.pagination?.enabled || totalPages <= 1) return null;

    const getPageNumbers = () => {
      const pages = [];
      const showPages = 5;
      let startPage = Math.max(1, pagination.currentPage - Math.floor(showPages / 2));
      let endPage = Math.min(totalPages, startPage + showPages - 1);

      if (endPage - startPage + 1 < showPages) {
        startPage = Math.max(1, endPage - showPages + 1);
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      return pages;
    };

    return (
      <div className='bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6'>
        <div className='flex-1 flex justify-between sm:hidden'>
          <button
            onClick={() => handlePageChange(pagination.currentPage - 1)}
            disabled={pagination.currentPage === 1}
            className='relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed'
          >
            Previous
          </button>
          <button
            onClick={() => handlePageChange(pagination.currentPage + 1)}
            disabled={pagination.currentPage === totalPages}
            className='ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed'
          >
            Next
          </button>
        </div>
        <div className='hidden sm:flex-1 sm:flex sm:items-center sm:justify-between'>
          <div className='flex items-center space-x-4'>
            {config.pagination?.showInfo !== false && (
              <p className='text-sm text-gray-700'>
                Showing <span className='font-medium'>{startItem}</span> to{' '}
                <span className='font-medium'>{endItem}</span> of{' '}
                <span className='font-medium'>{totalItems}</span> results
              </p>
            )}

            {config.pagination?.showPageSizeSelector && (
              <div className='flex items-center space-x-2'>
                <label className='text-sm text-gray-700'>Show:</label>
                <select
                  value={pagination.pageSize}
                  onChange={e => handlePageSizeChange(Number(e.target.value))}
                  className='border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500'
                >
                  {config.pagination.pageSizeOptions?.map(size => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
          <div>
            <nav className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px'>
              <button
                onClick={() => handlePageChange(pagination.currentPage - 1)}
                disabled={pagination.currentPage === 1}
                className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed'
              >
                <ChevronLeft className='h-5 w-5' />
              </button>

              {getPageNumbers().map(page => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                    page === pagination.currentPage
                      ? 'z-10 bg-blue-50 border-blue-500 text-blue-600'
                      : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(pagination.currentPage + 1)}
                disabled={pagination.currentPage === totalPages}
                className='relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed'
              >
                <ChevronRight className='h-5 w-5' />
              </button>
            </nav>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={className} data-testid={testId}>
      {responsive ? (
        <>
          {/* Desktop View */}
          <div className='hidden md:block'>
            <DesktopTable />
            {config.pagination?.enabled && <Pagination />}
          </div>

          {/* Mobile View */}
          <div className='md:hidden'>
            <MobileCards />
          </div>
        </>
      ) : (
        <>
          <DesktopTable />
          {config.pagination?.enabled && <Pagination />}
        </>
      )}
    </div>
  );
}