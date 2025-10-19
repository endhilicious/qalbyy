// PENTING: Komponen reusable ini digunakan luas di seluruh modul. Setiap perubahan WAJIB direkap di file 'recapt-changes-infiniteloader.md' pada folder komponen ini (packages/ui/src/InfiniteLoader). Sertakan tanggal, lokasi baris/kode, dan alasan perubahan. Lakukan review ekstra hati-hati sebelum merge.
import type { ReactNode } from "react";
import { useState, useCallback, useRef, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "../lib/utils";

export interface InfiniteLoaderProps<TData> {
  data: TData[];
  renderCard: (item: TData, index: number) => ReactNode;
  pageSize?: number;
  hasMore?: boolean;
  onLoadMore?: () => void;
  loading?: boolean;
  className?: string;
  emptyMessage?: string;
  // Selection props
  selectable?: boolean;
  selectedItems?: TData[];
  onSelectionChange?: (selected: TData[]) => void;
  getItemId?: (item: TData) => string | number;
  // Loading props
  loadingMessage?: string;
  loadMoreButtonText?: string;
  showLoadMoreButton?: boolean;
  // Grid props
  columns?: 1 | 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
}

export function InfiniteLoader<TData>({
  data,
  renderCard,
  pageSize = 10,
  hasMore = false,
  onLoadMore,
  loading = false,
  className = "",
  emptyMessage = "No data found",
  selectable = false,
  selectedItems = [],
  onSelectionChange,
  getItemId = (item: any) =>
    (item as any).id || (item as any).user_id || JSON.stringify(item),
  loadingMessage = "Loading more items...",
  loadMoreButtonText = "Load More",
  showLoadMoreButton = true,
  columns = 1,
  gap = "md",
}: InfiniteLoaderProps<TData>) {
  const [displayedItems, setDisplayedItems] = useState<TData[]>(() => 
    data.slice(0, pageSize)
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIds, setSelectedIds] = useState<Set<string | number>>(
    new Set(),
  );
  const observerRef = useRef<IntersectionObserver>();
  const loadingRef = useRef<HTMLDivElement>(null);

  // Update displayed items when data or pageSize changes
  useEffect(() => {
    const initialItems = data.slice(0, pageSize);
    setDisplayedItems(initialItems);
    setCurrentPage(1);
  }, [data, pageSize]);

  // Initialize selected items from props
  useEffect(() => {
    if (selectedItems && selectable) {
      const ids = new Set(selectedItems.map((item) => getItemId(item)));
      setSelectedIds(ids);
    }
  }, [selectedItems, selectable, getItemId]);

  // Load more items
  const loadMore = useCallback(() => {
    if (loading || !hasMore) return;

    const nextPage = currentPage + 1;
    const startIndex = (nextPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const newItems = data.slice(startIndex, endIndex);

    if (newItems.length > 0) {
      setDisplayedItems((prev) => [...prev, ...newItems]);
      setCurrentPage(nextPage);
      onLoadMore?.();
    }
  }, [loading, hasMore, currentPage, pageSize, data, onLoadMore]);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    if (!loadingRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0] && entries[0].isIntersecting && hasMore && !loading) {
          loadMore();
        }
      },
      { threshold: 0.1 },
    );

    observerRef.current = observer;
    observer.observe(loadingRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [loadMore, hasMore, loading]);

  // Handle individual item selection
  const handleItemSelect = useCallback(
    (item: TData, checked: boolean) => {
      const itemId = getItemId(item);
      const newSelectedIds = new Set(selectedIds);

      if (checked) {
        newSelectedIds.add(itemId);
      } else {
        newSelectedIds.delete(itemId);
      }

      setSelectedIds(newSelectedIds);

      // Convert back to items and notify parent
      if (onSelectionChange) {
        const selectedItems = data.filter((item) =>
          newSelectedIds.has(getItemId(item)),
        );
        onSelectionChange(selectedItems);
      }
    },
    [selectedIds, data, getItemId, onSelectionChange],
  );

  // Handle select all
  const handleSelectAll = useCallback(
    (checked: boolean | "indeterminate") => {
      if (checked === true) {
        const allIds = new Set(data.map((item) => getItemId(item)));
        setSelectedIds(allIds);
        onSelectionChange?.(data);
      } else {
        setSelectedIds(new Set());
        onSelectionChange?.([]);
      }
    },
    [data, getItemId, onSelectionChange],
  );

  // Check if all items are selected
  const allSelected = data.length > 0 && selectedIds.size === data.length;
  const someSelected = selectedIds.size > 0 && selectedIds.size < data.length;

  // Grid classes
  const gridClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  };

  const gapClasses = {
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
  };

  if (data.length === 0) {
    return (
      <div className={cn("text-center py-8 text-gray-500", className)}>
        {emptyMessage}
      </div>
    );
  }

  return (
    <div className={className}>
      {/* Selection Controls */}
      {selectable && (
        <div className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-lg mb-4">
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={allSelected}
              ref={(input) => {
                if (input) input.indeterminate = someSelected;
              }}
              onChange={(e) => handleSelectAll(e.target.checked)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <span className="text-sm font-medium text-gray-700">
              {selectedIds.size > 0
                ? `${selectedIds.size} item${selectedIds.size > 1 ? "s" : ""} selected`
                : "Select items"}
            </span>
          </div>

          {selectedIds.size > 0 && (
            <button
              onClick={() => {
                setSelectedIds(new Set());
                onSelectionChange?.([]);
              }}
              className="px-3 py-1 text-sm text-red-600 border border-red-300 rounded hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Clear Selection
            </button>
          )}
        </div>
      )}

      {/* Cards Grid */}
      <div className={cn("grid", gridClasses[columns], gapClasses[gap])}>
        {displayedItems.map((item, index) => (
          <div key={`${getItemId(item)}-${index}`} className="relative">
            {/* Selection Checkbox */}
            {selectable && (
              <div className="absolute top-3 right-3 z-10">
                <input
                  type="checkbox"
                  checked={selectedIds.has(getItemId(item))}
                  onChange={(e) => handleItemSelect(item, e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded bg-white"
                />
              </div>
            )}

            {/* Card Content */}
            {renderCard(item, index)}
          </div>
        ))}
      </div>

      {/* Loading Indicator */}
      {loading && (
        <div className="flex justify-center py-6">
          <div className="flex items-center space-x-2">
            <Loader2 className="h-5 w-5 animate-spin text-blue-600" />
            <span className="text-gray-600">{loadingMessage}</span>
          </div>
        </div>
      )}

      {/* Load More Button (fallback) */}
      {hasMore && !loading && showLoadMoreButton && (
        <div className="flex justify-center py-6">
          <button
            onClick={loadMore}
            className="px-6 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {loadMoreButtonText}
          </button>
        </div>
      )}

      {/* Intersection Observer Target */}
      <div ref={loadingRef} className="h-4" />
    </div>
  );
}
